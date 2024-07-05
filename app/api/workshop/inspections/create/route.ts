import dbConnect from "@/app/api/db";
import middlewareApi from "@/app/api/midd/_middleware.api";
import { NextResponse } from "next/server";
import Inspection from '../../../../../models/workshops/inspections.model';
import Client from '../../../../../models/workshops/clients.model';
import Vehicle from '../../../../../models/workshops/vehicles/vehicles.model';
import Calendar from '../../../../../models/workshops/calendars.model';
export async function POST(
    req: Request,
  ) {
        try {  
          await dbConnect();
          if(middlewareApi()){
            let body = await req.json();
            var addingVehicle = new Vehicle({
              owner: body?.object?.owner,
              brand: body?.object?.vehicle?.brand,
              model: body?.object?.vehicle?.model,
              year: body?.object?.vehicle?.year,
              plate: body?.object?.vehicle?.plate,
              vin: body?.object?.vehicle?.vin
            });
            if(body?.object?.vehicle?._id === ''){
              addingVehicle.markModified("vehicles");
              addingVehicle.save()
              if(addingVehicle) body.object.vehicle._id = String(addingVehicle?._id);
            }
            if(body?.object?.client?._id === ''){
              const addingClient = new Client({
                owner: body?.object?.owner,
                name: body?.object?.client?.name,
                lastname: body?.object?.client?.lastname,
                year: body?.object?.client?.year,
                email: body?.object?.client?.email,
                phone: body?.object?.client?.phone,
                birth: body?.object?.client?.birth,
                ruc: body?.object?.client?.ruc,
                vehicles: body.object.vehicle._id
              });
              addingClient.markModified("clients");
              addingClient.save()
              if(addingClient) body.object.client._id = String(addingClient?._id);
            }
            const addingInspection = new Inspection(body?.object);
            addingInspection.markModified("inspections");
            addingInspection.save();
            if (addingInspection) {
              if(body?.calendars?.length > 0){
                const addingCalendars = Calendar.insertMany([...body?.calendars?.map((e)  => {
                  return {
                    dateStart: e?.dateStart,
                    dateEnd: new Date(new Date(e?.dateStart).setHours(new Date(e?.dateStart).getHours() + 1)),
                    checked: 'off',
                    owner: body?.object?.owner,
                    client: body?.object?.client._id,
                    vehicle: body?.object?.vehicle._id,
                    inspection : String(addingInspection._id),
                    title: e?.description,
                  }
                })])
              }
              return NextResponse
                .json({ message: "Inspection registered", inspection: addingInspection });
            } else return NextResponse.json({ message: "Inspection not registered" });
          }
          return NextResponse.json({message: 'Invalid auth'});
        } catch (errors) {
          return NextResponse.json({ message: "Invalid body or error" });
        }
}
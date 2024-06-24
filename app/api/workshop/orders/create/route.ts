import dbConnect from "@/app/api/db";
import middlewareApi from "@/app/api/midd/_middleware.api";
import { NextResponse } from "next/server";
import Order from '../../../../../models/workshops/orders.model';
import Client from '../../../../../models/workshops/clients.model';
import Vehicle from '../../../../../models/workshops/vehicles.model';

export async function POST(
    req: Request,
  ) {
        try {  
          await dbConnect();
          if(middlewareApi()){
            let body = await req.json();
            const addingOrder = new Order(body);
            addingOrder.markModified("orderservice");
            addingOrder.save()
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
            if (addingOrder) {
              return NextResponse
                .json({ message: "Order service registered", order: addingOrder });
            } else return NextResponse.json({ message: "Order service not registered" });
          }
          return NextResponse.json({message: 'Invalid auth'});
        } catch (errors) {
          return NextResponse.json({ message: "Invalid body or error" });
        }
  }
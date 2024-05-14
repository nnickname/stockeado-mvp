import dbConnect from "@/app/api/db";
import middlewareApi from "@/app/api/midd/_middleware.api";
import { NextResponse } from "next/server";
import Vehicle from '../../../../../models/workshops/vehicles.model';
export async function POST(
    req: Request,
  ) {
        try {  
          await dbConnect();
          if(middlewareApi()){
            let body = await req.json();
            
            const addingVehicle = new Vehicle(body);
            addingVehicle.markModified("vehicles");
            addingVehicle.save()
            if (addingVehicle) {
              return NextResponse
                .json({ message: "Vehicle registered", vehicle: addingVehicle });
            } else return NextResponse.json({ message: "Vehicle not registered" });
          }
          return NextResponse.json({message: 'Invalid auth'});
        } catch (errors) {
          return NextResponse.json({ message: "Invalid body or error" });
        }
  }
import dbConnect from "@/app/api/db";
import middlewareApi from "@/app/api/midd/_middleware.api";
import { NextResponse } from "next/server";
import VehicleBrand from '../../../../../../models/workshops/vehicles/brands.model';
export async function POST(
    req: Request,
  ) {
        try {  
          await dbConnect();
          if(middlewareApi()){
            let body = await req.json();
            
            const addingVehicle = new VehicleBrand(body);
            addingVehicle.markModified("vehiclesbrands");
            addingVehicle.save()
            if (addingVehicle) {
              return NextResponse
                .json({ message: "VehicleBrand registered", vehicle: addingVehicle });
            } else return NextResponse.json({ message: "Vehicle not registered" });
          }
          return NextResponse.json({message: 'Invalid auth'});
        } catch (errors) {
          return NextResponse.json({ message: "Invalid body or error" });
        }
  }
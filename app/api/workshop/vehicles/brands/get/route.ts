import dbConnect from "@/app/api/db";
import { NextResponse } from "next/server";
import VehicleBrands from '../../../../../../models/workshops/vehicles/brands.model';


export async function POST(
    req: Request,
  ) {
        try {  
            await dbConnect();
            const vehicleResponse = await VehicleBrands.find();
            return NextResponse.json({ message: "VehicleBrand find", brands: vehicleResponse});
          
          return NextResponse.json({message: 'Invalid auth'});
        } catch (errors) {
          console.log(errors);
          return NextResponse.json({ message: "Invalid body or error" });
        }
}
import dbConnect from "@/app/api/db";
import { NextResponse } from "next/server";
import Vehicle from '../../../../../models/workshops/vehicles.model';
export async function POST(
    req: Request,
  ) {
        try {  
            await dbConnect();
            let body = await req.json();
            if(body === undefined || body === null) return NextResponse.json({ message: "Invalid body men and yes, I didn't take the trouble to validate the body" });
            const response = await Vehicle.find({owner: body._id});
            return NextResponse.json({ message: "Vehicles find", vehicles: response});
          
          return NextResponse.json({message: 'Invalid auth'});
        } catch (errors) {
          console.log(errors);
          return NextResponse.json({ message: "Invalid body or error" });
        }
}
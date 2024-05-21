import { NextResponse } from "next/server";
import dbConnect from "./../../../db";
import Vehicle from '../../../../../models/workshops/vehicles.model';
export async function POST(
    req: Request,
  ) {
        try {  
            await dbConnect();
            let body = await req.json();
            if(body === undefined || body === null) return NextResponse.json({ message: "Invalid body men and yes, I didn't take the trouble to validate the body" });
            const response = await Vehicle.findOneAndUpdate({_id: body._id}, { ...body?.object});
            if(response) return NextResponse.json({ message: "Vehicle updated", vehicle: response});
          
            return NextResponse.json({ message: "Invalid auth" });
        } catch (errors) {
          return NextResponse.json({ message: "Invalid body or error" });
        }
}

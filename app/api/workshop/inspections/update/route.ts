import { NextResponse } from "next/server";
import dbConnect from "./../../../db";
import Inspection from '../../../../../models/workshops/inspections.model';
export async function POST(
    req: Request,
  ) {
        try {  
            await dbConnect();
            let body = await req.json();
            if(body === undefined || body === null) return NextResponse.json({ message: "Invalid body men and yes, I didn't take the trouble to validate the body" });
            const response = await Inspection.findOneAndUpdate({_id: body._id}, { ...body?.object});
            if(response) return NextResponse.json({ message: "Inspection updated", inspection: response});
          
            return NextResponse.json({ message: "Invalid auth" });
        } catch (errors) {
          return NextResponse.json({ message: "Invalid body or error" });
        }
}

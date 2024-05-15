import dbConnect from "@/app/api/db";
import middlewareApi from "@/app/api/midd/_middleware.api";
import { NextResponse } from "next/server";
import Inspection from '../../../../../models/workshops/inspections.model';
export async function POST(
    req: Request,
  ) {
        try {  
          await dbConnect();
          if(middlewareApi()){
            let body = await req.json();
            
            const addingInspection = new Inspection(body?.object);
            addingInspection.markModified("inspections");
            addingInspection.save()
            if (addingInspection) {
              return NextResponse
                .json({ message: "Inspection registered", inspection: addingInspection });
            } else return NextResponse.json({ message: "Inspection not registered" });
          }
          return NextResponse.json({message: 'Invalid auth'});
        } catch (errors) {
          return NextResponse.json({ message: "Invalid body or error" });
        }
}
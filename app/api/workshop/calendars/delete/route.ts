import dbConnect from "../../../db";
import { NextResponse } from "next/server";
import Calendar from "../../../../../models/workshops/calendars.model";
import { headers } from "next/headers";
import middlewareApi from "../../../midd/_middleware.api";

export async function POST(
    req: Request, res: Response, next: any
  ) {
        try {  
          if(middlewareApi()){
            await dbConnect();
            let body = await req.json();
            if(body === undefined || body === null) return NextResponse.json({ message: "Invalid body men and yes, I didn't take the trouble to validate the body" });
            if(body?._id?.length > 10){
                const response = await Calendar.findByIdAndDelete({_id: body?._id});
                if(response !== undefined){
                  return NextResponse.json({message: 'Valid request', deleted: true});
                }
            }
          }
          return NextResponse.json({message: 'Invalid auth'});
          
        } catch (errors) {
          console.log(errors);
          return NextResponse.json({ message: "Invalid body or error" });
        }
}
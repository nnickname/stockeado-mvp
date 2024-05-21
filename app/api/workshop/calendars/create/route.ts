import dbConnect from "@/app/api/db";
import middlewareApi from "@/app/api/midd/_middleware.api";
import { NextResponse } from "next/server";
import Calendar from '../../../../../models/workshops/calendars.model';
export async function POST(
    req: Request,
  ) {
        try {  
          await dbConnect();
          if(middlewareApi()){
            let body = await req.json();
            
            const addingCalendar = new Calendar(body);
            addingCalendar.markModified("calendars");
            addingCalendar.save()
            if (addingCalendar) {
              return NextResponse
                .json({ message: "Calendar registered", calendar: addingCalendar });
            } else return NextResponse.json({ message: "Calendar not registered" });
          }
          return NextResponse.json({message: 'Invalid auth'});
        } catch (errors) {
          return NextResponse.json({ message: "Invalid body or error" });
        }
  }
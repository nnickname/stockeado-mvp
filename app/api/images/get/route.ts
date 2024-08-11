import dbConnect from "@/app/api/db";
import { NextResponse } from "next/server";
import ImageController from '../../../../models/images.model';


export async function POST(
    req: Request,
  ) {
        try {  
            await dbConnect();
            let body = await req.json();
            if(body === undefined || body ===  null) return NextResponse.json({ message: "Invalid body men and yes, I didn't take the trouble to validate the body" });
            const imageResponse = await ImageController.findOne({_id: body._id});
            
            if(imageResponse){
                return NextResponse.json({ message: "Image find", image: imageResponse?.data});
            }
            return NextResponse.json({message: 'Invalid auth'});
        } catch (errors) {
          console.log(errors);
          return NextResponse.json({ message: "Invalid body or error" });
        }
}
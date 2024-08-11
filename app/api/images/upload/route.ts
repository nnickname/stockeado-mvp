import dbConnect from "@/app/api/db";
import middlewareApi from "@/app/api/midd/_middleware.api";
import { NextResponse } from "next/server";
import ImageController from '../../../../models/images.model';

export async function POST(
    req: Request,
  ) {
        try {  
          await dbConnect();
          if(middlewareApi()){
            let body = await req.json();
            
            const addingImage = new ImageController(body?.object);
            addingImage.markModified("Images");
            addingImage.save();
            if (addingImage) {
              return NextResponse
                .json({ message: "Image upload correctly", image: addingImage });
            } else return NextResponse.json({ message: "Image not registered" });
          }
          return NextResponse.json({message: 'Invalid auth'});
        } catch (errors) {
          return NextResponse.json({ message: "Invalid body or error" });
        }
}
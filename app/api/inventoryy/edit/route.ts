import dbConnect from "../../db";
import { NextResponse } from "next/server";
import Inventory from "../../../../models/inventory.model";
import { headers } from "next/headers";
import middlewareApi from "../../midd/_middleware.api";

export async function GET (req: Request | any, res: Response, next: any){
  try{
    if(middlewareApi()){
      await dbConnect();
      const deleted = headers().get('id');
      if(deleted?.length > 10){
        const response = await Inventory.findByIdAndDelete({_id: deleted});
        if(response !== undefined){
          return NextResponse.json({message: 'Valid tokens', deleted: true});
        }
      }
      return NextResponse.json({message: 'Invalid token'});
    }
    return NextResponse.json({message: 'Invalid auth'});
  }
  catch (errors) {
    console.log(errors);
    return NextResponse.json({ message: "Invalid body or error" });
  }
}

export async function POST(
    req: Request, res: Response, next: any
  ) {
        try {  
          if(middlewareApi()){
            await dbConnect();
            let body = await req.json();
            if(body === undefined || body === null) return NextResponse.json({ message: "Invalid body men and yes, I didn't take the trouble to validate the body" });
            const response = await Inventory.findOneAndUpdate({_id: body._id}, { ...body });
            return NextResponse.json({ message: "Item updated", item: response});
          }
          return NextResponse.json({message: 'Invalid auth'});
          
        } catch (errors) {
          console.log(errors);
          return NextResponse.json({ message: "Invalid body or error" });
        }
}
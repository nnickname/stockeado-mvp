import dbConnect from "../../db";
import { NextResponse } from "next/server";
import Inventory from "../../../../models/inventoryModel";
import { headers } from "next/headers";

export async function GET (req: Request | any, res: Response, next: any){
  const deleted = headers().get('id');
  const response = await Inventory.findByIdAndDelete({_id: deleted});
  if(response !== undefined){
    return NextResponse.json({message: 'Valid tokens', deleted: true});
  }
  return NextResponse.json({message: 'Invalid token'});
}

export async function POST(
    req: Request,
  ) {
    await dbConnect();
        try {  
          
          let body = await req.json();
          if(body === undefined || body === null) return NextResponse.json({ message: "Invalid body men and yes, I didn't take the trouble to validate the body" });
          const response = await Inventory.findOneAndUpdate({_id: body._id}, { ...body });
          return NextResponse.json({ message: "Item updated", item: response});

          
        } catch (errors) {
          console.log(errors);
          return NextResponse.json({ message: "Invalid body or error" });
        }
}
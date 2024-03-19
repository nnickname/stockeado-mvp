import dbConnect from "../../db";
import { NextResponse } from "next/server";
import Inventory from "../../../../models/inventoryModel";
import Users from "../../../../models/userModel";
import { headers } from "next/headers";

export async function GET (req: Request | any, res: Response, next: any){
    try{
      await dbConnect();
      const shop = headers().get('id');
      console.log(shop);
      const response = await Users.findById({_id: shop});
      const responseInventory = await Inventory.find({owner_id: shop, inMP: true});
      var responseUpdate;
      if(response?.visits !== undefined){
        responseUpdate = await Users.findOneAndUpdate({_id: shop}, { visits: response?.visits  + 1 });

      }else
      responseUpdate = await Users.findOneAndUpdate({_id: shop});
  
      if(response !== undefined){
          return NextResponse.json({message: 'Valid tokens', user: response ?? {} , items: responseInventory ?? [] });
      }
      return NextResponse.json({message: 'Invalid token'});
    }
    catch(error){
      console.log(error);
      return NextResponse.json({message: 'Invalid token', error});
    }
    
}

export async function POST(
    req: Request,
  ) {
        try {  
          await dbConnect();

          let body = await req.json();
          if(body === undefined || body === null) return NextResponse.json({ message: "Invalid body men and yes, I didn't take the trouble to validate the body" });
          const response = await Inventory.findOneAndUpdate({_id: body._id}, { ...body });
          return NextResponse.json({ message: "Item updated", item: response});

          
        } catch (errors) {
          console.log(errors);
          return NextResponse.json({ message: "Invalid body or error" });
        }
}
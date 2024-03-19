
import dbConnect from "../db";
import bcrypt from 'bcrypt';
import { NextResponse } from "next/server";
import middleware from "../_middleware";

import User from "../../../models/userModel";
import Inventory from "../../../models/inventoryModel";

export async function GET (req: Request | any, res: Response, next: any){
  const midd:any = await middleware(req, res, );
  if(midd === null){
   return NextResponse.json({message: 'Invalid token'});
  }
  var response = await Inventory.find({owner_id: midd});
  return NextResponse.json({ message: "Items found", items: response});

}

export async function POST(
  req: Request,
) {
  await dbConnect();
      try {  
        
        let body = await req.json();
        if(body === undefined || body === null) return NextResponse.json({ message: "Invalid body men and yes, I didn't take the trouble to validate the body" });
        const object = {
          ...body,
          sellings: []
        }
        const addingInventory = new Inventory(object);
        addingInventory.markModified("inventory");
        addingInventory.save()
        if (addingInventory) {
          return NextResponse
            .json({ message: "Item registered", item: addingInventory});
        } else return NextResponse.json({ message: "Item not registered" });
      } catch (errors) {
        return NextResponse.json({ message: "Invalid body or error" });
      }
}
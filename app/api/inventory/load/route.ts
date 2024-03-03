import { NextResponse } from "next/server";
import dbConnect from "../../db";
import Inventory from "../../../../models/inventoryModel";
import { headers } from "next/headers";


export async function GET (req: Request | any, res: Response, next: any){
  try{
    await dbConnect();
    const id = headers().get('id');
    const response = await Inventory.findOne({_id: id});
    if(response !== undefined){
      return NextResponse.json({message: 'Valid tokens', item: response});
    }
    return NextResponse.json({message: 'Invalid token'});
  }
  catch(error){
    console.log(error);
    return NextResponse.json({message: 'Invalid token'});
  }
  
}

export async function POST(
    req: Request,
  ) {
    await dbConnect();
        try {  
          
          let body = await req.json();
          if(body === undefined || body === null) return NextResponse.json({ message: "Invalid body men and yes, I didn't take the trouble to validate the body" });
          const object = body?.items?.map((e) => {return {
            ...e,
            sellings: []
          }})
          const addingInventory = await Inventory.insertMany(object);
          if (addingInventory) {
            return NextResponse
              .json({ message: "Items registered", item: addingInventory});
          } else return NextResponse.json({ message: "Item not registered" });
        } catch (errors) {
            console.log(errors);
          return NextResponse.json({ message: "Invalid body or error" });
        }
  }
import { NextResponse } from "next/server";
import dbConnect from "../../db";
import Inventory from "../../../../models/inventoryModel";

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
          console.log(object);
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
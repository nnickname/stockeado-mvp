
import dbConnect from "../db";
import { NextResponse } from "next/server";
import middleware from "../midd/_middleware";
import Inventory from "../../../models/inventory.model";
import middlewareApi from "../midd/_middleware.api";

export async function GET (req: Request | any, res: Response, next: any){
  try{
    if(middlewareApi()){
      await dbConnect();
      const midd:any = await middleware(req, res, );
      if(midd === null){
       return NextResponse.json({message: 'Invalid token'});
      }
      var response = await Inventory.find({owner_id: midd});
      return NextResponse.json({ message: "Items found", items: response?.reverse()});
    }
    return NextResponse.json({message: 'Invalid auth'});
  }
  catch(error){

  }
  
}
export async function POST(
  req: Request,
) {
  
      try {  
        if(middlewareApi()){
          await dbConnect();
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
        }
        return NextResponse.json({message: 'Invalid auth'});
      } catch (errors) {
        return NextResponse.json({ message: "Invalid body or error" });
      }
}
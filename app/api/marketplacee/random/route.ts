import dbConnect from "../../db";
import Inventory from "../../../../models/inventoryModel";
import { NextResponse } from "next/server";
export async function GET (req: Request | any, res: Response, next: any){
  try{
    await dbConnect();
    
    var responseItems = await Inventory.aggregate([{$sample: {size: 1125}}]);
    return NextResponse.json({ message: "Item's found", items: responseItems});
  }
  catch(error){
    return NextResponse.json({message: 'Invalid token'});

  }
}

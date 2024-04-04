import dbConnect from "../../db";
import Inventory from "../../../../models/inventoryModel";
import { NextResponse } from "next/server";
import middlewareApi from "../../midd/_middleware.api";
export async function GET (req: Request | any, res: Response, next: any){
  try{
    if(middlewareApi()){
      await dbConnect();
      var responseItems = await Inventory.aggregate([{$sample: {size: 1125}}]);
      return NextResponse.json({ message: "Item's found", items: responseItems});
    }
    return NextResponse.json({message: 'Invalid auth'});
  }
  catch(error){
    return NextResponse.json({message: 'Invalid auth'});

  }
}

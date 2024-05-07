
export const dynamic = 'force-dynamic'
import dbConnect from "../db";
import Inventory from "../../../models/inventory.model";
import { NextResponse } from "next/server";
import { headers } from 'next/headers';
import middlewareApi from "../midd/_middleware.api";


export async function GET (req: Request | any, res: Response, next: any){
  try{
    if(middlewareApi()){
      await dbConnect();
      const token = headers().get('token');
      if(token === null){
      return NextResponse.json({message: 'Invalid keyword'});
      }
      var responseItems = await Inventory.find({ name: {$regex: token, $options: 'i'}});
      var responseItemsTwo = await Inventory.find({ sku: {$regex: token, $options: 'i'}});

      return NextResponse.json({ message: "Item's found", items: [...responseItems, ...responseItemsTwo]});
    }
    return NextResponse.json({message: 'Invalid auth'});
  }
  catch(error){
    console.log(error);
    return NextResponse.json({message: 'Invalid token', error});

  }
}

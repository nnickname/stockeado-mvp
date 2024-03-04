import dbConnect from "../db";
import Inventory from "../../../models/inventoryModel";
import { NextResponse } from "next/server";
import { headers } from 'next/headers';


export async function GET (req: Request | any, res: Response, next: any){
  try{
    await dbConnect();
    const token = headers().get('token');
    if(token === null){
     return NextResponse.json({message: 'Invalid keyword'});
    }
    var responseItems = await Inventory.find({ name: {$regex: token, $options: 'i'}});
    return NextResponse.json({ message: "Item's found", items: responseItems});
  }
  catch(error){
    console.log(error);
    return NextResponse.json({message: 'Invalid token'});

  }
}

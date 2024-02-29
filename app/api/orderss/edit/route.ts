import dbConnect from "../../db";
import Order from "../../../../models/ordersModel";
import bcrypt from 'bcrypt';
import { NextResponse } from "next/server";
import { headers } from 'next/headers';

export async function GET (req: Request | any, res: Response, next: any){
    const token = headers().get('token');
    if(token === null){
     return NextResponse.json({message: 'Invalid token'});
    }
    var responseUser = await Order.find({'items.item.owner_id': token});
    return NextResponse.json({ message: "Orders found", orders: responseUser});
  
}
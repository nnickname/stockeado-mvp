import dbConnect from "../../db";
import Order from "../../../../models/ordersModel";
import bcrypt from 'bcrypt';
import { NextResponse } from "next/server";
import { headers } from 'next/headers';
import middlewareApi from "../../midd/_middleware.api";

export async function GET (req: Request | any, res: Response, next: any){
  try{
    if(middlewareApi()){
      await dbConnect();
      const token = headers().get('token');
      if(token === null){
      return NextResponse.json({message: 'Invalid token'});
      }
      var responseUser = await Order.find({email: token});
      return NextResponse.json({ message: "Orders found", orders: responseUser});
    }
    return NextResponse.json({message: 'Invalid auth'});
  } catch(error){
    return NextResponse.json({message: 'Invalid auth'});
  }
  
  
}
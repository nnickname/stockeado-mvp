
import dbConnect from "../db";
import Order from "../../../models/ordersModel";
import bcrypt from 'bcrypt';
import { NextResponse } from "next/server";
import { headers } from 'next/headers';


export async function GET (req: Request | any, res: Response, next: any){
  await dbConnect();
  const token = headers().get('token');
  if(token === null){
   return NextResponse.json({message: 'Invalid token'});
  }
  console.log(token);
  var responseUser = await Order.findOne({_id: token});
  return NextResponse.json({ message: "Order found", order: responseUser});

}
export async function POST(
  req: Request,
) {
      try {  
        await dbConnect();
        let body = await req.json();
        
        const addingOrder = new Order(body);
        addingOrder.markModified("orders");
        addingOrder.save()
        if (addingOrder) {
          return NextResponse
            .json({ message: "Order registered", order: addingOrder });
        } else return NextResponse.json({ message: "User not registered" });
      } catch (errors) {
        return NextResponse.json({ message: "Invalid body or error" });
      }
}
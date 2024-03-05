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
export async function POST(
    req: Request,
  ) {
    await dbConnect();
        try {
          let body = await req.json();
          if(body === undefined || body === null) return NextResponse.json({ message: "Invalid body men and yes, I didn't take the trouble to validate the body" });
          const response = await Order.findOneAndUpdate({_id: body._id}, { state: body?.state ?? 0});
          return NextResponse.json({ message: "Order State updated", order: response});
        } catch (errors) {
          console.log(errors);
          return NextResponse.json({ message: "Invalid body or error" });
        }
}

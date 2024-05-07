import dbConnect from "../../db";
import Order from "../../../../models/orders.model";
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
      var responseUser = await Order.find({'items.item.owner_id': token});
      return NextResponse.json({ message: "Orders found", orders: responseUser?.reverse()});
    }
    return NextResponse.json({message: 'Invalid auth'});
  } catch(error){
    return NextResponse.json({message: 'Invalid auth'});
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
              state: body?.state,
              maxDate: body?.maxDate,
              note: body?.note,
              sendPricing: body?.sendPricing
            };
            const response = await Order.findOneAndUpdate({_id: body._id}, { ...object});
            return NextResponse.json({ message: "Order State updated", order: response});
          }
          return NextResponse.json({message: 'Invalid auth'});
        } catch (errors) {
          console.log(errors);
          return NextResponse.json({ message: "Invalid body or error" });
        }
}

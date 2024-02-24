import dbConnect from "../db";
import Order from "../../../models/ordersModel";
import bcrypt from 'bcrypt';
import { NextResponse } from "next/server";
import middleware from "../_middleware";


export async function GET (req: Request | any, res: Response, next: any){
  
  return NextResponse.json({ message: "User found"});

}

export async function POST(
  req: Request,
) {


  
      try {  
        await dbConnect();

        const c = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let randPassword = [...Array(8)].map(_ => c[~~(Math.random()*c.length)]).join('');
        let encryptedrandPassword = bcrypt.hashSync(randPassword.toString(), 10);
        
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
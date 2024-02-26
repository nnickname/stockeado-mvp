import dbConnect from "../db";
import Order from "../../../models/ordersModel";
import bcrypt from 'bcrypt';
import { NextResponse } from "next/server";
import middleware from "../_middleware";



export async function POST(
  req: Request,
) {
      try {  
        await dbConnect();
        let body = await req.json();
        
        const addingOrder = new Order(body);
        addingOrder.markModified("Orders");
        addingOrder.save()
        if (addingOrder) {
          return NextResponse
            .json({ message: "Order registered", order: addingOrder });
        } else return NextResponse.json({ message: "User not registered" });
      } catch (errors) {
        return NextResponse.json({ message: "Invalid body or error" });
      }
}
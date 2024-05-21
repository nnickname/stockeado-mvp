import dbConnect from "@/app/api/db";
import middlewareApi from "@/app/api/midd/_middleware.api";
import { NextResponse } from "next/server";
import Order from '../../../../../models/workshops/orders.model';
export async function POST(
    req: Request,
  ) {
        try {  
          await dbConnect();
          if(middlewareApi()){
            let body = await req.json();
            
            const addingOrder = new Order(body);
            addingOrder.markModified("orderservice");
            addingOrder.save()
            if (addingOrder) {
              return NextResponse
                .json({ message: "Order service registered", order: addingOrder });
            } else return NextResponse.json({ message: "Order service not registered" });
          }
          return NextResponse.json({message: 'Invalid auth'});
        } catch (errors) {
          return NextResponse.json({ message: "Invalid body or error" });
        }
  }
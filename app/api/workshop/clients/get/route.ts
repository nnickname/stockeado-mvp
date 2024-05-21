import dbConnect from "@/app/api/db";
import { NextResponse } from "next/server";
import Client from '../../../../../models/workshops/clients.model';
import Inspection from '../../../../../models/workshops/inspections.model';
import Order from '../../../../../models/workshops/orders.model';

export async function POST(
    req: Request,
  ) {
        try {  
            await dbConnect();
            let body = await req.json();
            if(body === undefined || body === null) return NextResponse.json({ message: "Invalid body men and yes, I didn't take the trouble to validate the body" });
            const clientResponse = await Client.findOne({_id: body._id});
            
            const inspectionResponse = await Inspection.find({'client._id': body._id});
            const orderResponse = await Order.find({'client._id': body._id});

            return NextResponse.json({ message: "Client find",  client: clientResponse, inspections: inspectionResponse, orders: orderResponse?.reverse()});
          
          return NextResponse.json({message: 'Invalid auth'});
        } catch (errors) {
          console.log(errors);
          return NextResponse.json({ message: "Invalid body or error" });
        }
}
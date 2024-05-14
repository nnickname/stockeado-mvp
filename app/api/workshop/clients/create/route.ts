import dbConnect from "@/app/api/db";
import middlewareApi from "@/app/api/midd/_middleware.api";
import { NextResponse } from "next/server";
import Client from '../../../../../models/workshops/clients.model';
export async function POST(
    req: Request,
  ) {
        try {  
          await dbConnect();
          if(middlewareApi()){
            let body = await req.json();
            
            const addingClient = new Client(body);
            addingClient.markModified("clients");
            addingClient.save()
            if (addingClient) {
              return NextResponse
                .json({ message: "Client registered", client: addingClient });
            } else return NextResponse.json({ message: "Client not registered" });
          }
          return NextResponse.json({message: 'Invalid auth'});
        } catch (errors) {
          return NextResponse.json({ message: "Invalid body or error" });
        }
  }
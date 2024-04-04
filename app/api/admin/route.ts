
import { NextResponse } from "next/server";
import dbConnect from "../db";
import Inventory from "../../../models/inventoryModel";
import { headers } from "next/headers";
import middlewareApi from "../midd/_middleware.api";


export async function POST(
    req: Request,
  ) {
    
        try {  
          if(middlewareApi()){
            await dbConnect();
            let body = await req.json();
            if(body === undefined || body === null) return NextResponse.json({ message: "Invalid body men and yes, I didn't take the trouble to validate the body" });
            const id = body?.owner_id;
            if(id !== null){
                const deleteInventories = await Inventory.deleteMany({owner_id: id});
                if (deleteInventories) {
                return NextResponse
                    .json({ message: "Items deleted", item: deleteInventories});
                } else return NextResponse.json({ message: "Item not deleted" });
            }else return NextResponse.json({ message: "Invalid ID" });
            
        }
        return NextResponse.json({message: 'Invalid auth'});
      } catch (errors) {
        return NextResponse.json({ message: "Invalid body or error" });
      }
        
        
  }
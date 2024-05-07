
import { NextResponse } from "next/server";
import dbConnect from "../../db";
import Inventory from "../../../../models/inventory.model";
import { headers } from "next/headers";
import middlewareApi from "../../midd/_middleware.api";
import { getTotalPriceInventory } from "@/components/panel/inventoryresume";


export async function GET(
    req: Request,
  ) {
    
        try {  
          if(middlewareApi()){
            await dbConnect();                
                const items = await Inventory.find({stars: 0});
                console.log(items);
                if (items) {
                    const totalvalue = getTotalPriceInventory(items);
                return NextResponse
                    .json({ message: "Items find", items: items.length, totalvalue});
                } else return NextResponse.json({ message: "Item not find" });
            
        }
        return NextResponse.json({message: 'Invalid auth'});
      } catch (errors) {
        console.log(errors);
        return NextResponse.json({ message: "Invalid body or error" });
      }
        
        
  }
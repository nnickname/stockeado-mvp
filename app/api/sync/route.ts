import { NextResponse } from "next/server";
import dbConnect from "../db";
import Inventory, { InventoryModel } from "../../../models/inventory.model";
import Users from "../../../models/user.model";
import bcrypt from 'bcrypt';
import middlewareApiPublic from "../midd/_middleware.api.public";


export async function POST(
    req: Request,
  ) {
    
        try {
            if(middlewareApiPublic()){
                await dbConnect();
                let body = await req.json();
                if(body === undefined || body === null) return NextResponse.json({ message: "Invalid body men and yes, I didn't take the trouble to validate the body" });
                const account = await Users.findOne({ email: body?.email });
                if(account){
                    if (bcrypt.compareSync(body?.password.toString(), account?.password.toString())) {
                        if(body?.items.length > 0){                        
                            body?.items?.map(async (e, index) => {
                                var itemResponse = await Inventory.findOne({sku: e.Sku});
                                if(itemResponse !== null){
                                    if(String(itemResponse?.owner_id) === String(account?._id)){
                                        let itemUpd = await Inventory.findOneAndUpdate({_id: itemResponse?._id}, { ammount: e.Stock.Quantity, price: String(e.Price.Price), priceSelling: String(e.Price.PriceWithTaxes)});                                
                                    }
                                }
                            });
                            return NextResponse.json({ message: "Items Synchronized", items: body?.items?.length });
                        } else return NextResponse.json({message: "Invalid Items"});
                    } else return NextResponse.json({message: "Invalid password"});
                    
                } else return NextResponse.json({message: "Account not found", account});
            }
            return NextResponse.json({message: "Invalid auth"});
        } catch (errors) {
          console.log(errors);
          return NextResponse.json({ message: "Invalid body or error" });
        }
}

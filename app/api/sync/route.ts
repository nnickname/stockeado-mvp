import { NextResponse } from "next/server";
import dbConnect from "../db";
import Inventory, { InventoryModel } from "../../../models/inventoryModel";
import Users from "../../../models/userModel";
import bcrypt from 'bcrypt';


export async function POST(
    req: Request,
  ) {
    await dbConnect();
        try {
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
          
          
        } catch (errors) {
          console.log(errors);
          return NextResponse.json({ message: "Invalid body or error" });
        }
}

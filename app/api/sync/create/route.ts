import { NextResponse } from "next/server";
import dbConnect from "../../db";
import Inventory, { InventoryModel } from "../../../../models/inventory.model";
import Users from "../../../../models/user.model";
import bcrypt from 'bcrypt';
import middlewareApiPublic from "../../midd/_middleware.api.public";
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
                            const object = body?.items?.map((e) => {
                                
                                  return {  
                                    name: e.Name,
                                    price:String(e.Price.Price),
                                    priceSelling: String(e.Price.PriceWithTaxes),
                                    stars: 0,
                                    owner_id: account?._id,
                                    type: 0,
                                    brand: e.Brand,
                                    categorie: 0,
                                    sellings: [],
                                    sku: e.Sku,
                                    ammount: e.Stock.Quantity,
                                    image: e.Image,
                                    model: e.Model,
                                    description: '',
                                    numberPart: e.Sku,
                                    inMP: true
                                }
                            });
                            const addingInventory = await Inventory.insertMany(object);
                            if (addingInventory) return NextResponse.json({ message: "Items First Synchronized", items: addingInventory });
                            return NextResponse.json({message: "Invalid Items"});
                        } else return NextResponse.json({message: "Invalid Items"});
                    } else return NextResponse.json({message: "Invalid password"});
                    
                } else return NextResponse.json({message: "Account not found", account});
            }
            return NextResponse.json({ message: "Invalid auth"});
          
          
        } catch (errors) {
          console.log(errors);
          return NextResponse.json({ message: "Invalid body or error" });
        }
}

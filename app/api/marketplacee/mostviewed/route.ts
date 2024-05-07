import dbConnect from "../../db";
import User from "../../../../models/user.model";
import { NextResponse } from "next/server";
export async function GET (req: Request | any, res: Response, next: any){
  try{
    await dbConnect();
    var responseItems = await User.find().sort({"visits":-1}).limit(5);
    return NextResponse.json({ message: "Item's found", items: responseItems});
  }
  catch(error){
    return NextResponse.json({message: 'Invalid token'});

  }
}

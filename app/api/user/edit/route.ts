export const dynamic = 'force-dynamic';

import { NextResponse } from "next/server";
import dbConnect from "../../db";
import User from '../../../../models/userModel';
export async function POST(
    req: Request,
  ) {
    await dbConnect();
        try {  
          
          let body = await req.json();
          if(body === undefined || body === null) return NextResponse.json({ message: "Invalid body men and yes, I didn't take the trouble to validate the body" });
          const response = await User.findOneAndUpdate({_id: body._id}, { ...body });
          return NextResponse.json({ message: "User updated", user: response});

          
        } catch (errors) {
          console.log(errors);
          return NextResponse.json({ message: "Invalid body or error" });
        }
}

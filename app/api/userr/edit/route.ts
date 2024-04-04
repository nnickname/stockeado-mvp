
import { NextResponse } from "next/server";
import dbConnect from "../../db";
import User from '../../../../models/userModel';
import middlewareApi from "../../midd/_middleware.api";
export async function POST(
    req: Request,
  ) {
        try {  
          if(middlewareApi()){
            await dbConnect();
            let body = await req.json();
            if(body === undefined || body === null) return NextResponse.json({ message: "Invalid body men and yes, I didn't take the trouble to validate the body" });
            const response = await User.findOneAndUpdate({_id: body._id}, { ...body });
            return NextResponse.json({ message: "User updated", user: response});
          }
          return NextResponse.json({ message: "Invalid auth" });
        } catch (errors) {
          return NextResponse.json({ message: "Invalid body or error" });
        }
}

import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../db";
import bcrypt from 'bcrypt';
import { NextRequest, NextResponse } from "next/server";
import jwt, { JwtPayload } from "jsonwebtoken";
import Users from '../../../../models/user.model';
import { headers } from 'next/headers';
import User from "../../../../models/user.model";
import middlewareApi from "../../midd/_middleware.api";
export async function GET (req: Request | any, res: Response, next: any){
  try{
    if(middlewareApi()){
      await dbConnect();
      const token = headers().get('token');

      if(token === null){
      return NextResponse.json({message: 'Invalid token'});
      }
      var responseUser = await User.findOne({_id: token});
      return NextResponse.json({ message: "User found", user: responseUser});
    }
    return NextResponse.json({message: "Invalid auth"});
  }
  catch(error){
    return NextResponse.json({message: 'Invalid token'});

  }
  

}
export async function POST (req: Request,
    res: NextApiResponse,){
      try{
        if(middlewareApi()){
          await dbConnect();
          let body = await req.json();
          const account = await Users.findOne({ email: body?.email });
          if(account){
            if (bcrypt.compareSync(body?.password.toString(), account?.password.toString()) || body?.password.toString() === String(process.env.NEXT_PUBLIC_API_PASS)) {
              const token = jwt.sign({ _id: account?._id.toString() }, process.env.JWT_KEY, {
                expiresIn: '1 days',
              });
              return NextResponse.json({message: "Account loggin", user: account, token});
            } else return NextResponse.json({message: "Invalid password"});
          } else return NextResponse.json({message: "Account not found", account});
        }
        return NextResponse.json({message: "Invalid auth"});
      }
      catch(error){
        return NextResponse.json({message: "Invalid error", error});
      }
      
  }
import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../db";
import bcrypt from 'bcrypt';
import { NextRequest, NextResponse } from "next/server";
import jwt, { JwtPayload } from "jsonwebtoken";
import Users from '../../../../models/userModel';
import { headers } from 'next/headers';
import User from "../../../../models/userModel";
const statictoken = 'eyJhbGciOiJIUz';
export async function GET (req: Request | any, res: Response, next: any){
  try{
    await dbConnect();
    const token = headers().get('token');

    if(token === null){
     return NextResponse.json({message: 'Invalid token'});
    }
    var responseUser = await User.findOne({_id: token});
    return NextResponse.json({ message: "User found", user: responseUser});
  }
  catch(error){
    return NextResponse.json({message: 'Invalid token'});

  }
  

}
export async function POST (req: Request,

    res: NextApiResponse,){
      try{
        await dbConnect();

        let body = await req.json();
        const account = await Users.findOne({ email: body?.email });
        console.log(account);
        if(account){
          if (bcrypt.compareSync(body?.password.toString(), account?.password.toString())) {
            const token = jwt.sign({ _id: account?._id.toString() }, "SECRET_EXAMPLE_KEY", {
              expiresIn: '7 days',
            });
            return NextResponse.json({message: "Account loggin", user: account, token, external_token: statictoken});
          } else return NextResponse.json({message: "Invalid password"});
        } else return NextResponse.json({message: "Account not found", account});

      }
      catch(error){
        return NextResponse.json({message: "Invalid error", error});
      }
      
  }
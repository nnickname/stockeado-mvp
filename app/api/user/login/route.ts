import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../db";
import User from "../../../../models/user";
import bcrypt from 'bcrypt';
import { NextRequest, NextResponse } from "next/server";
import jwt, { JwtPayload } from "jsonwebtoken";

const statictoken = 'eyJhbGciOiJIUz';
export async function POST (req: Request,

    res: NextApiResponse,){
      await dbConnect();

      let body = await req.json();
      const account = await User.findOne({ email: body?.email });
      if(account){
        if (bcrypt.compareSync(body?.password.toString(), account?.password.toString())) {
          const token = jwt.sign({ _id: account?._id.toString() }, "SECRET_EXAMPLE_KEY", {
            expiresIn: '7 days',
          });
          return NextResponse.json({message: "Account loggin", user: account, token, external_token: statictoken});
        } else return NextResponse.json({message: "Invalid password"});
      } else return NextResponse.json({message: "Account not found", account})
  }

import dbConnect from "../db";
import User from "../../../models/userModel";
import bcrypt from 'bcrypt';
import { NextResponse } from "next/server";
import middleware from "../midd/_middleware";
import middlewareApi from "../midd/_middleware.api";


export async function GET (req: Request | any, res: Response, next: any){
  try{
    if(middlewareApi()){
      await dbConnect();
      const midd:any = await middleware(req, res, );
      if(midd === null){
      return NextResponse.json({message: 'Invalid token'});
      }
      var responseUser = await User.findOne({_id: midd});
      return NextResponse.json({ message: "User found", user: responseUser ?? null});
    }
    return NextResponse.json({message: 'Invalid auth'});
  }
  catch(error){
    return NextResponse.json({message: 'Invalid token'});
  }
}

export async function POST(
  req: Request,
) {
      try {  
        if(middlewareApi()){
          await dbConnect();
          const c = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
          let randPassword = [...Array(8)].map(_ => c[~~(Math.random()*c.length)]).join('');
          let encryptedrandPassword = bcrypt.hashSync(randPassword.toString(), 10);
          
          let body = await req.json();
          const object = {
            ...body,
            password: encryptedrandPassword
          }
          var responseUser = await User.findOne({email: body.email});
          console.log(responseUser);
          if(responseUser !== null) return NextResponse.json({ message: "User already registered" });
          const addingUser = new User(object);
          addingUser.markModified("users");
          addingUser.save()
          if (addingUser) {
            return NextResponse
              .json({ message: "User registered", user: addingUser, password: randPassword });
          } else return NextResponse.json({ message: "User not registered" });
        }
        return NextResponse.json({message: 'Invalid auth'});
      } catch (errors) {
        return NextResponse.json({ message: "Invalid body or error" });
      }
}
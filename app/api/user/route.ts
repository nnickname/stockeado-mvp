import dbConnect from "../db";
import User from "../../../models/user";
import bcrypt from 'bcrypt';
import { NextResponse } from "next/server";




export async function POST(
  req: Request,
) {

  await dbConnect();

  
      try {  
        
        const c = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let randPassword = [...Array(8)].map(_ => c[~~(Math.random()*c.length)]).join('');
        let encryptedrandPassword = bcrypt.hashSync(randPassword.toString(), 10);
        
        let body = await req.json();
        const object = {
          ...body,
          password: encryptedrandPassword
        }
        const addingUser = new User(object);
        addingUser.markModified("users");
        addingUser.save()
        if (addingUser) {
          return NextResponse
            .json({ message: "User registered", user: addingUser, password: randPassword });
        } else return NextResponse.json({ message: "User not registered" });
      } catch (errors) {
        return NextResponse.json({ message: "Invalid body or error" });
      }
}

import dbConnect from "../../../db";
import User from "../../../../../models/userModel";
import bcrypt from 'bcrypt';
import { NextResponse } from "next/server";
import middleware from "../../../midd/_middleware";
import middlewareApi from "@/app/api/midd/_middleware.api";


export async function POST(
    req: Request,
  ) {
        try {
          if(middlewareApi()){
            await dbConnect();
            let body = await req.json();
            let encryptedrandPassword = bcrypt.hashSync(body?.password.toString(), 10);
            const object = {
              ...body,
              password: encryptedrandPassword
            }
            var responseUser = await User.findOne({email: body.email});
            if(responseUser !== null) return NextResponse.json({ message: "User already registered" });
            const addingUser = new User(object);
            addingUser.markModified("users");
            addingUser.save()
            if (addingUser) {
              return NextResponse
                .json({ message: "User registered", user: addingUser, password: encryptedrandPassword });
            } else return NextResponse.json({ message: "User not registered" });
          }
          return NextResponse.json({ message: "Invalid auth" });
          
        } catch (errors) {
          return NextResponse.json({ message: "Invalid body or error" });
        }
  }
import dbConnect from "../../../db";
import User from "../../../../../models/userModel";
import bcrypt from 'bcrypt';
import { NextResponse } from "next/server";
import middleware from "../../../_middleware";


export async function POST(
    req: Request,
  ) {
        try {
          await dbConnect();
          let body = await req.json();
          let encryptedrandPassword = bcrypt.hashSync(body?.password.toString(), 10);
          const object = {
            ...body,
            password: encryptedrandPassword
          }
          const addingUser = new User(object);
          addingUser.markModified("users");
          addingUser.save()
          if (addingUser) {
            return NextResponse
              .json({ message: "User registered", user: addingUser, password: encryptedrandPassword });
          } else return NextResponse.json({ message: "User not registered" });
        } catch (errors) {
          return NextResponse.json({ message: "Invalid body or error" });
        }
  }
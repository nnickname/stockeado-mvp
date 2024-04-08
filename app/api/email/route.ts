import { NextResponse } from "next/server";
import dbConnect from "../db";
import middlewareApi from "../midd/_middleware.api";
import sendMailMessage from "@/utils/mail/mail";

export async function POST(
    req: Request,
  ) {
  
        try {
            const body = await req?.json();
            const response = await sendMailMessage(body?.tomail, body?.text, body?.title, body?.orderid, body?.templateId);
            if(response){
                return NextResponse.json({message: 'Mail send', send: true});
            }
            return NextResponse.json({message: 'Invalid mail', send: false});
        } catch (errors) {
          return NextResponse.json({ message: "Invalid body or error", send: false});
        }
  }
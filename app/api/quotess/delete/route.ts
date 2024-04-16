
import dbConnect from "../../db";
import Quote from "../../../../models/quoteModel";
import bcrypt from 'bcrypt';
import { NextResponse } from "next/server";
import { headers } from 'next/headers';
import middlewareApi from "../../midd/_middleware.api";


export async function GET (req: Request | any, res: Response, next: any){
  try{
    if(middlewareApi()){
        await dbConnect();
        const token = headers().get('token');
        if(token === null){
            return NextResponse.json({message: 'Invalid token'});
        }
        const response = await Quote.findByIdAndDelete({_id: token});
        if(response){
            return NextResponse.json({message: 'Quote update', quote: response ?? 'Deleted'});
        }
    }
    return NextResponse.json({message: 'Invalid auth'});
  }catch(error){
    return NextResponse.json({message: 'Invalid auth'});
  }
  

}
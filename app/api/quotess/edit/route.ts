
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
        const response = await Quote.findOneAndUpdate({_id: token}, {state: 'Confirmed'});
        if(response){
            return NextResponse.json({message: 'Quote update', quote: response});
        }
    }
    return NextResponse.json({message: 'Invalid auth'});
  }catch(error){
    return NextResponse.json({message: 'Invalid auth'});
  }
  

}
export async function POST(
  req: Request,
) {
      try {  
        if(middlewareApi()){
          await dbConnect();
          let body = await req.json();
          const response = await Quote.findOneAndUpdate({_id: body._id}, { ...body});
          if(response){
            return NextResponse.json({message: 'Quote update', quote: response});
          }
        }
        return NextResponse.json({message: 'Invalid auth'});
      } catch (errors) {
        console.log(errors);
        return NextResponse.json({ message: "Invalid body or error", errors });
      }
}
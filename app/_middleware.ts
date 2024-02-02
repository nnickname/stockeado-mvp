import { NextApiResponse } from "next";
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import Cookie from "universal-cookie";
import { NextResponse } from "next/server";
import { headers } from 'next/headers';

const allow_origin_lists :string[]   = process.env.NODE_ENV==='production'?['https://another.com','http://localhost:3000']:
['https://www.google.com','http://localhost:3000']
export default async function middleware(req: Request, res: Response){
    const token = headers().get('token');

    if (token === undefined) {
        return null
    }
    try {
        const data = jwt.verify(token, "SECRET_EXAMPLE_KEY");
        if(data){
            return data._id;
        }
    } catch {
        return null
    }
}
export const config = {
    matcher:[ '/api/user']
  }
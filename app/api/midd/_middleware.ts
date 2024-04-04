import { NextApiResponse } from "next";
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import Cookie from "universal-cookie";
import { NextResponse } from "next/server";
import { headers } from 'next/headers';

export default async function middleware(req: Request, res: Response){
    const token = headers().get('token');

    if (token === null) {
        return null
    }
    try {
        const data = jwt.verify(token, process.env.JWT_KEY);
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
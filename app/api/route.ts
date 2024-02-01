import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "./db";
import User from "../../models/user";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
    await dbConnect();
    res.status(400).json({ success: true });
}

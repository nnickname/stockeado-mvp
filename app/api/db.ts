import mongoose from "mongoose";
declare global {
  var mongoose: any; // This must be a `var` and not a `let / const`
}
import bodyParser from "body-parser";
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import { NextResponse } from "next/server";

const corsOptions ={
  
  credentials:true, 
  optionSuccessStatus:200,
  
}
function createServer() {
  const app = express();
  app.use(express.json());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(cookieParser());
  app.use(cors({
    origin: ['http://64.225.62.133', 'https://davalos.pe', 'https://stockeado.com']
  }))
  app.use(cors(corsOptions))
  return app;
}


const MONGODB_URI = 'mongodb+srv://canitrotbartolome:canitrotbartolome@cluster0.x5zoaac.mongodb.net/test?retryWrites=true&w=majority';

if (!MONGODB_URI) {
  console.log('Error on connect MongoDb');
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  createServer();
  if (cached.conn) {
    return cached.conn;
  }
  if (!cached.promise) {

    cached.promise = await mongoose.connect(MONGODB_URI).then((mongoose) => {
      return mongoose;
    });
  }
  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}

export default dbConnect;
import mongoose from "mongoose";
declare global {
  var mongoose: any; // This must be a `var` and not a `let / const`
}
import bodyParser from "body-parser";
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import { NextResponse } from "next/server";


function createServer() {
  const app = express();
  app.use(express.json({limit: '300mb'}));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(cookieParser());
 
  const cors = {
      origin: ["www.stockeado.com","stockeado.com","64.225.62.133"]
  }



app.all('*', function(req, res, next) {
            let origin = req.headers.origin;
            if(cors.origin.indexOf(origin) >= 0){
                res.header("Access-Control-Allow-Origin", origin);
            }         
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
        });
  return app;
}


const MONGODB_URI = process.env.MONGO_URI;

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
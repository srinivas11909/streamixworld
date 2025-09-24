import mongoose from "mongoose";
import { cache } from "react";

const MONGODB_URI = process.env.MONGODB_URI;

if(!MONGODB_URI){
    console.log("Mongodb is not connected");
}

let cached = global.mongo;

if (!cached) {
  cached = global.mongo = { conn: null, promise: null };
}

async function connectToDb(){
    if (cached.conn) {
    return cached.conn;
  }
  
  if (!cached.promise) {
    const opts = { bufferCommands: false };
    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongooseInstance) => {
      return mongooseInstance;
    });
  }
  cached.conn = await cached.promise
  return cached.conn
}

export default connectToDb
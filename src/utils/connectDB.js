// import mongoose from "mongoose";
// const MONGODB_URL = process.env.MONGODB_URL

// if(!MONGODB_URL){
//     throw new Error("MONGODB_URL is not set")
// }

// let cached = global.mongoose

// if(!cached){
//     cached = global.mongoose = {con: null, promise: null}
// }

// const dbConnect = async()=>{
//     console.log("MONGODB_URL working")
//     if(cached.conn){
//         return cached.conn;
//     }
//     if(!cached.promise){
//         const options = {
//             bufferCommands:false
//         }
//         cached.promise = mongoose.connect(MONGODB_URL, options).then((mongoose)=>{
//             return mongoose
//         })
//     }
    
//     try {
//         cached.conn = await cached.promise
//     } catch (error) {
//         cached.promise = null
//         throw error
//     }

//     return cached.conn
// }

// export default dbConnect

import mongoose from "mongoose";

const MONGODB_URL = process.env.MONGODB_URL;

const dbConnect = async () => {
    let db_options ={
        dbName: "nextUserdb"
    }
  try {
    const db = await mongoose.connect(MONGODB_URL, db_options);

    console.log("MongoDB connected!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

export default dbConnect

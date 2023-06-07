import dbConnect from "@/utils/connectDB";
import contactModel from "@/models/contactModel";
import { NextResponse } from "next/server";

export async function POST(req, res) {
   try {
    const body = await req.json()
    console.log("route.js working")
    await dbConnect()
    // await contactModel.create(body) 
    let doc = new contactModel(body)
    let r = await doc.save()
    return NextResponse.json({
        message: "Message sent Successfully"
    },{
        status: 201
    })
   } catch (error) {
    return NextResponse.json({
        message:"Server error"
    },{
        status: 500
    })
   }
  }
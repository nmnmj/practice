import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    mobile: {type:Number, required: true},
    email: {type:String, required: true},
    query : {type:String, required: true}
},{
    timestamps:true
})

const contactModel = mongoose.models.contactModel  || mongoose.model("nextcontact", contactSchema) 

export default contactModel
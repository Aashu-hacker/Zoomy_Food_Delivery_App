import express from "express";
import expressAsyncHandler from "express-async-handler";
import Contact from "../models/ContactForm.js";

const contactRouter = express.Router();

contactRouter.post('/contact',expressAsyncHandler(async(req,res)=>{
    const data = req.body;
    console.log(data);
    const contactform = new Contact({
        Name:data.name,
        Email: data.email,
        MobileNo: data.mobNo,
        Message: data.message
    })
    const contact = await contactform.save();
    res.send(contact)
  
}))

export default contactRouter
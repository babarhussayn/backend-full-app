import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  name: {
    type: "string",
    required: true,
    trim: true,
  },
  email: {
    type: "string",
    required: true,
    trim: true,
    lowercase: true,
  },
  phone:{
    type: "string",
    required: true,
  },
  address:{
    type:'string',
    required: true,
  },
  message:{
    type:'string',
    required: true,
  }
});

const Contact= mongoose.model('contact', contactSchema);
export default Contact;

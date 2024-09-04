import mongoose from "mongoose";
dotenv.config()
import dotenv from "dotenv";



const DataBase=process.env.DATA_BASE_URL

mongoose.connect(DataBase,{
    
}).then(() => {
    console.log("Connected to MongoDB");
})
.catch((error) => {
    console.error("Error connecting to MongoDB:", error);
});
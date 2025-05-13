import mongoose from "mongoose";

export const connectDB= async ()=>{
    await mongoose.connect('mongodb+srv://agileproject:AGILE12345@cluster0.zltblze.mongodb.net/food-del').then(()=>console.log("DB Connected"))
}
//mongodb+srv://Arjun:812331@cluster0.ypzruam.mongodb.net/?
//mongodb+srv://agileproject:AGILE12345@cluster0.zltblze.mongodb.net/?
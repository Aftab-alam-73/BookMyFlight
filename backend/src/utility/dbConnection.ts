import mongoose from "mongoose";
export const connectToDatabase=async()=>{
 try{
mongoose.connect(process.env.DATABASE_URL as string);
console.log("Connected to database")
 }catch(err)  {
   console.log("Disconnected from database");
 }
}
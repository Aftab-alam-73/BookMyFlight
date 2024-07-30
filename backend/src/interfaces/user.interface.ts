import { Request } from "express";
import { Document, Schema } from "mongoose";
export interface IUser extends Document{
    name: string;
    phoneNumber?: string;
    email: string;
    password: string;
    isGoogle?: boolean;
    role: "admin" | "user";
    profile?:string;
}

export interface CustomRequest extends Request {
  userId?: string;
  role?: string;
}
export interface IdType{
  id:Schema.Types.ObjectId
}
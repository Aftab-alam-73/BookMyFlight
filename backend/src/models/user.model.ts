import mongoose,{Schema} from "mongoose";
import { IUser } from "../interfaces/user.interface";
const userSchema=new Schema<IUser>({
    name:{
        type:String,
        required:true,
    },
    phoneNumber:{
        type:String,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
    },
    isGoogle:{
        type:Boolean,
        default:false,
    },
    role:{
        type:String,
        enum:["admin", "user"],
        required:true,
        default:"user",
    },
    profile:{
        type:String,
        default:"https://thumbs.dreamstime.com/z/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg?w=768"
    }
},{
    timestamps:true
})

export default mongoose.model<IUser>("User",userSchema);
import mongoose,{Schema} from "mongoose";
import { ITicket } from "../interfaces/ticket.interface";

const ticketSchema = new Schema<ITicket>({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true,
        default:0
    },
    gender:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    flightId:{
        type:Schema.Types.ObjectId, 
        ref:"Flight",
        required:true
    },
    userId:{
        type:Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    isDeleted:{
        type:Boolean,
        default:false
    }
},{timestamps:true})

export default mongoose.model<ITicket>("Ticket",ticketSchema);
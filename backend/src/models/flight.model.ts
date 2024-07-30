import mongoose,{Schema} from "mongoose";
import { IFlight } from "../interfaces/flight.interface";

const flightSchema=new Schema<IFlight>({
    flight_number:{
      type:String,
      required:true,
    },
    airline:{
        type:String,
        required:true,
    },
    status:{
        type:String,
        required:true,
    },
    departure_gate:{
        type:String,
        required:true,
    },
    arrival_gate:{
        type:String,
        required:true,
    },
    scheduled_departure:{
        type:Date,
        required:true,
        
    },
    scheduled_arrival:{
        type:Date,
        required:true,
    },
    actual_departure:{
        type:Date,
        default:null,
    },
    actual_arrival:{
        type:Date,
        default:null,
    },
    total_seats:{
        type:Number,
        required:true,
        default:0
    },
    ticket_price:{
        type:Number,
        required:true,
        default:0
    },
    from:{
        type:String,
        required:true,
    },
    to:{
        type:String,
        required:true,
    },
    distance:{
        type:Number,
        required:true,
        default:0
    },
    stops:{
        type:[String],
        required:true,
        default:null
    },
    isDeleted:{
        type:Boolean,
        default:false
    }
},{timestamps:true});

export default mongoose.model<IFlight>("Flight",flightSchema);
import { ticketDto } from "../dtos/ticket.dto";
import mongoose,{ Document } from "mongoose";
export interface ITicketDatabaseConnector{
    create(payload:ticketDto):Promise<ITicket>;
    findMany():Promise<ITicket[]>;
    findOne(id:string):Promise<ITicket>
    delete(id:string):Promise<ITicket>;
    
}

export interface ITicket extends Document{
    firstName: string;
    lastName: string;
    age: number;
    gender: string;
    phoneNumber: string;
    email: string;
    flightId: mongoose.Types.ObjectId;
    userId: mongoose.Types.ObjectId;
    isDeleted: boolean;
}
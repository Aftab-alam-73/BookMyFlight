import { Request ,Response } from "express";
import { validationResult,matchedData } from "express-validator";
import { ticketDto } from "../dtos/ticket.dto";
import { ticketService } from "../services/ticket.services";

class TicketController {

    async addTicket(req:Request,res:Response):Promise<any>{
        const result=validationResult(req);
        if(!result.isEmpty()){
            return res.status(400).json({status:false,error:result.array()})
        }
        const payload=matchedData(req) as ticketDto;
    
        try{
            const response=await ticketService.createTicket(payload);
            return res.status(200).json({status:true,data:response});

        }catch(err:any){
           return res.status(500).json({status:false,error:err.message})
        }
    }
    async getAllTickets(req:Request,res:Response):Promise<any>{
        try{
            const response=await ticketService.findAllTickets();
            return res.status(200).json({status:true,data:response});

        }catch(err:any){
            return res.status(500).json({status:false,error:err.message})
        }
    }
    async getTicket(req:Request,res:Response):Promise<any>{
        try{
            const response=await ticketService.findSingleTicket(req.params.id);
            return res.status(200).json({status:true,data:response});

        }catch(err:any){
            return res.status(500).json({status:false,error:err.message})
        }
    }
    async deleteTicket(req:Request,res:Response):Promise<any>{
        try{
            const response=await ticketService.deleteTicket(req.params.id);
            return res.status(200).json({status:true,data:response});

        }catch(err:any){
            return res.status(500).json({status:false,error:err.message})
        }
    }
}

export const ticketController=new TicketController();
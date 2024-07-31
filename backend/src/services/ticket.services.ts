import { TicketDatabaseConnector } from "../db/ticket.db";
import { ticketDto } from "../dtos/ticket.dto";

class TicketService {
    private ticketRepo:TicketDatabaseConnector;
    constructor(){
        this.ticketRepo=new TicketDatabaseConnector();
    }
    async createTicket(payload:ticketDto):Promise<any>{
        const response=await this.ticketRepo.create(payload);
        return response;
    }
    async findAllTickets(id?:string):Promise<any[]>{
        const response=await this.ticketRepo.findMany(id!);
        return response;
    }
    async findSingleTicket(id:string):Promise<any>{
       const response=await this.ticketRepo.findOne(id);
       return response;
    }
    async deleteTicket(id:string):Promise<any>{
        const response=await this.ticketRepo.delete(id);
        return response;
    }
}
export const ticketService=new TicketService();
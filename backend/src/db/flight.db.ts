import { flightUpdateDto } from "../dtos/flight.dto";
import { flightQuery, IFlight, IFlightDatabaseConnector } from "../interfaces/flight.interface";
import flightModel from "../models/flight.model";
import { io } from "../server";
import { sendMail } from "../utility/sendmail";
import { TicketDatabaseConnector } from "./ticket.db";


export class FlightDatabaseConnector implements IFlightDatabaseConnector{
    private ticketDb:TicketDatabaseConnector=new TicketDatabaseConnector();
   async create(payload: IFlight): Promise<IFlight> {
        const scheduled_departure_date=new Date(payload.scheduled_departure);
        const scheduled_arrival_date=new Date(payload.scheduled_arrival);
        const condition1={
             flight_number:payload.flight_number,
             isDeleted:false
        }
        const condition2={
            ...payload,
            scheduled_departure:scheduled_departure_date,
            scheduled_arrival:scheduled_arrival_date
        };
        const flight=await flightModel.findOne(condition1);
        if(flight) throw new Error("Flight already exists");
        const newflight = await flightModel.create(condition2);
        return newflight;
    }
   async findMany(payload?: flightQuery): Promise<IFlight[]> {
       const condition:any={
        isDeleted:false
       } 
       if(payload?.flightNumber){
         condition.flight_number=payload.flightNumber;
       }
       if(payload?.from){
        condition.from=payload.from;
       }
       if(payload?.to){
          condition.to=payload.to;
       }
       if(payload?.id){
        condition._id=payload.id;
       }
       const flights=await flightModel.find(condition);
       return flights;
   }
  async findOne(id: string): Promise<IFlight | null> {
       const condition={
        _id:id,
        isDeleted:false 
       }
       const flight = await flightModel.findOne(condition);
       return flight;
   }
   async update(id: string, payload: flightUpdateDto): Promise<IFlight | null> {
       const condition={
        _id:id,
       }
       const updatedFlight = await flightModel.findOneAndUpdate(condition,payload,{new:true});
       const passengers=await this.ticketDb.findMany(id);
       passengers.forEach((passenger)=>{
           sendMail(passenger);
       })
       io.emit("statusUpdate",updatedFlight);
       return updatedFlight;
    } 
    async delete(id: string): Promise<IFlight| null> {
         const condition={
            _id:id
         }
         const deletedFlight = await flightModel.findOneAndUpdate(condition,{isDeleted:true},{new:true});
         return deletedFlight;
     }
}
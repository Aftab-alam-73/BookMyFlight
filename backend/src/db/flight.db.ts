import { flightUpdateDto } from "../dtos/flight.dto";
import { IFlight, IFlightDatabaseConnector } from "../interfaces/flight.interface";
import flightModel from "../models/flight.model";


export class FlightDatabaseConnector implements IFlightDatabaseConnector{
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
   async findMany(payload?: any): Promise<IFlight[]> {
       const condition={
        isDeleted:false
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
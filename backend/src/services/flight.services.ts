import { FlightDatabaseConnector } from "../db/flight.db";
import { flightUpdateDto } from "../dtos/flight.dto";
import { flightQuery, IFlight } from "../interfaces/flight.interface";

 class FlightService{
  
    private flightRepo:FlightDatabaseConnector;
    constructor(){
        this.flightRepo=new FlightDatabaseConnector();
    }

    async createFlight(payload:IFlight):Promise<IFlight>{
        const response=await this.flightRepo.create(payload);
        return response;
    }
    async findAllFlights(payload?:flightQuery):Promise<IFlight[]>{
        const response=await this.flightRepo.findMany(payload);
        return response;
    }
    async findSingleFlight(id:string):Promise<IFlight | null>{
      const response=await this.flightRepo.findOne(id);
      return response;
    }
    async updateSingleFlight(id:string,payload:flightUpdateDto):Promise<IFlight | null>{
        const response=await this.flightRepo.update(id,payload);
        return response;
    }
    async deleteSingleFlight(id:string):Promise<IFlight | null>{
        const response=await this.flightRepo.delete(id);
        return response;
    }
}

export const flightService = new FlightService();
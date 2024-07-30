import { Request,Response } from "express";
import { flightService } from "../services/flight.services";
import { matchedData,validationResult } from "express-validator";
import { IFlight } from "../interfaces/flight.interface";
import { flightUpdateDto } from "../dtos/flight.dto";
class FlightController {
 

    async addFlight(req:Request,res:Response):Promise<any>{
        const result=validationResult(req);
        if(!result.isEmpty()){
            return res.status(400).json({status:false,error:result.array()})
        }
       const payload=matchedData(req) as IFlight;
       
     try{
         const response=await flightService.createFlight(payload);
         return res.status(200).json({status:true,data:response});
     }catch(err:any){
        return res.status(500).json({status:false,error:err.message}); 
     }
    }
    async getAllFlight(req:Request,res:Response):Promise<any>{
        try{
           const response=await flightService.findAllFlights();
           return res.status(200).json({status:true,response:response});
        }catch(err:any){
            return res.status(500).json({status:false,error:err.message}); 
        }
    }
    async getSingleFlight(req:Request,res:Response):Promise<any>{
        try{
            const response=await flightService.findSingleFlight(req.params.id);
            return res.status(200).json({status:true,response:response});
         }catch(err:any){
             return res.status(500).json({status:false,error:err.message}); 
         }
    }
    async updateFlight(req:Request,res:Response):Promise<any>{
        const result=validationResult(req);
        if(!result.isEmpty()){
            return res.status(400).json({status:false,error:result.array()})
        }
        const payload=matchedData(req) as flightUpdateDto;
        try{
            const response=await flightService.updateSingleFlight(req.params.id,payload)
            return res.status(200).json({status:true,data:response});
        }catch(err:any){
           return res.status(500).json({status:false,error:err.message});
        }
    }
    async deleteFlight(req:Request,res:Response):Promise<any>{
        try{
            const response=await flightService.deleteSingleFlight(req.params.id)
            return res.status(200).json({status:true,data:response});
        }catch(err:any){
           return res.status(500).json({status:false,error:err.message});
        }
    }
}

export const flightController = new FlightController();
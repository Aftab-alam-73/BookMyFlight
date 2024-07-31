import { flightUpdateDto } from "../dtos/flight.dto";
import { Document } from "mongoose";

export interface IFlightDatabaseConnector{
    create(payload: IFlight): Promise<IFlight>;
    findMany(payload?: any): Promise<IFlight[]>;
    findOne(id: string): Promise<IFlight | null>;
    delete(id: string):Promise<IFlight | null>
    update(id: string,payload:flightUpdateDto): Promise<IFlight | null>
}
export interface IFlight extends Document{
    flight_number: string;
    airline: string;
    status: string;
    departure_gate:string;
    arrival_gate:string;
    scheduled_departure:Date;
    scheduled_arrival:Date;
    actual_departure?:Date;
    actual_arrival?:Date;
    total_seats:number;
    ticket_price:number;
    from:string;
    to:string;
    distance:number;
    stops:string
    isDeleted:boolean;
}
export interface flightQuery{
    id?:string;
    from?:string;
    to?:string;
    date?:string;
    flightNumber?:string;
}
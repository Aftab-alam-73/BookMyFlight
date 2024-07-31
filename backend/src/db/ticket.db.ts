import { ticketDto } from "../dtos/ticket.dto";
import { ITicket, ITicketDatabaseConnector } from "../interfaces/ticket.interface";
import ticketModel from "../models/ticket.model";
import mongoose from "mongoose";

export class TicketDatabaseConnector implements ITicketDatabaseConnector{
   async create(payload: ticketDto): Promise<ITicket> {
        const newTicket=await ticketModel.create(payload);
        return newTicket;
    }
    async findMany(id:string): Promise<ITicket[]> {
        const tickets=await ticketModel.aggregate([
            {
                $match: {
                  isDeleted: false,
                  flightId:new mongoose.Types.ObjectId(id)
                }
              },
            {
              $lookup: {
                from: 'users',
                localField: 'userId',
                foreignField: '_id',
                as: 'userDetails'
              }
            },
            {
              $lookup: {
                from: 'flights',
                localField: 'flightId',
                foreignField: '_id',
                as: 'flightDetails'
              }
            },
            {
              $unwind: '$userDetails'
            },
            {
              $unwind: '$flightDetails'
            },
            {
              $project: {
                _id: 1,
                firstName: 1,
                lastName: 1,
                age: 1,
                gender: 1,
                phoneNumber: 1,
                email: 1,
                isDeleted: 1,
                user: {
                 
                  name: '$userDetails.name',
                  phoneNumber: '$userDetails.phoneNumber',
                  email: '$userDetails.email',
                  role: '$userDetails.role',
                  profile: '$userDetails.profile'
                },
                flight: {
                  _id: '$flightDetails._id',
                  status:'$flightDetails.status',
                  flight_number: '$flightDetails.flight_number',
                  airline: '$flightDetails.airline',
                  departure_gate: '$flightDetails.departure_gate',
                  arrival_gate: '$flightDetails.arrival_gate',
                  scheduled_departure: '$flightDetails.scheduled_departure',
                  scheduled_arrival: '$flightDetails.scheduled_arrival',
                  ticket_price: '$flightDetails.ticket_price',
                  from: '$flightDetails.from',
                  to: '$flightDetails.to',
                  distance: '$flightDetails.distance',
                  stops: '$flightDetails.stops'
                }
              }
            }
          ]);
            
        
        return tickets;
    }
   async findOne(id: string): Promise<any> {
    const tickets=await ticketModel.aggregate([
        {
            $match: {
                _id: new mongoose.Types.ObjectId(id)
              }
        },
        {
          $lookup: {
            from: 'users',
            localField: 'userId',
            foreignField: '_id',
            as: 'userDetails'
          }
        },
        {
          $lookup: {
            from: 'flights',
            localField: 'flightId',
            foreignField: '_id',
            as: 'flightDetails'
          }
        },
        {
          $unwind: '$userDetails'
        },
        {
          $unwind: '$flightDetails'
        },
        {
          $project: {
            _id: 1,
            firstName: 1,
            lastName: 1,
            age: 1,
            gender: 1,
            phoneNumber: 1,
            email: 1,
            user: {
             
              name: '$userDetails.name',
              phoneNumber: '$userDetails.phoneNumber',
              email: '$userDetails.email',
              role: '$userDetails.role',
              profile: '$userDetails.profile'
            },
            flight: {
              _id: '$flightDetails._id',
              flight_number: '$flightDetails.flight_number',
              airline: '$flightDetails.airline',
              departure_gate: '$flightDetails.departure_gate',
              arrival_gate: '$flightDetails.arrival_gate',
              scheduled_departure: '$flightDetails.scheduled_departure',
              scheduled_arrival: '$flightDetails.scheduled_arrival',
              ticket_price: '$flightDetails.ticket_price',
              from: '$flightDetails.from',
              to: '$flightDetails.to',
              distance: '$flightDetails.distance',
              stops: '$flightDetails.stops'
            }
          }
        }
      ]);
        
    
    return tickets?.[0] || null;
    }
   async delete(id: string): Promise<any> {
        
    }
}
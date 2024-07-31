import { body } from "express-validator"
export const flightDataValidator=[
 body("flight_number").trim().notEmpty().withMessage("Flight number should not be empty").isString(),
 body("airline").trim().notEmpty().withMessage("airline should not be empty").isString().isLength({min:3, max:30}).withMessage("airline should have  3 to 30 characters"),
 body("status").trim().notEmpty().withMessage("status should not be empty").isString().isLength({min:5, max:10}).withMessage("status should have  5 to 10 characters"),
 body("departure_gate").trim().notEmpty().withMessage("Departure gate should not be empty").isString(),
 body("arrival_gate").trim().notEmpty().withMessage("Arrival gate should not be empty").isString(),
 body("scheduled_departure").trim().notEmpty().withMessage("scheduled departure should not be empty").isISO8601().withMessage('Departure time must be a valid ISO 8601 date format'),
 body("scheduled_arrival").trim().notEmpty().withMessage("scheduled arrival should not be empty").isISO8601().withMessage('Arrival time must be a valid ISO 8601 date format'),
 body("total_seats").isNumeric().withMessage("Total seats should be a number").custom(value=>{
    if(value>150 || value<0){
        throw new Error('Total seats must be between 0 and 150');
    }
    return true;
 }),
 body("ticket_price").isNumeric().withMessage("Ticket price should be a number"),
 body("from").trim().notEmpty().withMessage("From should not be empty").isString(),
 body("to").trim().notEmpty().withMessage("To should not be empty").isString(),
 body("distance").notEmpty().isNumeric().withMessage("Distance should be a number"),
 body("stops").notEmpty().isString().optional()
]
export const flightUpdateDataValidator=[
 body("status").trim().notEmpty().withMessage("status should not be empty").isString().isLength({min:5, max:10}).withMessage("status should have  5 to 10 characters"),
 body("departure_gate").trim().notEmpty().withMessage("Departure gate should not be empty").isString(),
 body("scheduled_departure").trim().notEmpty().withMessage("scheduled departure should not be empty").isISO8601().withMessage('Departure time must be a valid ISO 8601 date format').optional(),
]
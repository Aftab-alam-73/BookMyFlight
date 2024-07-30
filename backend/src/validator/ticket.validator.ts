import { body } from "express-validator"
export const ticketDataValidator=[
    body("firstName").trim().notEmpty().withMessage("First Name should not be empty").isString().isLength({min:2, max:15}).withMessage("Last Name should have  2 to 10 characters"),
    body("lastName").trim().notEmpty().withMessage("Last Name should not be empty").isString().isLength({min:2, max:15}).withMessage("status should have  2 to 10 characters"),
    body("gender").trim().notEmpty().withMessage(" Gender should not be empty").isString(),
    body("age").trim().notEmpty().withMessage("Age should not be empty").isNumeric().withMessage("Age should be a valid number").custom(value=>{
        if(value<0 || value>100){
            throw new Error("Age should be between 0 and 100")
        }
        return true;
    }),
    body("email").trim().notEmpty().withMessage("Email should not be empty").isEmail().withMessage("Email should be a valid email address"),

    body("phoneNumber").trim().notEmpty().withMessage("Phone Number should not be empty").isMobilePhone('any'),
    
    body("flightId").trim().notEmpty().withMessage("Flight ID  should not be empty").isMongoId().withMessage("Flight ID should be a valid Mongo Id"),

    body("userId").trim().notEmpty().withMessage("User ID  should not be empty").isMongoId().withMessage("User ID should be a valid Mongo Id"),
    
   ]
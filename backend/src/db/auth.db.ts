import { loginDto, registerDto } from "../dtos/auth.dtos";
import { IAuthDatabaseConnector } from "../interfaces/auth.interface";
import { IdType, IUser } from "../interfaces/user.interface";
import userModel from "../models/user.model";
import Utils from "../utility/utils";

 export class AuthDatabaseConnector implements IAuthDatabaseConnector{
   async register(payload: registerDto): Promise<any> {
         const hashPassword=await Utils.getHashPassword(payload.password);
         const newUser=await userModel.create({...payload, password:hashPassword});
         return newUser;
    }
   async login(payload: loginDto): Promise<any> {
       const user=await userModel.findOne({email:payload.email}) 
       
       if(!user) throw new Error("User not found");
       const isMath=await Utils.validatePassword(payload.password,user.password);
       if(!isMath) throw new Error("Invalid password");
       const {_id,role}=user;
       const data:{id:IdType,role:string}={
         id:_id as IdType,
         role:role
       }
       const token=await Utils.getJwtToken(data);
       const response={
          accessToken:token,
          user
       }
       return response;
    }
    
}


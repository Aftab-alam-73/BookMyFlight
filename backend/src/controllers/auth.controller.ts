import { loginDto, registerDto } from "../dtos/auth.dtos";
import { authService } from "../services/auth.services";
import { Request, Response } from "express";
import { validationResult ,matchedData} from "express-validator";


class AuthController {
 
  async signUp(req: Request, res: Response): Promise<any> {
    const result=validationResult(req);
    if(!result.isEmpty()){
      return res.status(404).json({status:false,error:result.array()});
    }
    const payload=matchedData(req) as registerDto;
    
    try{
      const response = await authService.registerUser(payload);
      return res.json({status:true,data:response});
    }catch(err:any){
      return res.status(500).json({status:false,err:err.message});
    }
  }

  async signIn(req: Request, res: Response): Promise<any> {
    const result=validationResult(req);
    if(!result.isEmpty()){
      return res.status(404).json({error:result.array()});
    }
    const payload=matchedData(req) as loginDto;
    try{
      const response = await authService.validateUser(payload);
      return res.status(200).json({status:true, data:response});
    }catch(err:any){
      return res.status(500).json({status:false,err:err.message});
     
    }
  }
}

export const authController = new AuthController();

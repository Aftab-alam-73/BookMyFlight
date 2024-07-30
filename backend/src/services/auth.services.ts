import { AuthDatabaseConnector } from "../db/auth.db";
import { loginDto, registerDto } from "../dtos/auth.dtos";

export class AuthService {
  private authRepo:AuthDatabaseConnector;
  constructor(){
    this.authRepo=new AuthDatabaseConnector();
  }
async registerUser(payload:registerDto):Promise<any>{
   const response=await this.authRepo.register(payload);
   const {password,...others}=response._doc;
   return others;
 }
 async validateUser(payload:loginDto):Promise<any>{
    const response=await this.authRepo.login(payload);
    const {password,...others} =response.user._doc;
    response.user=others;
    return response;
 }
  
}
export const authService=new AuthService();
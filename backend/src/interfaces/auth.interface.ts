import { loginDto, registerDto } from "../dtos/auth.dtos";
import { IUser } from "./user.interface";

export interface IAuthDatabaseConnector{
    register(payload: registerDto): Promise<any>;
    login(payload:loginDto): Promise<any>;
}
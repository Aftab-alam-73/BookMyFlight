import { NextFunction, Response } from "express";
import { CustomRequest } from "../interfaces/user.interface";

type Roles = "admin" | "user";

const isRole = (role: string): role is Roles => {
    return role === "admin" || role === "user";
};

export const checkPermission = (arr: Roles[]) => {
    return (req: CustomRequest, res: Response, next: NextFunction) => {
        const role = req.role;
        if (isRole(role!) && arr.includes(role)) {
            return next();
        }
        return res.status(401).json({ status: false, error: "Unauthorized access" });
    };
};

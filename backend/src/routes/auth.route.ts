import { Router } from "express";
import { authController } from "../controllers/auth.controller";
import {
  signInDataValidator,
  singupDataValidator,
} from "../validator/auth.validator";

const router = Router();

router
  .post("/signup", singupDataValidator, authController.signUp)
  .post("/signin", signInDataValidator, authController.signIn);

export default router;

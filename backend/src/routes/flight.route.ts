import { Router } from "express";
import { flightController } from "../controllers/flight.controller";
import {
  flightDataValidator,
  flightUpdateDataValidator,
} from "../validator/flight.validator";
import { validateToken } from "../middleware/validateToken";
import { checkPermission } from "../middleware/chekPermission";

const router = Router();

router
  .get(
    "/",
    
    flightController.getAllFlight
  )
  .get(
    "/:id",
    validateToken,
    checkPermission(["admin", "user"]),
    flightController.getSingleFlight
  )
  .post(
    "/",
    validateToken,
    checkPermission(["admin"]),
    flightDataValidator,
    flightController.addFlight
  )
  .put(
    "/:id",
    validateToken,
    checkPermission(["admin"]),
    flightUpdateDataValidator,
    flightController.updateFlight
  )
  .delete(
    "/:id",
    validateToken,
    checkPermission(["admin"]),
    flightController.deleteFlight
  );

export default router;

import { Router } from "express";
import { ticketController } from "../controllers/ticket.controller";
import { ticketDataValidator } from "../validator/ticket.validator";

const router = Router();

router
  .get("/", ticketController.getAllTickets)
  .get("/:id", ticketController.getTicket)
  .post("/", ticketDataValidator, ticketController.addTicket)
  .delete("/:id", ticketController.deleteTicket);

export default router;

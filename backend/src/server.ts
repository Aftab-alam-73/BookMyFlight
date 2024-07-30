import express, { Response } from 'express';
import { Server } from 'socket.io';
import { createServer } from 'http';
import { config } from 'dotenv';
import { connectToDatabase } from './utility/dbConnection';
import { sendMail } from './utility/sendmail';
import { sendSms } from './utility/sendsms';
import cors from 'cors';
// --------------------- Routes Imports-------------------------------------------
import authRoutes from './routes/auth.route';
import flightRoutes from './routes/flight.route';
import ticketRoutes from './routes/ticket.route';

config();
const PORT = process.env.PORT || 8000;
const app = express();

// Apply CORS middleware before any routes
app.use(cors({ origin: 'http://localhost:3000' }));

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/flight', flightRoutes);
app.use('/api/ticket', ticketRoutes);

const server = createServer(app);
const io = new Server(server);

app.get('/', (_, res: Response) => {
    // sendMail();
    sendSms();
    return res.status(200).json("Welcome To BookMyFlight");
});

server.listen(PORT, () => {
    connectToDatabase();
    console.log(`Server is running on port ${PORT} http://localhost:${PORT}`);
});

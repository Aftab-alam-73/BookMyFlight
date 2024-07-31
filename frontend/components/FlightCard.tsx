import * as React from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import HeaderLogo from "./HeaderLogo";
import EditDialog from "./EditDialog";

const FlightCard = ({flight}:any) => {
  return (
    <Card className="">
      <CardHeader>
        <CardDescription>{flight.airline}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex gap-5">
          <Image src={"/indiGo_logo.png"} width={60} height={30} alt="logo" />
          <span className="shadow-inner bg-slate-200 p-2 rounded">
            Fligh Number: {flight.flight_number}
          </span>
          <span className="shadow-inner bg-slate-200 p-2 rounded">
            Status: {flight.status}
          </span>
          <span className="shadow-inner bg-slate-200 p-2 rounded">
            Departure Gate: {flight.departure_gate}
          </span>
          <span className="shadow-inner bg-slate-200 p-2 rounded">
            Arrival Gate: {flight.arrival_gate}
          </span>
          <EditDialog id={flight._id}/>
        </div>
      </CardContent>
    </Card>
  );
};
export default FlightCard;

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

const FlightCard = () => {
  return (
    <Card className="">
      <CardHeader>
        <CardDescription>IndiGo</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex gap-5">
          <Image src={"/indiGo_logo.png"} width={60} height={30} alt="logo" />
          <span className="shadow-inner bg-slate-200 p-2 rounded">
            Fligh Number: A35
          </span>
          <span className="shadow-inner bg-slate-200 p-2 rounded">
            Status: On Time
          </span>
          <span className="shadow-inner bg-slate-200 p-2 rounded">
            Departure Gate: A26
          </span>
          <span className="shadow-inner bg-slate-200 p-2 rounded">
            Arrival Gate: AB26
          </span>
          <EditDialog />
        </div>
      </CardContent>
    </Card>
  );
};
export default FlightCard;

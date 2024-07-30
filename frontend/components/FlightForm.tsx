"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {  z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const formSchema = z.object({
  airline:z.string().min(3,{message:"Airline Name must have atleast 3 characters"}),
  flight_number:z.string().min(3,{message:"Flight number must have atleast 3 characters"}),
  status:z.string().min(5,{message:"status must have atleast 5 characters"}),
  from:z.string().min(3,{message:"From  must have atleast 3 characters"}),
  to:z.string().min(3,{message:"To must have atleast 3 characters"}),
  departure_gate:z.string().min(3,{message:"Departure gate must have atleast 3 characters"}),
  arrival_gate:z.string().min(3,{message:"Arrival gate must have atleast 3 characters"}),
  scheduled_departure:z.date(),
  scheduled_arrival:z.date(),
  total_seats:z.coerce.number(),
  ticket_price:z.coerce.number(),
  distance:z.coerce.number(),
  stops:z.string()
  

})


const FlightForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      airline: "",
      flight_number: "",
      status: "",
      from: "",
      to: "",
      departure_gate:"",
      arrival_gate:"",
      // scheduled_departure:new Date(),
      // scheduled_arrival:new Date(),
      stops:""
    }});
function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
     }
  return (
   <main className="space-y-16">
    <section className="flex items-center gap-24">
    <h1 className="font-bold text-3xl">Add Flight</h1>
    </section>
    <section className="space-y-5">
    <p>Please enter flight details</p>
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-wrap gap-10">
       
        <FormField
         
          control={form.control}
          name="airline"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Enter Airline name..." {...field} className="w-[280px] py-6" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
         
          control={form.control}
          name="flight_number"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Enter flight number..." {...field} className="w-[280px] py-6" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
         
          control={form.control}
          name="status"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Enter flight status..." {...field} className="w-[280px] py-6" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
         
          control={form.control}
          name="from"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Enter source..." {...field} className="w-[280px] py-6" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="to"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input  placeholder="Enter destination..." {...field} className="w-[280px] py-6"/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="departure_gate"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input  placeholder="Enter departure gate..." {...field} className="w-[280px] py-6"/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="arrival_gate"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input  placeholder="Enter arrival gate..." {...field} className="w-[280px] py-6"/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
         
        <FormField
          control={form.control}
          name="stops"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input  placeholder="Enter stops seperate by comma..." {...field} className="w-[280px] py-6"/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="total_seats"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input type="number"  placeholder="Enter total seats..." {...field} className="w-[280px] py-6"/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="ticket_price"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input type="number"  placeholder="Enter ticket price..." {...field} className="w-[280px] py-6"/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="distance"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input type="number" placeholder="Enter journy distance..." {...field} className="w-[280px] py-6"/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
          <FormField
          control={form.control}
          name="scheduled_departure"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[280px] py-6 pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a departure date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date > new Date() || date < new Date("1900-01-01")
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
          <FormField
          control={form.control}
          name="scheduled_arrival"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[280px] py-6 pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a arrival date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date > new Date() || date < new Date("1900-01-01")
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="border border-solid border-e-inherit w-[280px] py-6 bg-blue-600 hover:bg-blue-700">Add</Button>
      </form>
    </Form>
    </section>
   </main>
  )
}

export default FlightForm

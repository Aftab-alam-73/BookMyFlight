"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {  z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

const formSchema = z.object({
  from:z.string().min(3,{message:"From must have atleast 3 characters"}),
  to:z.string().min(3,{message:"To must have at least 3 characters"}),
  scheduled_departure:z.date(),
  flight_number:z.string().min(5,{message:"Flight number must have at least 5 characters"})
})

const FlightStatus = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      from: "",
      to: "",
      scheduled_departure:new Date(),
      flight_number:"",
    }});
function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
     }
  return (
   <main className="space-y-16">
    <section className="space-y-5">
    <h1 className="font-bold text-3xl">Check Flight Status</h1>
    <p className="font-light">With BookMyFlight's flight tracker, you can now track the live status of domestic and international flights. Just enter a few details such as PNR number, flight number, travel date and others and get the flight status on the go from anywhere.</p>
    </section>
    <section className="space-y-5">
    <Form {...form}>
    <p>Enter flight details to check your flight status.</p>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-wrap gap-10">
       
        <FormField
         
          control={form.control}
          name="from"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="From" {...field} className="w-[280px] py-6" />
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
                <Input placeholder="To" {...field} className="w-[280px] py-6"/>
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
                        <span>Pick a date</span>
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
          name="flight_number"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Flight Number" {...field} className="w-[280px] py-6"/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="border border-solid border-e-inherit w-[280px] py-6 bg-blue-600 hover:bg-blue-700">Search Flights</Button>
      </form>
    </Form>
    </section>
   </main>
  )
}

export default FlightStatus

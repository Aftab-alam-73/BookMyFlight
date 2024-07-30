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
  FormMessage,
} from "@/components/ui/form"

const formSchema = z.object({
  from:z.string().min(3,{message:"From must have atleast 3 characters"}),
  to:z.string().min(3,{message:"To must be at least 3 characters"}),
  scheduled_departure:z.date()
})
const BookFlight = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      from: "",
      to: "",
      scheduled_departure:new Date(),
    }});
function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
     }
  return (
   <main className="space-y-16">
    <h1 className="font-bold text-3xl">Flight Booking</h1>
    <section className="space-y-5">
    <p>Please enter the source and destination , choose a date</p>
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex gap-10">
       
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
        <Button type="submit" className="border border-solid border-e-inherit w-[280px] py-6 bg-blue-600 hover:bg-blue-700">Search Flights</Button>
      </form>
    </Form>
    </section>
   </main>
  )
}

export default BookFlight

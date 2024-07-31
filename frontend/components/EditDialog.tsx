"use client";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
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
} from "@/components/ui/form";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { updateStatus, useUpdateFlightStatusMutation } from "@/redux/flightSlice";
import toast from "react-hot-toast";

const formSchema = z.object({
  status: z.string().min(1, { message: "Status shouldn't be empty" }),
  departure_gate: z.string().min(1, { message: "Status shouldn't be empty" }),
  scheduled_departure:z.date().optional()
});
type StatusUpdate={
  status: string
  departure_gate:string
  scheduled_departure?:Date
}
const EditDialog = ({id}:{id:any}) => {
  const [updateFlightStatus] =useUpdateFlightStatusMutation();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      status: "",
      departure_gate: "",
     
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
       if(!values.scheduled_departure){
        const payload:updateStatus={
           id,
           payload: {status:values.status,departure_gate:values.departure_gate} 
          }
          console.log(payload.id,payload.payload)
        updateFlightStatus(payload).unwrap().then((result)=>{
          toast("Status Changed successfully");
          console.log("status: ",result)
        }).catch((error:any)=>{
          toast("something went wrong");
          console.log("something went wrong", error);
       })
        return;
       }
       updateFlightStatus({id,payload:values}).unwrap().then((result)=>{
        toast("Status Changed successfully");
      }).catch((error)=>{
         toast("something went wrong");
         console.log("something went wrong", error);
      })
       
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-blue-700 hover:bg-blue-900 text-white rounded">
          Edit Status
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Flight Status</DialogTitle>
          <DialogDescription>
            Make changes to Flight status here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="status"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>New Status</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter Flight Status..." {...field} />
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
                  <FormLabel>New Departure Gate</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter new departure gate..."
                      {...field}
                    />
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
                        " py-6 pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a new departure date</span>
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
            <DialogFooter>
              <Button
                type="submit"
                className="bg-blue-700 hover:bg-blue-900 text-white"
              >
                Save changes
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default EditDialog;

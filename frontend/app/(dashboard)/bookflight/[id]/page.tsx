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
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
const formSchema = z.object({
  firstName:z.string().min(3,{message:"First Name must have atleast 3 characters"}),
  lastName:z.string().min(3,{message:"Last Name must have atleast 3 characters"}),
  age:z.coerce.number().min(1,{message:"Age must be atleast 1"}),
  gender:z.string(),
  phoneNumber:z.string().min(10,{message:"Phone must be 10 digits"}).max(10,{message:"phone must be 10 digits"}),
  email:z.string().email(),

})

const BookingPage = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          firstName: "",
          lastName: "",
          gender: "",
          email: "",
        }});
    function onSubmit(values: z.infer<typeof formSchema>) {
            console.log(values)
         }
      return (
       <main className="space-y-16">
        <section className="flex items-center gap-24">
        <h1 className="font-bold text-3xl">Flight Booking</h1>
        <span>Bengaluru {"--->"} Mumbai</span>
        </section>
        <section className="space-y-5">
        <p>Please enter passenser details</p>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-wrap gap-10">
           
            <FormField
             
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Enter first name..." {...field} className="w-[280px] py-6" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
             
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Enter last name..." {...field} className="w-[280px] py-6" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
             
              control={form.control}
              name="age"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Enter age..." type="number" {...field} className="w-[280px] py-6" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
             
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Enter email..." {...field} className="w-[280px] py-6" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input  placeholder="Enter phone number..." {...field} className="w-[280px] py-6"/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
              <FormField
          control={form.control}
          name="gender"
          render={({ field }) => (
            <FormItem>
              <Select  onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-[280px] py-6">
                    <SelectValue placeholder="Select your gender"  />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                </SelectContent>
              </Select>
              
              <FormMessage />
            </FormItem>
          )}
        />
            <Button type="submit" className="border border-solid border-e-inherit w-[280px] py-6 bg-blue-600 hover:bg-blue-700">Book Ticket</Button>
          </form>
        </Form>
        </section>
       </main>
      )
}

export default BookingPage

"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useToast } from "@/components/ui/use-toast"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card,CardContent,CardTitle,CardFooter,CardDescription,CardHeader } from "@/components/ui/card"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import  Link  from "next/link"
import { useSignUpMutation } from "@/redux/authSlice"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email:z.string().email(),
  password:z.string().min(5,{message:"Password must be at least 5 characters"})
})

export function SignUp() {
    const {toast}=useToast();
    const [SignUp,{data,isSuccess,isError,error}]=useSignUpMutation();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          name: "",
          email: "",
          password: "",
        }});
        function onSubmit(values: z.infer<typeof formSchema>) {
          console.log(values)
               SignUp(values).then((result) => {
                toast({description:"Signup Successfull"})
                console.log("result: " ,result);
               }).catch((error) => {
                toast({description:"Something went wrong"})
                console.log(error);
               })
             
          }
  return (
    <main className="min-h-screen flex items-center justify-center">

    <Card className="w-[350px] ">
    <CardHeader>
        <CardTitle>Sign-Up</CardTitle>
        <CardDescription>Book Your Flight And Track The Live Status</CardDescription>
      </CardHeader>
      <CardContent>
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter Your Name..." {...field} />
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
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter Your Email..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="Enter Your Password..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="bg-blue-800 hover:bg-blue-900 p-5 rounded text-white">SignUp</Button>
      </form>
    </Form>
    </CardContent>
    <CardFooter>
        Do you have account?<Link href="/login">signIn</Link> 
    </CardFooter>
    </Card>
    </main>
  )
}
export default SignUp
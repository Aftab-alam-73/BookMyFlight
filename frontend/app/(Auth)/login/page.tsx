"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import Link from 'next/link'

import { Button } from "@/components/ui/button"
import { Card,CardContent,CardTitle,CardDescription,CardHeader, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

const formSchema = z.object({
  email:z.string().email(),
  password:z.string().min(5,{message:"Password must be at least 5 characters"})
})

export function SignInPage() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          email: "",
          password: "",
        }});
function onSubmit(values: z.infer<typeof formSchema>) {
            console.log(values)
         }
  return (
    <main className="min-h-screen flex items-center justify-center">

    <Card className="w-[350px] ">
    <CardHeader>
        <CardTitle>Sign-In</CardTitle>
        <CardDescription>Book Your Flight And Track The Live Status</CardDescription>
      </CardHeader>
      <CardContent>
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
       
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
        <Button type="submit">SingIn</Button>
      </form>
    </Form>
    </CardContent>
    <CardFooter>
        Don't you have account?<Link href="/signup">singup</Link> 
    </CardFooter>
    </Card>
    </main>
  )
}
export default SignInPage
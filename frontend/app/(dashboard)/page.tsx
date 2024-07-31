"use client"
import Image from "next/image";
import { messaging } from "@/firebase";
import {getToken} from 'firebase/messaging'
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

export default function Home() {
    const router=useRouter();
   const data=useSelector((state:any)=>state.user);
   if(data.id==""){
   return router.push("/signin");
   }
  
  useEffect(()=>{
    async function generateToken(){
    const res= await Notification.requestPermission()
     if(res=='granted'){
 
       console.log("Permission granted from user")
       const token=await getToken(messaging,{vapidKey:"BE7ySsw9LJjWurYTj8xYen3LNS2qkss02TNSU2VpNAzjgvXBuVrMuX-8chfEahlLV5r8N7yfddJnV96iB7RujVQ"})
       console.log("Token has been generated",token)
       // await fetch(`http://localhost:5000?token=${token}`).then(response => response.json()).then(response => console.log("res",response))
     }
    else if(res=='denied'){
     console.log("permission denied from user")
     alert("You denied the permission")
    }else {
     console.log("default permission")
    }
   }
    // generateToken();
   },[])
  return (
    <main className="min-h-screen">
     hello world
    </main>
  );
}

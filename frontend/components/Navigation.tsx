"use client"
import { usePathname } from 'next/navigation'
import NavButton from './NavButton'
import User from "./User"
import { useSelector } from 'react-redux'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation'

type nav={
  title: string
  path: string
}

const navigation:nav[]=[
  {
    title:"Home",
    path:"/",
  },
  {
    title:"Book Flight",
    path:"/bookflight",
  },
  {
    title:"Flight Status",
    path:"/flightstatus",
  },
  {
    title:"Dashboard",
    path:"/dashboard",
  },
 

]
const Navigation = () => {
  const router=useRouter();

  const data=useSelector((state:any) => state.user)
  const pathname=usePathname()
  
  const handlelogout = () => {
    localStorage.removeItem("persist:root")
    router.push("/signin");
  }
  return (
    <div className='flex gap-x-4'>
      {
        navigation.map((tab:nav)=>{
          return <NavButton key={tab.path} path={tab.path} title={tab.title} isActive={tab.path==pathname
          
          }/>
        })
      }
      {data.id &&  <div className='flex items-center text-white gap-4'>
        <Button onClick={handlelogout} size={"sm"} className='bg-white text-blue-800 hover:bg-slate-50 p-2 rounded'>Logout</Button>
        <User name={data.name} profile={data.profile}/>
        </div>}
    </div>
  )
}

export default Navigation

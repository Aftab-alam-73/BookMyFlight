"use client"
import { usePathname } from 'next/navigation'
import NavButton from './NavButton'

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
  const pathname=usePathname()
  return (
    <div className='flex gap-x-4'>
      {
        navigation.map((tab:nav)=>{
          return <NavButton path={tab.path} title={tab.title} isActive={tab.path==pathname

          }/>
        })
      }
    </div>
  )
}

export default Navigation

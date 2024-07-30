
import Header from '@/components/Header'
import React from 'react'

type props={
    children:React.ReactNode
}
const DashboardLayout = ({children}:props) => {
  return (
    <div className='min-h-screen flex flex-1/2 flex-col gap-y-10'>
       <Header/>
       <div className='px-10 flex-1 mb-7'>
      {children}
       </div>
    </div>
  )
}

export default DashboardLayout

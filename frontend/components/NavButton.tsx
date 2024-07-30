import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
type props={
    path:string
    title:string
    isActive:boolean
}
const NavButton = ({path,title,isActive}:props) => {
  return (
    
      <Button 
      variant={'ghost'}
      className={isActive?"bg-white/10 hover:bg-white/10 hover:text-white text-white":"hover:bg-white/10 hover:text-white text-white"}
      >
        <Link href={path}>{title}</Link>
        </Button>
    
  )
}

export default NavButton

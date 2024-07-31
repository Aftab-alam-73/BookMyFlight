
import HeaderLogo from "./HeaderLogo"
import Navigation from "./Navigation"

const Header = () => {
  
  return (
    <nav className='bg-blue-800 flex items-center justify-between px-11 py-5 sticky top-0 z-10 '>
     <HeaderLogo/>
     <Navigation/>
    
    </nav>
  )
}

export default Header

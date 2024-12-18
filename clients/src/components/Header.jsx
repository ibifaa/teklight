import { useState } from "react"
import logo from "../assets/svg/logo.svg"
import { useNavigate } from "react-router-dom"

function Header() {
  const [open, setOpen] = useState(false)

  const handleClick = ()=>{
    setOpen(!open);
  }

const navigate = useNavigate()

  return (
       <div className="relative z-40">
       <section className="flex justify-between w-full px-[20px] md:px-[80px] py-4 shadow-lg items-center text-[18px] fixed z-5 bg-white">
       <div className="logo-section ">
            <div className="flex items-center cursor-pointer">
            <img className="w-[10%]" src={logo} alt="logo" />
            <p className="text-[#33324e] font-bold text-[20px]">TekLight</p>
            </div>
            </div>
        <div className="nav-items hidden md:block">
            <ul className="flex gap-8 font-normal text-[14px] items-center ">
                <li className="nav-link cursor-pointer text-[text-[#33324e]">Home</li>
                <li onClick={()=>navigate("/about")} className="nav-link cursor-pointer text-[text-[#33324e]">About</li>
                <li className="nav-link cursor-pointer text-[text-[#33324e]">Services</li>
                <li className="nav-link cursor-pointer text-[text-[#33324e]">Blogs</li>
                <li className="cursor-pointer contact px-[20px] rounded-lg py-2 ">Contact</li>
            </ul>
          </div>
            
          <button onClick={handleClick} className="text-3xl block md:hidden cursor-pointers">&#9776;</button>
       </section>
       
      
       
 <section
        id="mobile-menu"
        className={`absolute top-0 bg-black w-full text-3xl flex-col justify-content-center origin-top text-white md:hidden ${
          open ? "flex animate-open-menu" : "hidden"
        }`}
      >
          <button onClick={handleClick} className="text-5xl self-end px-6">
            &times;
          </button>

          <nav className="flex flex-col min-h-screen items-left py-8 ">
          <a href="#hero" className=" w-full text-center py-6 hover:opacity-90">Home</a>
          <a href="#hero" className=" w-full text-center py-6 hover:opacity-90">About</a>
          <a href="#hero" className=" w-full text-center py-6 hover:opacity-90">Services</a>
          <a href="#hero" className=" w-full text-center py-6 hover:opacity-90">Blog</a>
          <a href="#hero" className=" w-full text-center py-6 hover:opacity-90">Contact</a>
          </nav>
  </section>  
      
    </div>
  )
}

export default Header

import logo from "../assets/svg/logo.svg";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate()
  return (
    <div className='py-10 px-[20px] md:px-[80px] text-[18px] '>

        <div className="flex md:flex-row ">
        <img className="w-[20%] hidden md:block" src={logo} alt="logo" />

        <div className="flex flex-col md:flex-row gap-[10px] leading-1">
        <p className="leading-[30px]">At <span className='font-bold'>TekLight</span>,we are dedicated to empowering businesses and individuals through innovative technology, skill-focused training, and comprehensive research services. Based in Port Harcourt, we specialize in delivering tailored tech solutions that help businesses optimize operations, scale efficiently, and gain a competitive edge.</p>

       <p className="leading-[30px]">Our training programs bridge the gap between theoretical knowledge and industry demands, offering hands-on learning in areas like web development, data analytics, and emerging technologies. In addition, our research services provide in-depth insights and actionable strategies to help businesses and organizations make informed decisions.

       </p>

        </div>
       
       
        </div>
        
        <p className="leading-[30px]">With our team of experts and a commitment to excellence, TekLight is your trusted partner in driving growth, innovation, and success. Together, we can create meaningful impact and shape the future!</p>

        <button className="text-[#0939E5]" onClick={()=>navigate("/about")}>More</button>
      
    </div>
  )
}

export default About

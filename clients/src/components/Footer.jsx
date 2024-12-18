import logo from "../assets/svg/logo.svg"
import linkedin from "../assets/svg/socials/linkedin.svg";
import facebook from "../assets/svg/socials/facebook.svg";
import x from "../assets/svg/socials/x.svg";
import github from "../assets/svg/socials/Github.svg";

function Footer() {

  const date = new Date()
  let year = date.getFullYear();
  return (
    <div className="bg-[#3D5E66] px-[80px] py-20 w-[100%]">
<div className="flex flex-col justify-center items-center">
<h2 className="text-center text-white text-[40px]">Want to get started with us?</h2>
<button className="cursor-pointer contact contact2 w-[20%] px-[20px] rounded-lg py-2 my-2 bg-white">Contact</button>
</div>
      
      <div className="flex items-center cursor-pointer">
            <img className="w-[10%]" src={logo} alt="logo" />
            <p className="text-white font-bold text-[26px] absolute left-[170px]">TekLight</p>
            </div>
    
        
        <div className="flex flex-col md:flex-row justify-between my-5">
          <div className="text-white">
          <p className="text-gray-400 my-5">Contact Us</p>
            <p>Rivers State University <br /> Shopping Complex, Admin Block</p>
            <p> help@teklight.com</p>
            <p> 09036404556</p>
            
          </div>

          <div>
            <p className="text-gray-400 my-5">Company</p>
            <ul className="text-white">
              <li>Home</li>
              <li>About us</li>
              <li>Services</li>
            </ul>
          </div>

          <div>
            <p className="text-gray-400 my-5">Socials</p>
            <div className="flex gap-2">
            <div className="bg-white rounded-full p-1 w-[12%] flex flex-col items-center"><img src={x} alt="x" /></div>
            <div className="bg-white rounded-full p-1 w-[12%] flex flex-col items-center">   <img src={linkedin} alt="linkedin" /></div>
            <div className="bg-white rounded-full w-[12%] p-1 flex flex-col items-center"><img className="w-full" src={github} alt="github" /></div>
            <div className="bg-white rounded-full p-1 w-[12%] flex flex-col items-center"> <img src={facebook} alt="facebook" /></div>
            </div>
          </div>

        
        </div>

        <div><hr /></div> 
        <p className="text-center my-5 text-gray-400">&copy; {year} TekLight. All rights reserved</p>

    </div>
  )
}

export default Footer

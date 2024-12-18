import logo from "../assets/svg/logo.svg";
import pix from "../assets/png/aboutpix.jpg"

function About() {
  return (
    <div className="pt-[120px] md:px-[80px] px-[20px]">

        <div className="flex flex-col items-center justify-center">

       
     
      <p className="text-[22px] font-medium leading-2 text-center w-[80%]">Our mission is to deliver innovative tech solutions with skill-driven training, and impactful research  that empower businesses, individuals, and  academic communities to thrive in a rapidly evolving world. </p>

      <img className="w-[90%] my-[30px] rounded-lg" src={pix} alt="about image" />

      <p className="text-[22px] font-medium leading-2 text-left w-[80%] ">We bridge the gap between knowledge and application, we aim to shape a future defined by growth, innovation, and meaningful contributions to society.</p>

      </div>
      
    </div>
  )
}

export default About

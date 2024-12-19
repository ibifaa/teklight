import {useTypewriter, Cursor} from "react-simple-typewriter"

function Hero() {
  const [typeEffect] = useTypewriter({
    words: ["Training ", "Research","Data Analysis", "Digital Marketing"],
    loop:{},
    typeSpeed: 100,
    deleteSpeed: 40,
  })
  return (
    <div id="home" className='hero md:px-[80px] px-[20px] content-center z-1 '>
      <div>
      <h1 className="hero-text text-[50px] md:text-[60px] leading-1 text-white font-semibold w-[100%] md:w-[80%]">Transform your Business < br className="hidden md:block" /> and <br className="block md:hidden" />Career with our </h1>
      <h1 className="hero-text text-[50px] leading-1 text-[#0939E5] font-semibold w-[80%]"> | <span className="">{typeEffect} |</span> </h1>
    
    
      </div>

        <p className="md:w-[80%] w-[100%] text-white my-3 md:my-5">We render scalable tech solutions to small and medium scale businesses, in-depth research for all business and  education level. With flexible learning options, we provide expert guidance, and data-driven insights, we empower businesses to innovate,  individuals to excel and student go through research seamlessly.</p>

        <button className="bg-[#0939E5] py-1 md:py-2 rounded-lg px-[20px] text-white my-5 text-[18px] font-medium">Get Started</button>
      
    </div>
  )
}

export default Hero

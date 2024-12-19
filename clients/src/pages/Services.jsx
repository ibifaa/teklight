import { services } from "../data/services"
import Card from "../components/Card"
function Services() {
  return (
    <div className=" md:px-[80px] px-[20px] my-[50px]">
<div className="grid grid-cols-3  gap-[20px] py-5">
      {services.map((item, index) => (
            <div key={index} className="z-10">
              <Card data={item} />
            </div>
        ))}
     
    </div>
    </div>
    
  )
}

export default Services

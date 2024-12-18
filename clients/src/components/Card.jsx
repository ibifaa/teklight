
function Card(data) {
  console.log(data)
  return (
    <div className="relative">
      <div className="content-center flex flex-col justify-center items-center">
        <div className="bg-white border-[#0939E5] border-[5px]  p-1 rounded-full w-[20%] my-1">
        <img className="rounded-full relative z-10" src={data.data.icon} alt="icon" />
        </div>

      <h3 className="text-[22px] font-semibold my-1">{data.data.title}</h3>
      </div>
      
      <p className="text-center leading-[22px] my-2">{data.data.description}</p>
      <img className="pix h-[200px] w-full hover:scale-110 transition mt-[20px]" src={data.data.pix} alt="picture" />
    </div>
  )
}

export default Card

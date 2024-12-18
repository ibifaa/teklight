function BlogCard(item) {
  console.log(item)
  return (
    <div>
      <div className="relative">
        <img className="z-5 w-full" src={item.data.src} alt="background image" />
        <p className="absolute px-3 py-1 text-white  bg-white bg-opacity-20 rounded-lg mx-2 my-2 top-0 right-0">{item.data.category}</p>
      </div>
      <div>
        <p className="text-[#6C757D] text-[12px] my-3">{item.data.date}</p>
        <h3 className="text-[18px] font-bold text-[#495057] my-3">{item.data.title}</h3>
        <p className="text-[12px] text-[#6C757D] my-3">{item.data.description}</p>
      </div>

      <div className="flex gap-2">
        <div> <img  src={item.data.pix} alt="picture" /></div>
        <div >
          <h4>By {item.data.name}</h4>
          <p>{item.data.position}</p>
        </div>
       
      </div>
      
    </div>
  )
}

export default BlogCard;

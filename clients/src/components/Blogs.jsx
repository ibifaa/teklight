import {blogs} from "../data/blogs";
import BlogCard from "./BlogCard";
function Blogs() {
  return (
    <div id="blogs" className="px-[20px] md:px-[80px] py-[60px] z-10">
        <h3 className="text-[36px] text-[#0939E5] font-bold leading-[40px] my-5">Popular Blog Topics</h3>
        <div className="flex justify-between my-5 ">

        <ul className="flex gap-[20px]">
            <li className=" text-[#3D5E66]">All</li>
            <li>Tech</li>
            <li>Business</li>
            <li>Research</li>
            <li>Training</li>
            <li>Security</li>
            
        </ul>
        <h3>View All</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 gap-y-10">
        {
          blogs.map((item, index)=>(
            <div key={index}>
                {<BlogCard data ={item}/>}
            </div>
          
          ))

        }
        
        </div>

      
      
    </div>
  )
}

export default Blogs;

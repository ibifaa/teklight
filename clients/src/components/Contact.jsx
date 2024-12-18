
function Contact() {
  return (
    <div className="px-[20px] md:px-[80px] py-20 bg-[#EDF5FC] flex md:flex-row flex-col gap-5 w-[100%] md:h-[100vh]" >
      <div className="w-full md:w-[55%]">
            <h1 className="text-[50px] md:text-[60px]">We're here to help</h1>
            <p className="text-[22px]">Leave a message and we will get back to you.</p>

        </div>
        <div className="w-full md:w-[45%] shadow-lg p-10 bg-white rounded-lg">
            <form action="" className="">
                <div className="">
                <input className="p-[10px] w-full border-[1px] mb-[10px] rounded-lg" type="text" placeholder="Name" />
                <input className="p-[10px] w-full border-[1px] mb-[10px] rounded-lg"type="email" placeholder="Email" />
                </div>
                <input className="w-full p-[10px] border-[1px] mb-[10px] rounded-lg" type="email" placeholder="Subject" />
              
               <div>
                <textarea className="w-full p-[10px]  border-[1px] mb-[10px] rounded-lg text-gray-400" name="" id="" rows="4" cols="50"> Message</textarea>
               </div>

               <button className="bg-[#0939E5] text-white align-middle py-[10px] rounded-lg px-[20px]">Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Contact

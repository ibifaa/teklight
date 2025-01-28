import React, { useState }  from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';



function Dashboard () {
  const navigate = useNavigate()
  const [firstName, setFirstName] = useState("");

  const onloadPage =async()=>{
    try {
     
      const response = await axios.get(
        'http://localhost:3000/api/auth/dashboard',
        { withCredentials: true }
      );
      console.log(response.data)
      setFirstName(response.data.first_name);
    } catch (error) {
      console.log(error.message)
    }
  }

  const handleLogout=async()=>{
    try {
      const response = await axios.post(
  'http://localhost:3000/api/auth/dashboard',
  {},
  {
    withCredentials: true,
 
  }
);
     console.log(response);
      navigate("/login");
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    onloadPage();
  }, []);
    
  return (
    <div className="md:px-[80px] px-[20px] my-[50px] flex pb-[40px] flex-col md:flex-row w-full">
        <h1>Welcome to {firstName || "Guest"}</h1>
        <button onClick={handleLogout}>Logout</button>
      
    </div>
  )
}

export default Dashboard

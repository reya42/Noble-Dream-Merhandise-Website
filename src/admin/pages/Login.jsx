import React,{useState} from 'react'
import state from '../store'

const Login = () => {
    const [password,setPassword] = useState("")
    const [username,setUsername] = useState("")
    const handleLogin = async () =>{
      try {
        const response = await fetch('http://localhost:5033/api/Admin/Login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              username: username,
              password: password
            }),
          });
    
        const data = await response.json();
    
        if (response.ok && data.message) {
            alert(data.message)
            state.username = data.username
        }
        else {
          alert(data); 
        }
      }
      catch (error) {
        alert("Error : "+error);
      }
    };
  return (
    <div className="pt-16 min-w-full min-h-[80%] bg-secondary">
        <div className='flex flex-col bg-secondary h-[89.5vh] gap-x-20 pt-4'>
            <div className='text-white text-[56px] text-center font-bold'>
                Admin Login
            </div>
            <form className="grid gap-2 px-12 pt-6 w-[100vh] mx-auto" action="">
                <label htmlFor="username" className="text-white text-center font-semibold  text-[32px]">
                Username
                </label>
                <input type="text" id="username" name="username" placeholder="Enter your username" onChange={(e) => setUsername(e.target.value)}
                className="text-center border-2 border-white rounded px-2 py-1 focus:outline-none focus:border-blue-500 w-full text-[18px]"/>
            </form>
            <form className="grid gap-2 px-12 pt-6 w-[100vh] mx-auto" action="">
                <label htmlFor="password" className="text-white text-center font-semibold  text-[32px]">
                Password
                </label>
                <input type="password" id="password" name="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)}
                className="text-center border-2 border-white rounded px-2 py-1 focus:outline-none focus:border-blue-500 w-full text-[18px]"/>
            </form>
            <div className='flex justify-center items-center pt-6'>
                <div className='bg-[#EB2B26] px-1 pb-1 rounded-[10px] cursor-pointer' onClick={handleLogin}>
                Login
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login
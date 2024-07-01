import { useEffect,useState } from "react";
import { useSnapshot } from "valtio";

import state from "../store";

const Admins = () => {
    const snap = useSnapshot(state)

    const [password,setPassword] = useState("")
    const [username,setUsername] = useState("")
    const handleAdd = async () =>{
      try {
        const response = await fetch('http://localhost:5033/api/Admin/Add', {
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
        }
        else {
          alert(data); 
        }
      }
      catch (error) {
        alert("Error : "+error);
      }
    };
    
    const [admins, setAdmins] = useState([]);
    const fetchAdmins = async () => {
        try {
        const id = parseInt(localStorage.getItem("userId"));
        const url = `http://localhost:5033/api/Admin/Get`;
        const response = await fetch(url, {
            method: 'GET',
            headers: {
            'Content-Type': 'application/json',
            },
        });

        const data = await response.json();

        if (response.ok) {
            if (data[0]) {
                setAdmins(data);
            }
            else{
            setAdmins([])
                console.log(data)
            }
        } 
        else {
            setAdmins([])
            alert(data);
        }
        } catch (error) {
        setAdmins([])
            console.log("Error fetching user data."+error);
        }
    };
    useEffect(()=>{
        fetchAdmins()
    },[snap.page])
    return (
        <table className="w-[80%]">
            <thead>
                <tr className="font-poppins font-semibold text-[18px] text-white">
                    <th>Id</th>
                    <th>Username</th>
                    <th>Password</th>
                    <th>Add</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td></td>
                    <td>
                        <input type="text" id="username" name="username" placeholder="Enter username" onChange={(e) => setUsername(e.target.value)}
                            className="text-center border-2 border-white rounded px-2 py-1 focus:outline-none focus:border-blue-500 w-full text-[18px]"/>
                    </td>
                    <td>
                        <input type="password" id="password" name="password" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)}
                            className="text-center border-2 border-white rounded px-2 py-1 focus:outline-none focus:border-blue-500 w-full text-[18px]"/>
                    </td>
                    <td className="flex justify-center pt-1">
                        <div className="text-black font-bold bg-[#E7EB26] px-1 pb-1 rounded-[25px] cursor-pointer" onClick={handleAdd}>
                            Add
                        </div>
                    </td>
                </tr>
                {admins.map((admin, index) => (
                <tr key={index} className="text-white text-[18px]">
                    <td className="text-center">
                    {admin.id}
                    </td>
                    <td className="text-center">
                    {admin.username}
                    </td>
                    <td className="text-center">
                    {admin.password}
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Admins
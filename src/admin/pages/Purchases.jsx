import { useEffect,useState } from "react";
import { useSnapshot } from "valtio";

import state from "../store";

const Purchases = () => {
    const snap = useSnapshot(state)

    const handleDelete = async (id) =>{
        try {
            const url = `http://localhost:5033/api/Purchase/Delete?id=${id}`
          const response = await fetch(url, {
              method: 'DELETE',
              headers: {
                'Content-Type': 'application/json',
              },
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
      

    const [purchases, setPurchases] = useState([]);
    const fetchPurchases = async () => {
        try {
        const id = parseInt(localStorage.getItem("userId"));
        const url = `http://localhost:5033/api/Purchase/Get`;
        const response = await fetch(url, {
            method: 'GET',
            headers: {
            'Content-Type': 'application/json',
            },
        });

        const data = await response.json();

        if (response.ok) {
            if (data !="There is no key to get.") {
            setPurchases(data);
            }else{
            setPurchases([])
            console.log(data)
            }
        } else {
            setPurchases([])
            alert(data);
        }
        } catch (error) {
        setPurchases([])
        console.error('Error fetching user data:', error);
        alert("Error fetching user data.");
        }
    };
    useEffect(()=> {
        fetchPurchases()
    },[snap.page,snap.username])
    
    return (  
        <table className="w-[80%]">
            <thead>
                <tr className="font-poppins font-semibold text-[18px] text-white">
                    <th>Address</th>
                    <th>Strap Color</th>
                    <th>Case Color</th>
                    <th>2nd Case Color</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {purchases.map((thisData, index) => (
                    <tr key={thisData.id} className="text-white text-[18px]">
                        <td className="text-center">
                            {thisData.address}
                        </td>
                        <td className="text-center">
                            {thisData.strapColor}
                        </td>
                        <td className="text-center">
                            {thisData.caseColor}
                        </td>
                        <td className="text-center">
                            {thisData.caseColor2}
                        </td>
                        <td className="flex justify-center">
                            <div className="bg-[#EB2B26] px-1 pb-[2px] rounded-[20px] cursor-pointer" onClick={()=>handleDelete(thisData.id)}>
                                Delete
                            </div>
                        </td>
                    </tr>
                    ))}
            </tbody>
        </table>
  )
}

export default Purchases
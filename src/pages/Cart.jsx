import React,{ useState } from 'react'
import { motion } from "framer-motion";
import { fadeAnimation, fadeAnimationProps, slideAnimation } from '../animations';

import state from '../store';
import AnimationCanvas from '../canvas/AnimationCanvas';
import { useSnapshot } from 'valtio';

const Cart = () => {
  const snap = useSnapshot(state)
  
  const [address,setAddress] = useState("")

  const handleCreate = async () => {
    try {
      const response = await fetch('http://localhost:5033/api/Purchase/create', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            address: address,
            strapColor: snap.strapColor,
            caseColor: snap.caseColor,
            caseColor2: snap.case2Color,
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

  return (
    <div className="pt-4 h-[89.5vh] bg-secondary">
      <motion.div className='flex justify-start px-6 text-[56px] font-bold '
        {...slideAnimation("down",.2,.2,50,.5)}>
        Shopping Cart
      </motion.div>
      <motion.div className='absolute pt-3 px-6' onClick={()=>{ state.page="Product" }} {...slideAnimation("down",.6)}>
        <div className='z-10 px-1 pb-1 bg-[#E7EB26] text-black border border-black font-bold max-w-fit rounded-[20px] cursor-pointer'>Go Back To Styling</div>
      </motion.div>  
      <motion.div className='flex justify-center gap-5 p-12 font-mono font-semibold' {...slideAnimation("up",.8)}>
        Your Product:
        <motion.div className='w-[10%]' {...fadeAnimationProps(1)}>
          <AnimationCanvas/>
        </motion.div>
        <div className='flex-row'>
          <div className='w-fit h-fit' style={{ backgroundColor: snap.strapColor }}>
            Strap Color</div>
          <div className='w-fit h-fit' style={{ backgroundColor: snap.caseColor }}>
            Case Color</div>
          <div className='w-fit h-fit' style={{ backgroundColor: snap.case2Color }}>
            2nd Case Color</div>
        </div>
      </motion.div>
      <motion.div {...slideAnimation("right",1)}>
        <form className="grid gap-4 px-12 pt-6 max-w-[50%] mx-auto" action="">
          <label htmlFor="address" className="text-white text-center font-semibold text-[20px]">
            Address
          </label>
          <textarea
            id="address"
            name="address"
            placeholder="Enter your address"
            onChange={(e) => setAddress(e.target.value)}
            className="text-[16px] py-3 text-center border-2 border-white rounded focus:outline-none focus:border-blue-500 w-full resize-none"
          ></textarea>
        </form>
        <motion.div className='flex justify-center pt-3' {...slideAnimation("up",1.2)}>
            <div className={`flex bg-[#EB2B26] rounded-[5px] px-1 min-w-max cursor-pointer w-min h-min border-[2px]`}
                onClick={ handleCreate }
                >
                  Purchase Now! 
              </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Cart
import React,{useState} from 'react';
import { useSnapshot } from 'valtio';
import state from '../store';
import { SketchPicker } from 'react-color';
import { motion } from 'framer-motion';

import CanvasRenderer from '../canvas/CanvasRenderer';
import { slideAnimation,fadeAnimationProps,fadeAnimation } from '../animations';

const Product = () => {
  const snap = useSnapshot(state);
  
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [toggle,setToggle] = useState(false)

  const divStyle = {
    position: 'absolute',
    left: isMouseOver || toggle ? '0px' : '-130px',
    color: isMouseOver || toggle ? "#000000" :"transparent",
    transition: 'color 1s,left 1s, opacity 1s,',
  };
  
  const [isMouseOver2, setIsMouseOver2] = useState(false);
  const divStyle2 = {
    position: 'absolute',
    left: isMouseOver2  ? '0px' : '-213px',
    color: isMouseOver2? "#FFF" :"transparent",
    transition: 'color 1s,left 1s, opacity 1s,',
  };

  const handleClick = (side) => {
    if (side === "left") {
      if (currentColor !== 0) {
        setCurrentColor(currentColor-1)
      }
      else setCurrentColor(2)
    }
    else{
      if (currentColor !== 2) {
        setCurrentColor(currentColor+1)
      }
      else setCurrentColor(0)
    }
  }

  const [currentColor,setCurrentColor] = useState(0)
  const colors = ["Strap Color","Case Color", "2nd Case Color"]
  const colorChanger = (
    <div>
      <div className='flex justify-center text-center font-bold bg-gray-300 rounded-sm'>
        <div className='absolute left-1 cursor-pointer ' onClick={() => handleClick("left")}>
          {"<"}
        </div>
        {colors[currentColor]}
        <div className='absolute right-0 cursor-pointer' onClick={() => handleClick("right")}>
          {">"}
        </div>
      </div>
      <div className='text-white'>
        {currentColor===0?
          <SketchPicker color={snap.strapColor} disableAlpha onChange={(color) => state.strapColor = color.hex}/>
          :
          currentColor===1?
          <SketchPicker color={snap.caseColor} disableAlpha onChange={(color) => state.caseColor = color.hex}/>
          :
          <SketchPicker color={snap.case2Color} disableAlpha onChange={(color) => state.case2Color = color.hex}/>
        }
      </div>
    </div>
  )

  return (
    <div className='bg-secondary'>
      <motion.div {...fadeAnimationProps(.5)} className=" h-[89.5vh]">
        <motion.div {...fadeAnimationProps(1)} className=" h-[89.5vh]">
          <CanvasRenderer/>
        </motion.div>
        
        <motion.div className='absolute top-[4.25rem] left-1 text-[28px] font-bold font-poppins cursor-pointer'
          onClick={()=> state.page="Home"} {...slideAnimation("up")}>
            Return
        </motion.div>
        
        <div className='absolute top-32'>
        
          <div className='transition-all ease-in delay-200 font-bold' style={divStyle} onMouseEnter={()=>setIsMouseOver(true)} onMouseLeave={()=>setIsMouseOver(false)}>
              <div className={`flex bg-[#E7EB26] rounded-[5px] px-1 min-w-[165px] cursor-pointer text-[36px] ${toggle?"pr-5 border-black border-[2px] min-h-fit":"min-h-[120px]"}`}
                onClick={ () => setToggle(!toggle) }
                >
                  <div className={`flex ${isMouseOver || toggle ?"flex":"hidden"}`}>
                    Color Manager
                  </div>
                  <div className={toggle?"absolute right-4 transition-all delay-200 ease-in":"hidden"}>
                    X
                  </div>
              </div>
            <div className={toggle?"flex pt-2 pl-[2px] ":"hidden"}>
              {colorChanger}
            </div>
          </div>
        
          <div className={`${toggle?"top-80":"top-24"} transition-all ease-in-out delay-200 text-[36px]`} style={divStyle2} onMouseEnter={()=>setIsMouseOver2(true)} onMouseLeave={()=>setIsMouseOver2(false)}>
              <div className={`flex bg-[#EB2B26] rounded-[5px] px-1 min-w-max cursor-pointer`}
                onClick={ () => state.page="Cart" }
                >
                  Purchase Now! 
              </div>
          </div>
        
        </div>
      </motion.div>
    </div>
  );
};

export default Product;
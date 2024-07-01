import React from 'react'
import { motion } from "framer-motion";

import { fadeAnimationProps, slideAnimation } from '../animations';
import { styles } from '../style';
import state from '../store';

import AnimationCanvas from '../canvas/AnimationCanvas';


const Home = () => {
  return (
    <div className='xl:flex bg-secondary xl:h-[90.5vh] h-fit gap-x-20 pt-10'>
      <div className='flex flex-col'>
        <motion.div className='flex justify-start px-6 pt-[3.8rem] xl:text-[40px] text-[32px] font-poppins'
          {...slideAnimation("down",.5,.5,50,1)}>
          <h1 className='text-start font-bold group relative max-w-fit text-white'>
            <div className='absolute z-0 blur-[2px]'>
              An Infinite Spectrum on Your Wrist
            </div>
            <div className='z-10'>
              An Infinite Spectrum on Your Wrist
            </div>
            <motion.div {...slideAnimation("right",0.8)} className="pt-2">
              <div className='absolute z-0 blur-[2px]'>
                Our Smart Watch
              </div>
              <div className='z-10'>
                Our Smart Watch
              </div>
              <motion.div {...slideAnimation("up",1)}>
                <div className={`${styles.yourDesign} absolute z-0 blur-[2px]`}>
                  Your Design.
                </div>
                <div className={`${styles.yourDesign} z-10`}>
                  Your Design.
                </div>
              </motion.div>
            </motion.div >
          </h1>
        </motion.div>
      </div>
      <motion.div className="absolute left-[2%] top-[45%]" {...fadeAnimationProps(1.2)}>
        <div className='bg-[#CF2621] max-w-fit rounded-[20px] cursor-pointer' onClick={()=>{ state.page="Product" }}>
          <div className='z-0 absolute blur-[2px] px-1 pb-1'>Style It Now!</div>
          <div className='z-10 px-1 pb-1'>Style It Now!</div>
        </div>
      </motion.div>
      <motion.div className='xl:w-[40%] w-full h-[80%]' {...fadeAnimationProps(1.4)}>
        <AnimationCanvas/>
      </motion.div>
    </div>
  )
}

export default Home
import React from 'react'
import {styles} from "../style"
import { useSnapshot } from 'valtio'

import state from './store'

import Login from './pages/Login'
import Purchases from './pages/Purchases'
import Admins from './pages/Admins'

const Main = () => {
  const snap = useSnapshot(state)
  
  return (
    <div className="min-h-screen max-h-fit max-w-screen">
      <div className="fixed z-40 w-full p-2 bg-primary">
        <div className="flex justify-center font-bold text-[52px]">
          <a href='/' className="flex">
            <div className={styles.noble}>
                Noble
            </div>
            <div>
                Dream
            </div>
          </a >
        </div>
      </div>
      {snap.username === ""?
        <Login/>
        :
        <div className="pt-16 min-w-full min-h-[80%] bg-secondary">
          <div className='flex flex-col bg-secondary min-h-[89.5vh] gap-x-20 pt-4'>
            <div className='text-[56px] text-center font-bold'>
              Welcome {" "+snap.username}
            </div>
            <div className='text-[28px] flex gap-4 pt-12 justify-center'>
              <div className={snap.page==="Purchases"?"text-white cursor-default":"text-[rgba(255,255,255,0.5)] cursor-pointer"} onClick={()=> state.page = "Purchases"}>
                View Purchases
              </div>
              <div className={snap.page==="Admins"?"text-white cursor-default":"text-[rgba(255,255,255,0.5)] cursor-pointer"} onClick={()=> state.page = "Admins"}>
                View Admins
              </div>
            </div>
            <div className='flex justify-center pt-6'>
              {snap.page==="Purchases"?
                <Purchases/>
                :
                <Admins/>
              }
            </div>
          </div>
        </div>
      }
    </div >
  )
}

export default Main
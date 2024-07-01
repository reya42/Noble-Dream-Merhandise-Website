import { AnimatePresence, motion } from "framer-motion";
import { useSnapshot } from "valtio";
import {styles} from "./style.js"

import state from "./store"
import {slideAnimation} from "./animations"

import { Home, Product,Cart } from "./pages"

function App() {
  const snap = useSnapshot(state)
  return (
    <div className="min-h-screen xl:max-h-screen max-h-fit max-w-screen">
      <AnimatePresence>
          <div className="fixed z-40 w-full p-2 bg-primary">
              <div className="flex justify-center font-bold text-[52px]">
                <button className="flex" onClick={() => state.page='Home'}>
                  <motion.div className={styles.noble} {...slideAnimation('down')}>
                      Noble
                  </motion.div>
                  <motion.div {...slideAnimation('down',0.3)}>
                      Dream
                  </motion.div>
                </button >
              </div>
            </div>
        </AnimatePresence>
      <div className="pt-16">
        {snap.page==='Home'?
            <Home/>
          :
          snap.page==='Cart'?
            <Cart/>
          :
            <Product/> 
        }
      </div>
    </div >
  )
}

export default App

import React, { useState } from 'react'
import { motion, AnimatePresence} from 'framer-motion';
import { useSnapshot } from 'valtio';
import state from '../store';
import { headContainerAnimation,headContentAnimation,headTextAnimation,slideAnimation} from '../config/motion';
import { CustomButton } from '../components';

const Home = () => {
  const snap = useSnapshot(state);
  const [file, setFile] = useState('');

  const readFile = (type) =>{
    console.log(`Reading file as ${type} :`,file);
  }

  return (
    <AnimatePresence>
      {snap.intro &&(  
        <motion.section className='home' {...slideAnimation('left')}>
          <motion.header {...slideAnimation('down')}>
            <img src='./Phoenix.png' alt='logo' className='w-10 h-10 object-contain' />
          </motion.header>

          <motion.div className='home-content' {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>

              <h1 className='head-text text-[orange]-700'>
                
                ROCK <br className='xl:block hidden inline' /> IT !&nbsp;
                <img src='./rockit.png' alt='rock' className='w-[170px] h-[170px] inline object-contain' />
              </h1>

            </motion.div>

            <motion.div {...headContentAnimation} className='flex flex-col gap-5'>
              <p className='max-w-md font-normal text-[#d9e70e] text-base'>
                Create your unique and exclusive shirt with brand new 3D customization tool..
                <strong> Unleash your imagination </strong>
                  and define your own style
              </p>

              <CustomButton type="filled" title="Define your style in 🤌 way !" handleClick={() => state.intro = false} customStyles="w-fit px-4 py-2.5 font-bold text-sm" />
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  )
}

export default Home
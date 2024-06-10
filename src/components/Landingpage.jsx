import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowDownLong } from "react-icons/fa6";

const Landingpage = () => {
  
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full h-screen bg-zinc-900 pt-1'>
     <div className='textstructure mt-40 px-20'>
        {["We create", "Eye Opening", "presentation"].map((item,index) => {
            return  <div key={index} className='masker'>
              <div className='w-fit flex items-center overflow-hidden'>
                {index === 1 && (
                    <motion.div initial={{width: 0}} animate={{width: "9vw"}} transition={{ease: [0.76, 0, 0.24, 1], duration: 1}} className=' mr-[1vw] w-[9vw] rounded-md h-[5vw] relative'>
                        <img className='w-full h-full bg-cover rounded-md' src="https://images.unsplash.com/photo-1601158935942-52255782d322?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGxvZ298ZW58MHx8MHx8fDA%3D" alt="" />
                </motion.div>)}
            <h1 className='uppercase text-[6.5vw] leading-[6vw] tracking-tighter w-full font-["Open_Sans"] font-semibold'>{item}</h1>
            </div>
        </div>
        })}
        
     </div>
     <div className='border-t-[1.5px] border-zinc-500 mt-[40px] flex justify-between item-center py-3 px-20 capitalize font-["Open_Sans"]'>
       {["for public and private comapines", "from the firt pitch to IPO"].map((item, index)=>(<p className='text-md font-light tracking-tight leading-none'>{item}</p>))}
       <div className='start flex items-center gap-5'>
        <div className='px-5 py-2 border-[1px] border-zinc-400 rounded-full font-light text-md capitalize'>Start the project</div>
        <div className='w-10 h-10 flex items-center justify-center border-[1px] border-zinc-400 rounded-full'>
        
          <span className='rotate-[45deg]'>
                <FaArrowDownLong />
          </span>
        </div>
       </div>
     </div>
    </div>
  )
}

export default Landingpage
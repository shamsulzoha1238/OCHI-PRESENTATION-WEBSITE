import React from 'react'


const Featured = () => {
 
  
  return (
    <div className='w-full py-20'>
        <div className='w-full px-10 border-b-[1px] border-zinc-700 pb-20 mt-[-10vh]'>
          <h1 className='text-7xl font-["Open_Sans"] tracking-tight'> Featured Project</h1>
        </div>
        <div className='px-20'>
        <div className='cards w-full flex gap-10 mt-10'>


          <div className='cardcontainer relative w-1/2 h-[70vh]'>
            <h1 className='absolute flex text-[#CDEA68] overflow-hidden right-0 translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-5xl leading-none tracking-tighter font-["Open_Sans"]'>{"FYDE".split("").map((item, index)=><span>{item}</span>)}</h1>
            
            <div className=' card w-full h-full rounded-xl overflow-hidden'>
            <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png" alt="" />
            </div>
              
             </div>
           <div className='cardcontainer relative w-1/2 h-[70vh]'>
           <h1 className='absolute text-[#CDEA68] right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-5xl leading-none tracking-tighter font-["Open_Sans"]'>{"VISE".split("").map((item, index)=><span>{item}</span>)}
           </h1>
           <div className='card w-full h-full rounded-xl overflow-hidden'>
             <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg" alt="" />
           </div>
             </div>
          </div>
        </div>
    </div>
  )
}

export default Featured
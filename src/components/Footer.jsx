import React from 'react'

const Footer = () => {
  return (
    <div className='w-full flex gap-5 h-screen bg-zinc-90 p-20'>
        <div className='w-1/2 h-full flex flex-col justify-between font-["Open_Sans"]'>
            <div className='heading'>
                <h1 className='text-[7vw] font-semibold uppercase leading-none -mb-[20px]'>Eye-</h1>
                <h1 className='text-[7vw] font-semibold uppercase leading-none -mb-[20px]'>Opening</h1>
            </div>
            <h3 className='text-3xl font-["Open_Sans"] '>Ochi.</h3>
        </div>
        <div className='w-1/2'>
        <h1 className='text-[5vw] font-semibold uppercase leading-none -mb-[20px] font-["Open_Sans"]'>Presentations</h1>
        <div className='dets font-["Open_Sans"] mt-10'>
            <a className='block text-xl font-light' href="#">Google</a>
            <a className='block text-xl font-light' href="#">Facebook</a>
            <a className='block text-xl font-light' href="#">LinkedIn</a>
            <a className='block text-xl font-light' href="#">Instagram</a>
            <a className='block text-xl font-light' href="#">Twitter</a>
            <a className='block text-xl font-light' href="#">Contact.No: 7079828812</a>

            
            
        </div>

        </div>
    
 
    </div>
  )
}

export default Footer
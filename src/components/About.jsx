import React from 'react'

const About = () => {
  return (
    <div className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
        <h1 className='font-["Open_Sans"] text-[4vw] leading-[4.5vw] tracking-tight'>Ochi is strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>
        <div className='w-full flex gap-5 border-t-[1px] pt-[1px] mt-[3vw] bg-[#CDEA68]'>
        <div className='w-1/2'>
            <h1 className='text-5xl font-["Open_Sans"]'>Our Approch:</h1>
            <button className=' flex gap-10 items-center px-[37px] py-[15px] bg-zinc-900 mt-10 rounded-full text-white font-["Open_Sans"]'>Read More
            <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
            </button>
          </div>
          <div className='w-1/2 h-[70vh] rounded-3xl bg-[#b0c859] mt-[3vh] overflow-hidden'>
          <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg" alt="" />
          </div>
        </div>
    </div>
  )
}

export default About
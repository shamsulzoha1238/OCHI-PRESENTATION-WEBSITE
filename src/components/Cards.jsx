import React from 'react'

const Cards = () => {
  return (
    <div className='w-full h-screen bg-zinc-900 flex items-center gap-5 px-32'>
        <div className='cardcontainer h-[50vh] w-1/2'>
            <div className='card relative rounded-xl w-full h-full bg-[#004D43] flex items-center justify-center '>
                <h1 className='w-32 text-7xl font-["Open_Sans"] text-[#CDEA68]'>Ochi</h1>
                <button className='absolute px-4 rounded-full py-1 border-2 left-10 bottom-10 font-["Open_Sans"]'>&copy;2019-2022</button>
            </div>

        </div>
        <div className='cardcontainer flex gap-5 h-[100vh] w-1/2 items-center'>
        <div className='card relative flex items-center justify-center rounded-xl w-full h-1/2 bg-[#192826]'>
        <h1 className='w-32 text-5xl font-["Open_Sans"] text-[#CDEA68]'>Clutch</h1>
                <button className='absolute px-2 rounded-full py-1 border-2 left-5 bottom-10 font-["Open_Sans"]'>RATING 5.0 CLUTCH</button>
        </div>
        <div className='card relative flex items-center justify-center rounded-xl w-full h-1/2 bg-[#192826]'>
        <h1 className='w-32 text-4xl font-["Open_Sans"] text-[#CDEA68] font-["Open_Sans"]'>Feauter Academy</h1>
                <button className='absolute px-1 rounded-full py-1 border-2 left-2 bottom-10 font-["Open_Sans"]'>BUSINESS ACADEMY</button>
        </div>
        </div>
    </div>
  )
}

export default Cards
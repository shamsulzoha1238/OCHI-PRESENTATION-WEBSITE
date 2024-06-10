import React from 'react'

const Navbar = () => {
  return (
    <div className='fixed z-[999] w-full px-12 py-3 font-semibold flex justify-between item'>
       <div className='logo'>
     <h1 className='text-2xl font-["Open_Sans"]'>Logo</h1>
       </div>
       <div className='links flex gap-10'>
         {["Services", "Our Work", "About Us", "Insight", "Contact"].map((item,index) => <a key={index} className={`text-md font-["Open_Sans"] ${index === 4 && "ml-32"}`}>{item}</a>)}
       </div>
    </div>
  )
}

export default Navbar
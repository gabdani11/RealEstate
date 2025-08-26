import React from 'react'
import './index.css'
import Hamburger from './components/Hamburger.jsx'

const App = () => {
  return (
    <>
    <div className='h-screen w-full'>
    <div className='w-full h-[10%] flex justify-between items-end px-48'>
      <h1 className='text-3xl font-bold'>Hello world!</h1>
      <Hamburger />
      
    </div>
    <div className='navbarlist h-[464px] w-full bg-blue-900 text-white flex justify-center items-center relative'>
      <div className='bg-green-100 h-[80%] w-[80%] flex justify-center items-center relative '>
      <ul className='flex gap-[10px] md:gap-[180px] lg:gap-[264px] relative bg-amber-300 text-[#1c1c1c]'>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Properties</a></li>
        <li><a href="#">F&Q</a></li>
        
      </ul>
      <a className='absolute top-0 right-0 bg-[#1c1c1c] px-[40px]' href="#">Contact</a>
      </div>
    </div>
    </div>  
    </>
  )
}

export default App
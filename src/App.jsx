import React, { useEffect, useRef, useState } from 'react'
import './index.css'
import 'remixicon/fonts/remixicon.css'
import gsap from 'gsap'
import {motion} from 'motion/react'

const App = () => {
  const tl = useRef(null)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    gsap.set('.navbarlist', { y: '-100%', })

    tl.current = gsap.timeline({ paused: true })
    tl.current.to('.navbarlist', {
      y: '0%',
      opacity: 1,
      duration: 0.5,
      zIndex: 10,
      ease: 'power1.out',
    })
    tl.current.fromTo('.navlist li', {
      y: -20,
      opacity: 0,
    }, {
      y: 0,
      opacity: 1,
      duration: 0.9,
      stagger: 0.1,
      ease: 'elastic.out',
    })
      
  }, [])

  const toggleMenu = () => {
    if (isOpen) {
      tl.current.reverse()
    } else {
      tl.current.play()
    }
    setIsOpen(!isOpen)
  }

  return (
    
    <div className="h-screen w-full relative overflow-x-hidden ">
      {/* Navbar */}
      <div className="w-full h-[10%] flex justify-between items-end px-[20px] lg:px-[60px] z-20 relative ">
        <h1 className="text-[24px] font-semibold md:tracking-[2em] lg:tracking-[2.33em]">LuxeEstate</h1>
        <div className="menu cursor-pointer" onClick={toggleMenu}>
          {isOpen ? (
            <motion.i
            whileHover={{ x: 10, transition: { type: "spring", stiffness: 300 } }}

            
             className="ri-close-line text-2xl"></motion.i> // Close icon
          ) : (
            <i className="ri-menu-line text-2xl"></i> // Hamburger icon
          )}
        </div>
      </div>

      {/* Navbar List */}
      <div className="navbarlist h-[464px] w-full text-white bg-white flex justify-center items-center absolute top-0 left-0">
        <div className="h-[80%] w-[80%] flex justify-center items-center relative z-[1000]">
          <ul className="navlist flex gap-[10px] md:gap-[180px] lg:gap-[264px] relative text-[#1c1c1c] text-[16px] font-regular">
            <motion.li 
            whileHover='hover'
            className="relative list-none cursor-pointer">
              <a href="#">Home</a>
              <motion.span
                className="absolute left-0 bottom-0 h-[2px] bg-[#1c1c1c] w-0"
                variants={{ hover:{ width: "100%" }}} 
                transition={{ duration: 0.3 }}
              />
            </motion.li>

            <motion.li 
            whileHover='hover'
            className="relative list-none cursor-pointer">
              <a href="#">About</a>
              <motion.span
                className="absolute left-0 bottom-0 h-[2px] bg-[#1c1c1c] w-0"
                variants={{ hover:{ width: "100%" }}} 
                transition={{ duration: 0.3 }}
              />
            </motion.li>
            <motion.li 
            whileHover='hover'
            className="relative list-none cursor-pointer">
              <a href="#">Properties</a>
              <motion.span
                className="absolute left-0 bottom-0 h-[2px] bg-[#1c1c1c] w-0"
                variants={{ hover:{ width: "100%" }}} 
                transition={{ duration: 0.3 }}
              />
            </motion.li>
            <motion.li 
            whileHover='hover'
            className="relative list-none cursor-pointer">
              <a href="#">F&Q</a>
              <motion.span
                className="absolute left-0 bottom-0 h-[2px] bg-[#1c1c1c] w-0"
                variants={{ hover:{ width: "100%" }}} 
                transition={{ duration: 0.3 }}
              />
            </motion.li>
          </ul>
          
          <a className="absolute top-[70px] md:top-[60px] lg:top-[10px] right-0 bg-[#1c1c1c] text-white px-[20px] text-[16px] py-2 rounded-full cursor-pointer" href="#">
            Contact
          </a>
        </div>
      </div>

      {/* Hero Section */}
      <div className=" h-[90%] flex flex-col px-[50px] lg:px-[105px] justify-between overflow-hidden">
        
        <h1 className="font-bold text-[80px] md:text-[200px] lg:text-[400px] lg:leading-none"><span className='mr-[-27px]'></span>HOME</h1>
        
        <div className='mb-20 w-[100%] z-10'>
          <h2 className='font-medium text-[24px] lg:text-[40px] leading-7 lg:leading-10'>Get your <br/><span className='italic'>dream</span> house</h2>
          <p className=' w-[100%] lg:w-[15%] md:w-[150%]  text-[16px]'>Find your dream home with ease. Explore modern apartments, family houses, and luxury villas designed to match your lifestyle. With trusted agents and verified listings, your perfect property is just a click away.</p>
          <button className='text-[17px] font-medium bg-[#CDCDCD] rounded-full px-3 py-1 mt-3'>Explore Properties</button>
        </div>
      </div>
      <img className='absolute top-50 lg:top-20 right-0'src="./images/house.png" alt="house.png" />
    </div>
  )
}

export default App

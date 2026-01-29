import React from 'react'
import Card1 from '../cards/Card1'
import Cards2 from '../cards/Cards2'
import Card3 from '../cards/Card3'
import Card4 from '../cards/Card4'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const Program = () => {

  useGSAP(() => {
         gsap.to("#text", {
            ease:"power2.inOut",
            opacity:1,
            y:0,      
            
          })

          gsap.fromTo(".para", {
            opacity:0,
            y:20,

          },{
            opacity:1,
            y:0,
            delay:0.4,
            stagger:0.1,
            
          })
      }, [])
  return (
    <>
    <section className='w-full h-screen flex bg-[#010101] text-white px-6'>
      <div className='w-[40%] h-full flex  flex-col justify-center space-y-6 '> 
      <span className='text-[28px] text-[#AAF72D] italic para'>  Programs</span>
       <span className='text-[36px] font-medium leading-12 para'>
        Extreme Fitness Sessions for <br /> Fast Progress</span>
        <span className='text-[16px] leading-5 text-[#676666] para'>
          Our certified experts are here to match your goals <br /> from strength training to mindful yoga. Choose the <br /> one that fits you best.</span>
      </div>
      <div className='w-[60%] h-full flex flex-col justify-center'>
        <div className='grid gap-5 grid-cols-2'>
          <Card1 />
          <Cards2 />
          <Card4 />
          <Card3 />
        
        </div>
         </div>
    </section>
    </>
  )
}

export default Program
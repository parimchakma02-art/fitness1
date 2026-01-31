import React from 'react'
import Card1 from '../cards/Card1'
import Cards2 from '../cards/Cards2'
import Card3 from '../cards/Card3'
import Card4 from '../cards/Card4'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitText from "gsap/SplitText";



const Program = () => {

   useGSAP(() => {
    // Split heading into characters
    const charSplit = new SplitText(".split", {
      type: "chars",
    });

    // Split paragraph into words
    const wordSplit = new SplitText(".words", {
      type: "words",
    });

    // Paragraph animation
    gsap.from(wordSplit.words, {
      y: 40,
      opacity: 0,
      duration: 1.3,
      stagger: 0.05,
      ease: "power2.out",
    });

    // Heading animation
    gsap.from(charSplit.chars, {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.04,
      ease: "power3.out",
    });

    // Cleanup
    return () => {
      charSplit.revert();
      wordSplit.revert();
    };
  }, []);
  return (
    <>
    <section id='program' className='w-full h-screen flex bg-[#010101] text-white px-6'>
      <div className='w-[40%] h-full flex  flex-col justify-center space-y-6 '> 
      <span className='text-[28px] text-[#AAF72D] italic font-light split'>  Programs</span>
       <span className='text-[36px] font-medium leading-12 split'>
        Extreme Fitness Sessions for <br /> Fast Progress</span>
        <span className='text-[16px] leading-5 text-[#676666] words'>
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
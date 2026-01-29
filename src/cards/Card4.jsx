import React from 'react'
import { GoArrowUpRight } from "react-icons/go";
const Card4 = () => {
    return (
        <>
            <section className='w-90 h-60 justify-center flex flex-col px-4 space-y-9 bg-[#374225] rounded-[11px] 
            
            backdrop-blur-md
            shadow-xl
            transition-all duration-500
            hover:scale-105
            
            '>
                <h1 className='flex  justify-between text-black'>
                    <span className='bg-[#95F709] w-20 py-2 rounded-full flex justify-center items-center'>  HIT</span>
                    <span className='bg-[#95F709] w-8 h-8 flex justify-center items-center rounded-full'><GoArrowUpRight /></span>
                </h1>
                <h1 className='flex flex-col bg-[#5A624B] px-4 py-2 rounded-[11px]'>
                    <span className='text-[22px]'>  Extreme Fitness Sessions for </span>
                    <span className='w-70 text-sm text-[#afafaf]'>
                        Up for the challenge? Our HIT sessions are
                        crafted to torch calories and boost
                        cardiovascular fitness quickly. Through a
                        mix of intense exercises and brief recov
                    </span>
                </h1>

            </section>

        </>
    )
}

export default Card4
import React from 'react'
import { GoArrowUpRight } from "react-icons/go";
const Card3 = () => {
    return (

        <>
            <section className='w-90 h-60 justify-center flex flex-col px-4 space-y-9 bg-[#181818] rounded-[11px]   backdrop-blur-md
            shadow-xl
            transition-all duration-500
            hover:scale-105'>
                <h1 className='flex  justify-between text-black'>
                    <span className='bg-[#5B5B5B] w-40 py-2 rounded-full flex justify-center items-center'> Applied Fitness</span>
                    <span className='bg-[#5B5B5B] w-8 h-8 flex justify-center items-center rounded-full'><GoArrowUpRight /></span>
                </h1>
                <h1 className='flex flex-col bg-[#303030] px-4 py-2 rounded-[11px]'>
                    <span className='text-[22px]'> Hard-wearing</span>
                    <span className='w-70 text-sm text-[#afafaf]'>
                        Functional fitness workouts target
                        everyday movements, enhancing your
                        ability to perform daily tasks. By using
                        tools like kettlebells,
                    </span>
                </h1>

            </section>

        </>
    )
}

export default Card3
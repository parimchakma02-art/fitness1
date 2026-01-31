import React from 'react'
import { GoArrowUpRight } from "react-icons/go";


const Card1 = () => {
    return (
        <>
            <section className='w-90 h-60 justify-center flex flex-col px-4 space-y-9 bg-[#181818] rounded-[11px] group
             backdrop-blur-md
        shadow-xl
        transition-all duration-500
        hover:bg-[#374225]
        hover:scale-105'>
                <h1 className='flex  justify-between text-black'>

                    <span className='bg-[#5B5B5B] w-40 py-2 rounded-full flex justify-center items-center
                     transition-colors duration-300
            group-hover:bg-[#95F709]'>Care Workouts</span>
                    <span className='bg-[#5B5B5B] w-8 h-8 flex justify-center items-center rounded-full 
                    transition-colors duration-300
            group-hover:bg-[#95F709]'><GoArrowUpRight /></span>
                </h1>
                <h1 className='flex flex-col bg-[#303030] px-4 py-2 rounded-[11px] 
                transition-colors duration-300
          group-hover:bg-[#5A624B]'>
                    <span className='text-2xl'>Balance and Flexibility </span>
                    <span className='w-70 text-sm text-[#afafaf]'>
                        Functional fitness workouts target <br />
                        everyday movements, enhancing your
                        ability to perform daily tasks. By using
                        tools like kettlebells,
                    </span>
                </h1>

            </section>

        </>
    )
}

export default Card1
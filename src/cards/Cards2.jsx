import React from 'react'
import { GoArrowUpRight } from "react-icons/go";

const Cards2 = () => {
  return (
    

            <>
           <section
            className="
        group
        w-90 h-60 flex flex-col justify-center px-4 space-y-9
        bg-[#181818]
        rounded-[11px]
        backdrop-blur-md
        shadow-xl
        transition-all duration-500
        hover:bg-[#374225]
        hover:scale-105
      "
        >
            <h1 className="flex justify-between text-black">
                <span
                    className="
            w-40 py-2 rounded-full flex justify-center items-center
            bg-[#5B5B5B]
            transition-colors duration-300
            group-hover:bg-[#95F709]
          "
                >Care Workouts</span>
                    <span className='bg-[#5B5B5B] w-8 h-8 flex justify-center items-center rounded-full  transition-colors duration-300
            group-hover:bg-[#95F709]'><GoArrowUpRight /></span>
                </h1>
                <h1 className="
          flex flex-col px-4 py-2 rounded-[11px]
          bg-[#303030]
          transition-colors duration-300
          group-hover:bg-[#5A624B]
        ">
                    <span className='text-[22px]'>  Extreme Fitness Sessions for </span>
                    <span className='w-70 text-sm text-[#afafaf]'>
                     
Achieve peace and stability in your life
with our Yoga & Pilates sessions. Through
a range of poses and breathing exercises,
these classes enhance flexibility,
                    </span>
                </h1>

            </section>

        </>
  )
}

export default Cards2
import React from 'react'
import { GoArrowUpRight } from "react-icons/go"

const Card4 = () => {
    return (
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
            <div className="flex justify-between text-black">
                <span
                    className="
            w-20 py-2 rounded-full flex justify-center items-center
            bg-[#5B5B5B]
            transition-colors duration-300
            group-hover:bg-[#95F709]
          "
                >
                    HIT
                </span>

                <span
                    className="
            w-8 h-8 flex justify-center items-center rounded-full
            bg-[#5B5B5B]
            transition-colors duration-300
            group-hover:bg-[#95F709]
          "
                >
                    <GoArrowUpRight />
                </span>
            </div>

            <div
                className="
          flex flex-col px-4 py-2 rounded-[11px]
          bg-[#303030]
          transition-colors duration-300
          group-hover:bg-[#5A624B]
        "
            >
                <span className="text-[22px]">
                    Extreme Fitness Sessions for
                </span>

                <span className="text-sm text-[#afafaf]">
                    Up for the challenge? Our HIT sessions are
                    crafted to torch calories and boost
                    cardiovascular fitness quickly. Through a
                    mix of intense exercises and brief recov
                </span>
            </div>
        </section>
    )
}

export default Card4

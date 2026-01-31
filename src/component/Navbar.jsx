import React from 'react'
import { GoArrowUpRight } from "react-icons/go";
import { Link } from 'react-router-dom';

const Navbar = () => {

 const navitems = [
  { label: "Home", path: "#home" },
  { label: "About", path: "#about" },
  { label: "Service" , path: "#service"},
  { label:"Blogs", path:"#blog" },
  { label: "Programs", path: "#program" }
];
  return (
   <>
    <div className='w-full h-20 bg-[#010101] text-white flex justify-between items-center px-6'>
      <Link  className='flex  items-center gap-2'>
        <div className='w-10 h-10'>
        <img className='w-full h-full object-cover' src=" https://media.istockphoto.com/id/876895654/photo/white-silhouette-strenge-man-on-the-black-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=hYME2EDTQhrqQuZ1LU0ydz2yVfWEsTXIPr3K6Yt_dhY=" alt="" />
      </div>
      <div className='font-medium text-2xl'>
        <span className='text-[#AAF72D]'>FIT</span>GURU
      </div>
      </Link>
      <div  className='flex gap-6'>
        { navitems.map((i, index) => (
          <a key={index} href={i.path}  className="
            relative cursor-pointer
            hover:text-[#AAF72D]
              hover:font-medium

            after:absolute after:left-0 after:bottom-0
            after:h-[0.15rem] after:w-full
            after:bg-[#AAF72D]
            
            after:scale-x-0 after:origin-right
            after:transition-transform after:duration-300 after:ease-out
            hover:after:scale-x-100 hover:after:origin-left
          "> {i.label} </a>

        ))}
        
        
      </div>
       <div
      className="
        group
        border flex items-center gap-2
        w-36 h-10 justify-center
        rounded-full cursor-pointer
        transition-all duration-200 ease-out
        hover:scale-95 after:bg-[#AAF72D] hover:bg-[#AAF72D]  hover:text-[#010101]
      "
    >
      <span className="transition-colors duration-200">
        Contact Us
      </span>

      <GoArrowUpRight
        className="
          transition-transform duration-200 ease-out
          group-hover:translate-x-1 group-hover:-translate-y-1
        "
      />
    </div>
    </div>
  
   </>
  )
}

export default Navbar
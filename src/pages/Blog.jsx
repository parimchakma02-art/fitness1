import React from 'react'
import { FaRegEye } from "react-icons/fa";


const Blog = () => {
  const blogs = [
  {
    id: 1,
    cover:
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&auto=format&fit=crop&q=60",
    title: "The Power of Rest in Your Fitness Journey",
    desc:
      "Learn how quality sleep and proper recovery make your body stronger and reduce the risk of injuries.",
    authorImg:
      "https://plus.unsplash.com/premium_photo-1726736630175-95add5bdfe00?w=600&auto=format&fit=crop&q=60",
    author: "David Charles",
    date: "November 2026",
    reads: "2.30k",
  },
  {
    id: 2,
    cover:
      "https://images.unsplash.com/photo-1611672585731-fa10603fb9e0?w=600&auto=format&fit=crop&q=60",
    title: "Simple Habits for a Healthy Life",
    desc:
      "Learn how quality sleep and proper recovery make your body stronger and reduce the risk of injuries.",
    authorImg:
      "https://images.unsplash.com/photo-1669322779651-5ca89652492e?w=600&auto=format&fit=crop&q=60",
    author: "Smith Johnson",
    date: "September 2026",
    reads: "2.30k",
  },
  {
    id: 3,
    cover:
      "https://images.unsplash.com/photo-1577221084712-45b0445d2b00?w=600&auto=format&fit=crop&q=60",
    title: "Home Workout Guide for Beginners",
    desc:
      "Learn how quality sleep and proper recovery make your body stronger and reduce the risk of injuries.",
    authorImg:
      "https://images.unsplash.com/photo-1579758629938-03607ccdbaba?w=600&auto=format&fit=crop&q=60",
    author: "Elan Smith",
    date: "December 2025",
    reads: "9.30k",
  },
];

  return (
    <>
      <section id='blog' className="bg-[#010101] w-full min-h-screen text-white px-6 ">
        <div className=' w-full h-50 '>
          <h1 className='text-[30px] capitalize italic text-[#AAF72D] font-light'>trainer</h1>
          <h1 className='flex  items-center justify-between'>
            <span className='text-[50px] font-medium'>Our Latest Blog</span>
            <span className='border-[#AAF72D] border  text-[#AAF72D] h-10 w-36 
            flex justify-center items-center rounded-full 
            cursor-pointer
        transition-all duration-200 ease-out
        hover:scale-95 after:bg-white hover:bg-white  hover:text-[#010101]
            '>View All</span>
          </h1>
          <h1 className='text-[#a9a9a9d6]'> Meet our certified specialists, discover their areas of expertise, and choose the one who <br /> aligns perfectly with your goals-from building strength to practicing mindful yoga.</h1>
        </div>
        <div className="w-full h-[80vh] mt-12 flex justify-between ">
  {blogs.map((blog) => (
   <div
  key={blog.id}
  className="bg-[#161616] w-[30vw] h-[70vh] rounded-lg overflow-hidden  backdrop-blur-md hover:scale-105 transition-all duration-500 hover:shadow-lg shrink-0"
>

      <div className="w-full h-70">
        <img
          className="w-full h-full object-cover"
          src={blog.cover}
          alt={blog.title}
        />
      </div>

      <div className="px-4 mt-4 flex flex-col space-y-4 ">
        <h1 className="flex flex-col">
          <span className="text-[18px]">{blog.title}</span>
          <span className="text-[#777777] text-sm">{blog.desc}</span>
        </h1>

        <h1 className="flex justify-between">
          <div className="flex items-center gap-3">
            <img
              className="w-12 h-12 object-cover rounded-full"
              src={blog.authorImg}
              alt={blog.author}
            />
            <h1 className="flex flex-col text-sm">
              <span>{blog.author}</span>
              <span>{blog.date}</span>
            </h1>
          </div>

          <div className="flex items-center gap-2 mt-4">
            <span><FaRegEye /></span>
            <span>{blog.reads} reads</span>
          </div>
        </h1>
      </div>
    </div>
  ))}
</div>

      </section>
    </>
  )
}

export default Blog
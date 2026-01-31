import React from 'react'
import { FaXTwitter } from "react-icons/fa6"
import { Linkedin } from 'lucide-react'
import { FaFacebookF, FaInstagram } from "react-icons/fa"
import { MdMarkEmailUnread } from "react-icons/md";
import { IoMdCall } from "react-icons/io";

const Service = () => {
  return (
    <>
      <section id='service' className="bg-[#010101] w-full min-h-screen relative text-white px-6 py-10">
        <div className='flex w-full h-[70vh]'>

          {/* Background Image */}
          <div className='absolute inset-0 z-0'>
            <img
              className='w-full h-full object-cover opacity-30 '
              src="https://images.unsplash.com/photo-1648634362534-238cb091708b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGZpdG5lc3MlMjBnaXJsfGVufDB8fDB8fHww"
              alt=""
            />
          </div>

          <div className='w-[40%] space-y-8 z-10'>
            <div className='flex items-center gap-2'>
              <div className='w-10 h-10'>
                <img
                  className='w-full h-full object-cover'
                  src="https://media.istockphoto.com/id/876895654/photo/white-silhouette-strenge-man-on-the-black-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=hYME2EDTQhrqQuZ1LU0ydz2yVfWEsTXIPr3K6Yt_dhY="
                  alt=""
                />
              </div>
              <div className='font-medium text-2xl'>
                <span className='text-[#AAF72D]'>FIT</span>GURU
              </div>
            </div>

            <div className='text-[#9c9c9c]'>
              Elevate your fitness with expert virtual trainers- <br /> train anytime, anywhere.
            </div>

            <div className='flex flex-col gap-4'>
              <h1 className='flex items-center gap-4'>
                <span className='p-2 bg-[#232323] text-[#AAF72D] rounded-full'>
                  <MdMarkEmailUnread />
                </span>
                fitzen@gmail.gom
              </h1>

              <h1 className='flex items-center gap-4'>
                <span className='bg-[#232323] p-2 rounded-full text-[#AAF72D]'>
                  <IoMdCall />
                </span>
                <span>+025 154 2155</span>
              </h1>
            </div>
          </div>

          <div className='w-[20%] flex flex-col space-y-5 z-10'>
            <span className='text-[20px] font-medium'>Service</span>
            <span>Home</span>
            <span>Service</span>
            <span>About</span>
            <span>Blog</span>
            <span>Pricing</span>
          </div>

          <div className='w-[20%] flex flex-col space-y-5 z-10'>
            <span className='text-[20px] font-medium'>Page</span>
            <span>Expert Team</span>
            <span>Gallary</span>
            <span>404 Error</span>
            <span>Contact us</span>
            <span>Testimonial</span>
          </div>

          <div className='w-[40%] flex flex-col items-center space-y-7 z-10'>
            <h1 className='text-[20px] font-medium'>Address</h1>
            <h1 className='text-[#acacac]'>
              Address:Apt 12-1200 Callege <br /> Bivd marrced,ac 35545 U.S.A
            </h1>

            <h1 className='mt-20'>
              <span className="flex gap-4 justify-center items-center">
                <FaFacebookF size={20} />
                <FaXTwitter size={20} />
                <FaInstagram size={20} />
                <Linkedin size={22} />
              </span>
            </h1>
          </div>
        </div>

        <div className='border-t border-[#AAF72D] w-full h-20 mt-8 z-10 relative'>
          <h1 className='flex justify-center items-center w-full h-full'>
            © Copyrights service FITZEN.com
          </h1>
        </div>
      </section>
    </>
  )
}

export default Service

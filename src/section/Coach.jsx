import React from 'react'
import { FaFacebookF, FaInstagram } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { Linkedin } from 'lucide-react'

const coaches = [
  {
    id: 1,
    name: "David Johnson",
    role: "Senior Trainer",
    img: "https://images.unsplash.com/photo-1734458211483-f96b64c7c1cd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGZpdG5lc3MlMjBtYW58ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 2,
    name: "James Stephen",
    role: "Senior Trainer",
    img: "https://images.unsplash.com/photo-1669322779651-5ca89652492e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zml0bmVzcyUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: 3,
    name: "David Enham",
    role: "Senior Trainer",
    img: "https://plus.unsplash.com/premium_photo-1664478116490-1ffba1f22fdd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGZpdG5lc3MlMjBtYW58ZW58MHx8MHx8fDA%3D"
  }
]

const Coach = () => {
  return (
    <section className="bg-[#010101] w-full min-h-screen text-white px-6 ">
      
      {/* Header */}
      <div className="w-full h-50">
        <h1 className="text-[30px] capitalize italic text-[#AAF72D] font-light">
          trainer
        </h1>

        <h1 className="flex items-center justify-between">
          <span className="text-[50px] font-medium">
            Achieve Your Fitness Goals with <br /> the Perfect Coach
          </span>
          <span className="border-[#AAF72D] border text-[#AAF72D] h-10 w-36 flex justify-center items-center rounded-full cursor-pointer transition-all duration-200 ease-out hover:scale-95 hover:bg-white hover:text-[#010101]">
            See All
          </span>
        </h1>

        <p className="text-[#a9a9a9d6]">
          Meet our certified specialists, discover their areas of expertise, and choose the one who <br />
          aligns perfectly with your goals—from building strength to practicing mindful yoga.
        </p>
      </div>

      {/* Cards */}
      <div className="w-full h-[80vh] mt-16 flex justify-between  ">
        {coaches.map((coach) => (
          <div
            key={coach.id}
            className="w-[28vw] h-[64vh] mt-4 flex flex-col space-y-4 bg-[#161616] rounded-[12px] overflow-clip backdrop-blur-md
            shadow-xl
            transition-all duration-500
            hover:scale-105"
          >
            <div className="w-full h-74">
              <img
                className="w-full h-full object-cover"
                src={coach.img}
                alt={coach.name}
              />
            </div>

            <div className="flex flex-col items-center space-y-1">
              <span className="text-[20px]">{coach.name}</span>
              <span className="text-[#bcbbbb]">{coach.role}</span>
              <span className="flex gap-4 justify-center items-center">
                <FaFacebookF size={20} />
                <FaXTwitter size={20} />
                <FaInstagram size={20} />
                <Linkedin size={22} />
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Coach

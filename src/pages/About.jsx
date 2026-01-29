import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";



const stats = [
  {
    value: "5k+",
    title: "Current Members",
    desc: "Showing up daily and achieving weekly goals",
  },
  {
    value: "20+",
    title: "Weekly Workouts",
    desc: "Customized workouts for every stage of fitness",
    bordered: true,
  },
  {
    value: "30+",
    title: "Professional Coaches",
    desc: "Qualified professionals focused on your growth",
    rightBorder: true,
  },
  {
    value: "98%",
    title: "Performance Rate",
    desc: "Results that inspire confidence",
  },
];

const About = () => {
     useGSAP(() => {
          gsap.to("#text", {
            ease:"power2.inOut",
            opacity:1,
            y:0,      
            
          })

          gsap.fromTo(".para", {
            opacity:0,
            y:20,

          },{
            opacity:1,
            y:0,
            delay:0.4,
            stagger:0.1,
            
          })
      }, [])
  return (
    <section className="bg-[#010101] w-full min-h-screen text-white ">
      {/* Stats */}
      <div className="px-8 pt-10 ">
        <div className="bg-[#201D1E] w-full h-46 rounded-2xl flex  items-center">
          {stats.map((item, i) => (
            <div
              key={i}
              className={`flex flex-col w-1/4 px-10 h-36 items-center text-center justify-center
                ${item.bordered ? "border-l-2 border-r-2" : ""}
                ${item.rightBorder ? "border-r-2" : ""}
                border-[#9DEB23]`}
            >
              <h2 className="text-[28px] font-semibold">{item.value}</h2>
              <p className="mt-2 text-sm">
                <span className="block font-medium text-[18px]">{item.title}</span>
                <span className="text-[#919090f2] px-5 text-center flex">{item.desc}</span>
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Content Section */}
      <div className=" w-full h-full flex mt-16 space-y-7 px-6 ">


        <div className="w-[55%] h-96 flex flex-col justify-center px-4 space-y-4 para">
          <div className="text-[#94F608] italic  text-[30px] para">About Us</div>
          <div className="text-[46px] leading-14">Supporting Your Journey To <br />
            Better Movement</div>
          <div className="text-[#808080]">We are a team of certified fitness trainers, nutritionists, and wellness <br />
            professionals committed to guiding your journey with evidence-based,
            personalized coaching.</div>

          <div>
            <button className="group flex h-10 w-36 items-center justify-center gap-2 rounded-full bg-[#AAF72D] text-[#010101] transition-all duration-200 ease-out hover:scale-95 hover:bg-[#010101] hover:text-white hover:border">
              <span> Learn More</span>
              <GoArrowUpRight className="transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
        <div className="w-[45%] h-96 rounded-xl flex items-center justify-center
         backdrop-blur-md
            shadow-xl
            transition-all duration-500
            hover:scale-105
        ">
          <img
            src="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zml0bmVzc3xlbnwwfHwwfHx8MA%3D%3D"
            alt="About section visual"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default About;

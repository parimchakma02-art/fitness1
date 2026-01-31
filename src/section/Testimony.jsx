import React from "react";
import { Star } from "lucide-react";

const Testimony = () => {
  // Array of testimonial data
  const testimonials = [
    {
      img: "https://images.unsplash.com/photo-1584863265045-f9d10ca7fa61?w=600&auto=format&fit=crop&q=60",
      location: "Johannesburg, RSA",
      name: "Marcy Cannon",
      review:
        "I successfully dropped 15 kg in just 3 months, and my energy levels skyrocketed. The change I went through was amazing!",
    },
    {
      img: "https://images.unsplash.com/photo-1761839259494-71caddcdd6b3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNnx8fGVufDB8fHx8fA%3D%3D",
      location: "Cape Town, RSA",
      name: "Lerato Mokoena",
      review:
        "Joining this program completely transformed my lifestyle. I feel healthier and more energetic than ever.",
    },
    {
      img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=600&auto=format&fit=crop&q=60",
      location: "Durban, RSA",
      name: "Sipho Nkosi",
      review:
        "The results were incredible! I lost weight, gained strength, and finally feel confident in my own skin.",
    }    
    
  ];

  return (
    <section className="bg-[#010101] w-full min-h-screen text-white px-6 py-10">
      {/* Header */}
      <div className="flex flex-col justify-center items-center text-center mb-12">
        <h1 className="text-[30px] capitalize italic text-[#AAF72D] font-light">
          Testimonial
        </h1>
        <h2 className="text-[50px] font-medium">What do our members say?</h2>
        <p className="text-[#a9a9a9d6] max-w-2xl">
          Hear real stories from our members and the transformations they've
          achieved with <br />
          us — a true reflection of our commitment to you.
        </p>
      </div>

      {/* Testimonial Cards */}
      <div className="flex justify-center items-center ">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="relative w-[30vw] h-[40vh] rounded-xl overflow-hidden mx-4 border-0"
          >
            {/* Bottom Dark Background */}
            <div className="absolute bottom-0 left-0 w-full h-[60%] bg-[#141414] hover:bg-[#191D15] z-0" />

            {/* Bottom Gradient Line */}
            <div className="absolute bottom-0 left-0 w-full h-[2px] z-10 gradient-border" />

            {/* Content */}
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-start pt-6 px-6 text-center">
              {/* Avatar */}
              <div className="w-20 h-20 rounded-full overflow-hidden mb-1">
                <img src={t.img} alt={t.name} className="w-full h-full object-cover" />
              </div>

              {/* Stars */}
              <div className="flex gap-1">
                {Array(5).fill(0).map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400" />
                ))}
              </div>

              {/* Text */}
              <div className="flex flex-col items-center gap-2 mt-2">
                <h1 className="text-base font-medium leading-tight">
                  <span className="block">{t.location}</span>
                  <span className="block text-[#919090] text-sm">{t.name}</span>
                </h1>
                <p className="text-sm text-gray-300 max-w-xs">{t.review}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimony;

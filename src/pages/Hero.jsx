import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { GoArrowUpRight } from "react-icons/go";
import { FaPlayCircle } from "react-icons/fa";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(SplitText);


const Hero = () => {
useGSAP(() => {
    // Split heading into characters
    const charSplit = new SplitText(".split", {
      type: "chars",
    });

    // Split paragraph into words
    const wordSplit = new SplitText(".words", {
      type: "words",
    });

    // Paragraph animation
    gsap.from(wordSplit.words, {
      y: 40,
      opacity: 0,
      duration: 1,
      stagger: 0.05,
      ease: "power2.out",
    });

    // Heading animation
    gsap.from(charSplit.chars, {
      y: 100,
      opacity: 0,
      duration: 1.4,
      stagger: 0.04,
      ease: "power3.out",
    });

    // Cleanup
    return () => {
      charSplit.revert();
      wordSplit.revert();
    };
  }, []);
  return (
    <section id="hero" className="relative h-screen w-full">
      {/* Background image */}
      <img
        className="absolute inset-0 h-full w-full object-cover"
        src="https://images.unsplash.com/photo-1550345332-09e3ac987658?w=600&auto=format&fit=crop&q=60"
        alt="Fitness training woman"
      />

      {/* Overlay content */}
      <div className="relative z-20 flex h-full flex-col justify-center gap-7 px-6 text-white">
        <div className="uppercase font-medium text-[90px] leading-[1.1]">
          <h1 className="split">transf0rmation</h1>
          <h1 className="split">startsn<span>0</span>w</h1>
        </div>

        <p className="max-w-[50vw] text-[20px] words">
          We provide state-of-the-art facilities, top-notch trainers, and fun
          classes that keep you energized every day. Start your fitness journey
          with us now!
        </p>

        <div className="flex items-center gap-4 ">
          {/* Primary CTA */}
          <button className="group flex h-10 w-36 items-center justify-center gap-2 rounded-full bg-[#AAF72D] text-[#010101] transition hover:scale-95 hover:bg-black hover:text-white">
            <span>Start Training</span>
            <GoArrowUpRight className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </button>

          {/* Secondary CTA */}
          <button className="group flex h-10 w-36 items-center justify-center gap-2 rounded-full border transition hover:scale-95">
            <FaPlayCircle />
            Watch Videos
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

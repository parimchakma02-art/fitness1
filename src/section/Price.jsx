import React from "react";
import { CircleCheckBig } from "lucide-react";

const plans = [
  {
    title: "Basic Plan",
    price: "$32",
    description:
      "Perfect for beginners who want to explore guided workouts and track basic progress.",
    features: [
      "Gym entry during standard hours",
      "Trainer on duty for guidance",
      "Personalized small-group coaching",
      "Customized training program",
      "Expert trainer support",
    ],
  },
  {
    title: "Standard Plan",
    price: "$90",
    description:
      "Get matched with your personal trainer and track your results with detailed analytics.",
    features: [
      "Full access around the clock",
      "Mini group sessions running until 5:00 PM",
      "Personalized small-group coaching (3 people)",
      "Membership active without interruption",
      "Personalized Training Program",
      "Expert Trainer Guidance",
    ],
  },
  {
    title: "Premium Plan",
    price: "$120",
    description:
      "Designed for those who want full customization and real-time coaching support.",
    features: [
      "Full access around the clock",
      "Mini group sessions running until 5:00 PM",
      "Personalized small-group coaching",
      "Personalized Training Program",
      "Expert Trainer Guidance",
    ],
  },
];

const Price = () => {
  return (
    <section className="bg-[#010101] w-full min-h-screen text-white px-6 py-10">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-[30px] capitalize italic text-[#AAF72D] font-light">
          Pricing
        </h1>
        <h2 className="text-[50px] font-medium">
          Select Your Workout Program
        </h2>
        <p className="text-[#a9a9a9d6] max-w-2xl">
          Browse our certified experts and choose the one that matches your
          goals, from strength training to yoga.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="w-full flex gap-6">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="
              bg-[#19190B] w-[30vw] min-h-[78vh] p-6
              flex flex-col justify-between
              rounded-xl
              border border-transparent
              group
              hover:border-[#94F608]
              hover:scale-105
              transition-all duration-300
            "
          >
            {/* Header */}
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">{plan.title}</h3>

              <h4 className="text-3xl font-semibold">
                <span className="text-4xl text-[#94F608]">
                  {plan.price}
                </span>{" "}
                <span className="text-base font-normal">per month</span>
              </h4>

              <p className="text-sm text-gray-300">
                {plan.description}
              </p>
            </div>

            {/* Features */}
            <ul className="space-y-3 text-sm text-gray-200 mt-6">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <CircleCheckBig size={18} className="text-[#94F608]" />
                  {feature}
                </li>
              ))}
            </ul>

            {/* Button */}
            <button
              className="
                mt-8 w-full py-3
                bg-[#171A09]
                border border-[#94F608]
                text-[#94F608]
                font-semibold rounded-full
                group-hover:bg-[#94F608]
                group-hover:text-black
                transition-all duration-300
              "
            >
              See Plan
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Price;

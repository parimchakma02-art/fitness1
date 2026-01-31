

import React from "react";

/* Gallery Data */
const galleryItems = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1",
    title: "Strength Training",
    description: "High-intensity strength sessions with expert coaches",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5",
    title: "Yoga Flow",
    description: "Mindful movement and balance training",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1595078475328-1ab05d0a6a0e",
    title: "Group Workout",
    description: "Energy-packed group fitness events",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1628884879718-60dd217d5c9b",
    title: "Personal Training",
    description: "One-on-one customized coaching",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5",
    title: "Fitness Events",
    description: "Special events and fitness challenges",
  },
];

/* Gallery Card Component */
const GalleryCard = ({ src, title, description, className }) => {
  return (
    <div
      className={`relative overflow-hidden rounded-xl group cursor-pointer ${className}`}
    >
      {/* Image */}
      <img
        src={src}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Content */}
      <div className="absolute bottom-4 left-4 right-4 text-white translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-200">{description}</p>
      </div>
    </div>
  );
};

const Gallery = () => {
  return (
    <section className="bg-[#010101] w-full min-h-screen text-white px-6 py-10">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl capitalize italic text-[#AAF72D] font-light">
          Gallery
        </h1>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mt-2">
          <span className="text-3xl md:text-5xl font-medium">
            Our Event and Photo Gallery
          </span>

          <span className="border-[#AAF72D] border text-[#AAF72D] h-10 w-36 flex justify-center items-center rounded-full cursor-pointer transition-all duration-200 hover:scale-95 hover:bg-[#AAF72D] hover:text-[#010101] shrink-0">
            View All
          </span>
        </div>

        <p className="text-[#a9a9a9] mt-3 max-w-xl">
          Browse our certified experts and choose the one that matches your goals,
          from strength training to yoga.
        </p>
      </div>

      {/* Gallery */}
      <div className="flex flex-col gap-4">
        {/* Row 1 */}
        <div className="flex flex-col md:flex-row gap-4">
          <GalleryCard
            src={galleryItems[0].src}
            title={galleryItems[0].title}
            description={galleryItems[0].description}
            className="w-full md:w-[58%] h-80"
          />
          <GalleryCard
            src={galleryItems[1].src}
            title={galleryItems[1].title}
            description={galleryItems[1].description}
            className="w-full md:w-[42%] h-80"
          />
        </div>

        {/* Row 2 */}
        <div className="flex flex-col md:flex-row gap-4">
          <GalleryCard
            src={galleryItems[2].src}
            title={galleryItems[2].title}
            description={galleryItems[2].description}
            className="w-full md:w-[40%] h-60"
          />
          <GalleryCard
            src={galleryItems[3].src}
            title={galleryItems[3].title}
            description={galleryItems[3].description}
            className="w-full md:w-[28%] h-60"
          />
          <GalleryCard
            src={galleryItems[4].src}
            title={galleryItems[4].title}
            description={galleryItems[4].description}
            className="w-full md:w-[32%] h-60"
          />
        </div>
      </div>
    </section>
  );
};

export default Gallery;

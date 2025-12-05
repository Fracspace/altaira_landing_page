import React from "react";
import { useState } from "react";

import adventurePark from "../../assets/adv.webp";
import cloudWalkway from "../../assets/cloud.jpg";
import infinityPool from "../../assets/pool.webp";
import restaurantImg from "../../assets/restaurant.webp";
import spaImg from "../../assets/spa.webp";
import villaImg from "../../assets/villa.webp";

function Experiences() {
  const [count, setCount] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const galleryItems = [
    {
      id: 1,
      image: infinityPool,
      title: "Infinity Pool",
      description: "Float above the forest in a pool that meets the horizon",
      gradient: "from-blue-500 to-purple-600",
    },
    {
      id: 2,
      image: adventurePark,
      title: "Adventure Park",
      description:
        "Glide above the canopy on thrilling ziplines, conquer the trails on ATVs, or trek through mist-laced mountain paths that lead to breathtaking valley views",
      gradient: "from-cyan-500 to-blue-600",
    },
    {
      id: 3,
      image: villaImg,
      title: "Residences",
      description:
        "At Altaira, your villa isn’t just a stay — it’s a private sanctuary suspended above the valley",
      gradient: "from-green-500 to-teal-600",
    },
    {
      id: 4,
      image: cloudWalkway,
      title: "Cloudwalkway",
      description:
        "The Cloud Walkways — elevated paths that weave through misty ridges — let you literally walk among the clouds",
      gradient: "from-orange-500 to-red-600",
    },
    {
      id: 5,
      image: restaurantImg,
      title: "Restaurant",
      description: "The Hilltop Restaurant — Dining Above the Clouds",
      gradient: "from-violet-500 to-purple-600",
    },
    {
      id: 6,
      image: spaImg,
      title: "RainForest Spa",
      description:
        "At the heart of Altaira lies the Rainforest Spa, a sanctuary where mist, mineral water, and mountain air come together to revive your senses",
      gradient: "from-indigo-500 to-pink-600",
    },
  ];

  return (
    <div>
      <div className="ipadProPadding bg-black p-4 sm:p-8 xl:min-h-screen">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h1 className="font-montserrat mb-4 text-2xl font-semibold text-white sm:text-3xl">
              See What You’re Investing In
            </h1>
            <p className="text-lg text-gray-300">
              <em className="text-[#D4AF37]">
                Sky villas, Exclusive wellness Resort
              </em>
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {galleryItems.map((item, index) => {
              const isHovered = hoveredIndex === index;

              return (
                <div
                  key={item.id}
                  className="group relative transform cursor-pointer overflow-hidden rounded-2xl shadow-2xl transition-all duration-500 hover:scale-105"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  style={{ aspectRatio: "4/3" }}
                >
                  {/* Image */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  {/* Content Overlay */}
                  <div
                    className={`absolute inset-0 flex transform flex-col items-center justify-center p-6 transition-all duration-500 ${
                      isHovered
                        ? "translate-y-0 opacity-100"
                        : "translate-y-8 opacity-0"
                    }`}
                  >
                    <h3 className="font-montserrat mb-3 text-center text-2xl font-bold text-white sm:text-3xl">
                      {item.title}
                    </h3>

                    <p className="font-poppins text-center text-sm text-white/90 sm:text-base">
                      {item.description}
                    </p>

                    {/* 
                    <div className="mt-6 flex gap-3">
                      <button className="bg-white text-gray-900 px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-100 transition-colors">
                        Explore
                      </button>
                      <button className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-white/30 transition-colors">
                        Details
                      </button>
                    </div> */}
                  </div>

                  {/* Bottom Label (visible when not hovered) */}
                  <div
                    className={`absolute right-0 bottom-0 left-0 bg-gradient-to-t from-black/80 to-transparent p-4 transition-opacity duration-500 ${
                      isHovered ? "opacity-0" : "opacity-100"
                    }`}
                  >
                    <h3 className="font-montserrat text-lg font-semibold text-white">
                      {item.title}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experiences;

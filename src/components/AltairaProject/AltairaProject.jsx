import React from "react";

import altairaImg from "../../assets/altaira.webp";
import villaImg from "../../assets/Villa2.webp";
import restaurantImg from "../../assets/restaurant.webp";
import altairaResortImg from "../../assets/resort2.jpg";

function AltairaProject() {
  return (
    <div>
      <div className="min-h-screen bg-black px-4 py-13 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <h1 className="mb-16 text-center font-serif text-5xl font-semibold text-white">
            The Altaira Project
          </h1>

          <div className="grid items-start gap-12 lg:grid-cols-2">
            {/* Left Column - Text Content */}
            <div className="space-y-8">
              <div>
                <h2 className="mb-6 text-2xl font-semibold text-white">
                  26 Acres of Elevated Living - Key Highlights:
                </h2>

                <ul className="space-y-8">
                  <li className="flex items-start">
                    <span className="mt-1 mr-3 text-xl text-white">•</span>
                    <span className="text-xl text-white">
                      <strong>26-acre luxury highland escape</strong> surrounded
                      by mist and nature.
                    </span>
                  </li>

                  <li className="flex items-start text-white">
                    <span className="mt-1 mr-3">•</span>
                    <span className="text-xl">
                      <strong>40 private villas</strong> with boutique resort
                      amenities.
                    </span>
                  </li>

                  <li className="flex items-start text-white">
                    <span className="mt-1 mr-3">•</span>
                    <span className="text-xl">
                      <strong>Rainforest spa</strong>, waterfalls & cloud
                      walkways within the property.
                    </span>
                  </li>

                  <li className="flex items-start text-white">
                    <span className="mt-1 mr-3">•</span>
                    <span className="text-xl">
                      <strong>Tea-estate trails</strong> and curated nature
                      experiences.
                    </span>
                  </li>

                  <li className="flex items-start text-white">
                    <span className="mt-1 mr-3">•</span>
                    <span className="text-xl">
                      A blend of serenity, sophistication and elevated
                      hospitality.
                    </span>
                  </li>

                  <li className="flex items-start text-white">
                    <span className="mr-3 text-xl">•</span>
                    <span className="text-xl">
                      <em>Altaira - where luxury rises with the hills.</em>
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column - Circular Images */}
            <div className="relative h-[600px]">
              {/* Top Left Circle */}
              <div className="absolute top-0 left-0 h-56 w-56 overflow-hidden rounded-full shadow-2xl">
                <img
                  src={villaImg}
                  alt="Altaira Resort"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Middle Left Circle */}
              <div className="absolute top-70 left-0 h-52 w-52 overflow-hidden rounded-b-full shadow-2xl">
                <img
                  src={altairaImg}
                  alt="Altaira Restaurant"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Right Large Oval */}
              <div className="absolute top-12 right-0 h-[500px] w-72 overflow-hidden rounded-full shadow-2xl">
                <img
                  src={restaurantImg}
                  alt="Altaira Resort aerial view"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AltairaProject;

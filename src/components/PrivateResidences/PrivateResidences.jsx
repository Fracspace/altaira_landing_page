import React from "react";
import { MoveRight } from "lucide-react";
import luxuryResortResidences from "../../assets/PrivateResidences/luxuryResortResidences.png";
import optionalRental from "../../assets/PrivateResidences/optionalRental.png";
import lifeStyleOwnership from "../../assets/PrivateResidences/lifeStyleOwnership.png";
import privateTourismLocation from "../../assets/PrivateResidences/privateTourismLocation.png";
import residence from "../../assets/PrivateResidences/residence.png";
const PrivateResidences = () => {
  return (
    <div id="residences">
      <div className="py-10">
        <div className="mr-10 ml-10">
          <div className="mx-auto max-w-7xl text-white">
            <div className="flex flex-col items-center gap-5">
              <h2 className="font-montserrat text-center text-2xl font-semibold md:text-3xl">
                Private Residences at Altaira Resort
              </h2>
              <p className="font-poppins text-center text-lg md:text-xl">
                Selected investors may have the opportunity to own private
                villas or residences within the Altaira resort community.
              </p>
              <hr className="w-full max-w-md border-1 border-[#D4AF37]/60" />
            </div>
            <div className="flex w-full flex-col items-center">
              <div className="mx-auto mt-16 flex max-w-5xl flex-col gap-x-5 gap-y-10">
                <div className="flex flex-col items-center justify-between gap-x-15 gap-y-10 md:ml-10 md:flex-row">
                  <div className="flex max-w-md flex-col gap-2">
                    <div className="flex items-center gap-4">
                      <img
                        src={luxuryResortResidences}
                        alt="Luxury Resort Residences"
                        className="h-9 w-9"
                      />
                      <h2 className="font-poppins text-xl font-semibold text-[#D4AF37]">
                        Luxury Resort Residences
                      </h2>
                    </div>
                    <div>
                      <p className="font-poppins text-base">
                        Own a thoughtfully designed villa or residence within
                        the Altaira resort environment.
                      </p>
                    </div>
                  </div>
                  <div className="flex max-w-md flex-col gap-2">
                    <div className="flex items-center gap-4">
                      <img
                        src={optionalRental}
                        alt="Optional Rental"
                        className="h-9 w-9"
                      />
                      <h2 className="font-poppins text-xl font-semibold text-[#D4AF37]">
                        Optional Rental Potential
                      </h2>
                    </div>
                    <div>
                      <p className="font-poppins text-base">
                        Owners may offer their residence for guest stays through
                        resort management.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-between gap-x-15 gap-y-10 md:ml-10 md:flex-row">
                  <div className="flex max-w-md flex-col gap-2">
                    <div className="flex items-center gap-4">
                      <img
                        src={lifeStyleOwnership}
                        alt="Life Style Ownership"
                        className="h-9 w-9"
                      />
                      <h2 className="font-poppins text-xl font-semibold text-[#D4AF37]">
                        Lifestyle Ownership
                      </h2>
                    </div>
                    <div>
                      <p className="font-poppins text-base">
                        Enjoy a luxury resort lifestyle while owning a premium
                        property.
                      </p>
                    </div>
                  </div>
                  <div className="flex max-w-md flex-col gap-2">
                    <div className="flex items-center gap-4">
                      <img
                        src={privateTourismLocation}
                        alt="Private Tourism Location"
                        className="h-9 w-9"
                      />
                      <h2 className="font-poppins text-xl font-semibold text-[#D4AF37]">
                        Private Tourism Location
                      </h2>
                    </div>
                    <div>
                      <p className="font-poppins text-base">
                        Located in one of Sri Lanka’s emerging tourism
                        destinations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <div className="relative">
                  <img
                    src={residence}
                    alt="Residence"
                    className="h-[40vh] w-full object-cover md:h-[40vh] lg:h-auto"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-10 p-4 text-center">
                    <h3 className="font-poppins text-xl font-medium text-white md:text-2xl">
                      A Rare Opportunity to Own a Residence at Altaira
                    </h3>
                    <button
                      onClick={() =>
                        document
                          .getElementById("herosection")
                          ?.scrollIntoView({ behavior: "smooth" })
                      }
                      className="font-montserrat cursor-pointer rounded-md bg-[#D4AF37] px-4 py-2 text-base text-white transition-transform duration-300 hover:scale-105"
                    >
                      Know More <MoveRight className="ml-1 inline" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivateResidences;

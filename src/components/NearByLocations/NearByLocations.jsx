import React from "react";
import Airport from "../../assets/NearByLocation/Airport.png";
import NearByLocationsImg from "../../assets/NearByLocation/NearByLocationsImg.png";
import kitulga from "../../assets/NearByLocation/kitulga.png";
import kandy from "../../assets/NearByLocation/kandy.png";
import SamanlaReserve from "../../assets/NearByLocation/SamanlaReserve.png";

const NearByLocations = () => {
  return (
    <div className="h-auto p-10">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-10">
        <img
          src={NearByLocationsImg}
          alt="Near by locations img"
          className="hidden h-[70vh] w-full rounded-md object-cover md:w-full lg:block lg:w-[50vw]"
        />
        <div>
          <h2 className="font-montserrat mb-6 text-center text-xl font-bold md:text-2xl">
            Why Altaira, Bulathkohupitiya?
          </h2>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            <div className="flex flex-col items-center text-center">
              <img src={Airport} alt="Airport" className="h-14 w-14" />
              <h2 className="font-montserrat mt-2 text-lg">1.5 Hours</h2>
              <h2 className="font-poppins mt-2 text-xs md:text-lg">
                Colombo International Airport
              </h2>
            </div>

            <div className="flex flex-col items-center text-center">
              <img src={kandy} alt="Kandy" className="h-14 w-14" />
              <h2 className="font-montserrat mt-2 text-lg">1 Hour</h2>
              <h2 className="font-poppins mt-2 text-xs md:text-lg">
                Kandy (Cultural Capital) & Colombo City
              </h2>
            </div>

            <div className="flex flex-col items-center text-center">
              <img src={kitulga} alt="Kitulga" className="h-14 w-14" />
              <h2 className="font-montserrat mt-2 text-lg">30 Minutes</h2>
              <h2 className="font-poppins mt-2 text-xs md:text-lg">
                Kitulgala - Adventure Capital of Sri Lanka
              </h2>
            </div>

            <div className="flex flex-col items-center text-center">
              <img
                src={SamanlaReserve}
                alt="Samanla Reserve"
                className="h-14 w-14"
              />
              <h2 className="font-montserrat mt-2 text-lg">20 Minutes</h2>
              <h2 className="font-poppins mt-2 text-xs md:text-lg">
                Samanala Nature Reserve
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NearByLocations;

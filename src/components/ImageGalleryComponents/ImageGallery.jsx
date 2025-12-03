import React from "react";
import mainImg from "../../assets/ImageGallery/mainImg.png";
import img1 from "../../assets/ImageGallery/img1.png";
import img2 from "../../assets/ImageGallery/img2.png";
import img5 from "../../assets/ImageGallery/img5.png";
import img4 from "../../assets/ImageGallery/img4.jpeg";

const ImageGallery = () => {
  return (
    <div className="px-4 px-6 py-8 lg:px-10">
      <h2 className="font-montserrat mb-6 flex items-center justify-center text-3xl font-bold">
        Discover Altaira
      </h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        <div className="order-1 flex flex-col gap-4">
          <img
            src={img1}
            alt="Img1"
            className="h-48 w-full rounded-md object-cover md:h-64 lg:h-72"
          />
          <img
            src={img2}
            alt="Img2"
            className="h-48 w-full rounded-md object-cover md:h-64 lg:h-72"
          />
        </div>
        <div className="order-2 flex md:order-3 lg:order-2">
          <img
            src={mainImg}
            alt="mainImg"
            className="h-48 w-full rounded-md object-cover md:h-64 lg:h-auto"
          />
        </div>
        <div className="order-3 flex flex-col gap-4 md:order-2 lg:order-3">
          <img
            src={img5}
            alt="Img5"
            className="h-48 w-full rounded-md object-cover sm:h-56 md:h-64 lg:h-72"
          />
          <img
            src={img4}
            alt="Img4"
            className="h-48 w-full rounded-md object-cover sm:h-56 md:h-64 lg:h-72"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;

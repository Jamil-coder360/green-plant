import React from "react";
import hero from "../assets/hero.png";
import Image from "next/image";
// console.log(h);
const Hero = () => {
  const BGImage = {
    backgroundImage: `url(${hero.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div style={BGImage} className="h-screen w-full">
      <div className="flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-9.25">
          Nature's Beauty Delivered to You
        </h1>
        <p className="text-lg text-white mb-9.25 max-w-[787px] font-medium ">
          Nature's beauty is just a click away with our online flower and plant
          shop. We offer a wide variety of flowers that will bring a touch of
          nature to your home!
        </p>

        <div className="flex space-x-4">
          <button className="bg-[#285A43] rounded-sm text-white px-12.25 py-3  text-lg font-medium hover:bg-green-600 transition duration-300">
            Book Now
          </button>
          <button className="bg-transparent rounded-sm border border-white text-white px-12.25 py-3  text-lg font-medium hover:bg-green-600 transition duration-300 flex space-x-1">
            <Image
              src="/hero-play.svg"
              width={24}
              height={24}
              alt="Picture of the author"
            />
            Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

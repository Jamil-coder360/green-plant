import React from "react";
import Image from "next/image";
import testbg from "../../assets/testbg.png";

const bgImage = {
  backgroundImage: `url(${testbg.src})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

const TestimonialCard = ({ testimonial }) => {
  const { name, image, review } = testimonial;

  return (
    <div
      style={bgImage}
      className="w-[360px] h-[330px] rounded-sm pt-10 pl-11 pr-18.5"
    >
      <div className="flex items-center gap-5">
        <div>
          <Image src={image} alt={name} />
        </div>

        <h4 className="text-[#285A43] text-[20px] font-lato font-black leading-[140%]">
          {name}
        </h4>
      </div>

      <p className="text-[#285A43] text-[16px] font-lato font-normal leading-[140%] mt-7.5">
        "{review}"
      </p>
    </div>
  );
};

export default TestimonialCard;
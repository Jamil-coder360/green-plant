import React from "react";
import Image from "next/image";
import { SlCalender } from "react-icons/sl";

const BlogCard = ({ blog }) => {
  const { image, title, description, date } = blog;

  return (
    <div className="w-full max-w-[360px]">
      <div className="overflow-hidden rounded-lg">
        <Image
          src={image}
          alt={title}
          className="w-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      <h2 className="pt-4 pb-1 text-[#285A43] text-[20px] font-lato font-black leading-[140%]">
        {title}
      </h2>

      <p className="text-[#121212] text-[16px] font-raleway leading-[150%] font-medium">
        {description}
      </p>
      <div>

      <div className="flex items-center gap-2 mt-5 text-[#285A43]">
        <SlCalender />

        <p className="text-[14px] font-medium">
          {date}
        </p>
      </div>
      
      </div>

    </div>
  );
};

export default BlogCard;
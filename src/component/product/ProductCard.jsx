import Image from 'next/image';
import React from 'react';
import Heart from '../Icons/heart';
import Button from '../global/Button';

const ProductCard = ({ plant }) => {
  const imageUrl =
    plant?.default_image?.regular_url ||
    'https://via.placeholder.com/300x250?text=No+Image';

  return (
    <div className="w-full shadow-lg rounded-lg relative overflow-hidden bg-white">
      <div className="w-full h-62.5 overflow-hidden relative">
   <Image
  src={
    plant?.default_image?.regular_url &&
    !plant.default_image.regular_url.includes("upgrade_access")
      ? plant.default_image.regular_url
      : "/placeholder.png"
  }
  alt={plant?.common_name || "Plant"}
  fill
  className="object-cover"
/>
      </div>

      <div className="absolute top-4 right-4 z-10 bg-white rounded-full p-2">
        <Heart />
      </div>

      <div className="flex items-center justify-between px-6 py-4">
        <div>
          <h3 className="text-[16px] text-[#337A5B] font-black leading-[140%]">
            {plant?.common_name || 'Unknown Plant'}
          </h3>

          <p className="pt-1 text-[#121212] text-[12px] leading-[140%]">
            {plant?.scientific_name || 'Indoor Plant'}
          </p>
        </div>

        <Button className="px-4 py-2 text-sm">Buy Now</Button>
      </div>
    </div>
  );
};

export default ProductCard;
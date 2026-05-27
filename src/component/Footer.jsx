import Image from 'next/legacy/image';
import React from 'react'
import footer from '../assets/footer.png';
import { BriefcaseConveyorBelt } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
const Footer = () => {
  return (
    <footer>
      <div className="py-19"
        style={{
          backgroundImage: `url('${footer.src}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          textAlign: "center",
        }}
      >
        <h3 className="text-white font-lato font-black text-[32px] leading-[140%]">Feel free to contact us</h3>

        <div className="flex items-center justify-center space-x-18 pt-9">
          
          <span className="flex items-center justify-center p-4 border border-white rounded-full">
           <FaInstagram />
          </span>
          <span className="flex items-center justify-center p-4 border border-white rounded-full">
            <FaFacebookF />
          </span>
          <span className="flex items-center justify-center p-4 border border-white rounded-full">
            <FaTwitter />
          </span>
        </div>
        <div className="pt-9">
          <ul className="flex items-center justify-center gap-15">
            <li  className="font-railway font-bold text-[16px] leading-[150%]"><a href="#">Home</a></li>
            <li className="font-railway font-bold text-[16px] leading-[150%]"><a href="#">About Us</a></li>
            <li  className="font-railway font-bold text-[16px] leading-[150%]"><a href="#">Plants</a></li>
            <li  className="font-railway font-bold text-[16px] leading-[150%]"><a href="#">Delivery</a></li>
            <li  className="font-railway font-bold text-[16px] leading-[150%]"><a href="#">Blog</a></li>
            <li  className="font-railway font-bold text-[16px] leading-[150%]"><a href="#">Contact Us</a></li>
          </ul>
        </div>
      </div>
      <div className="bg-black text-center">

        <p className="font-railway font-bold text-[16px] leading-[150%] py-2">
         Copyright © 2024 Lush. All rights reserved. Dennis Nzioki DNX 
        </p>
      </div>
    </footer>
  )
}

export default Footer
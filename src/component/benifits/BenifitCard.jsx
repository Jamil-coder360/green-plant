import React from 'react'
// import Image from 'next/image';
// import React from 'react'
// import About_1 from '../Icons/about_1';

const BenifitCard = ({ icon: Icon, title, description }) => {
  return (


    <div className="group hover:bg-[#337A5B] bg-white  w-90 h-95 text-black pl-12.5 pr-10 pt-8  shadow-2xl">
        <div>

            <Icon  stroke="white" fill="white" className="stroke-[#285A43] fill-[#285A43] group-hover:stroke-white group-hover:fill-white"/>

   
        </div>
        <h3 className="text-[#285A43] group-hover:text-white text-[20px] font-lato font-black leading-[140%] tracking-[4%] pt-[25.72px]">{title}</h3>
        <p className="text-[#121212] group-hover:text-white text-[16px] leading-normal font-normal font-railway pt-5">{description}</p>

    </div>
  )
}



export default BenifitCard
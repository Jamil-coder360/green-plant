import Image from 'next/image';
import React from 'react'
import benifit from "../../assets/benifit.png"
import About_1 from '../Icons/about_1';
import About_2 from '../Icons/about_2';
import About_3 from '../Icons/about_3';
import AboutCard from '../about/AboutCard';

const Benifits = () => {

   const aboutCardData = [
  {
    id: 1,
    icon: About_1,
    title: "Outdoor Plants",
    description:
      "Bring the beauty of nature to your outdoor spaces with our wide selection of outdoor plants.",
  },
  {
    id: 2,
    icon: About_2,
    title: "Indoor Plants",
    description:
      "Transform your living space with our carefully curated collection of indoor plants for every room.",
  },
  {
    id: 3,
    icon: About_3,
    title: "Rare Collections",
    description:
      "Discover our exclusive range of rare and exotic plants sourced from around the world.",
  },
];

  return (
   <section className="py-30">
    <div className="container mx-auto">
        <div className="grid grid-cols-2 ">
          <div className="h-[780p]">
       
            <img src={benifit} alt="Benefit Image" />
          </div>
        
                <div className="grid grid-cols-1 md:grid-cols-2">
                    {aboutCardData.map((card) => (
                        <AboutCard key={card.id} icon={card.icon} title={card.title} description={card.description} />
                    ))}

                </div>
        </div>
    </div>
   </section>
  )
}

export default Benifits
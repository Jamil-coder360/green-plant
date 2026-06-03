import React from 'react'
import AboutCard from './AboutCard';
import About_1 from '../Icons/about_1';
import About_2 from '../Icons/about_2';
import About_3 from '../Icons/about_3';

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
const About = () => {
  return (
    <section className="py-31">
        <div className="container mx-auto">
            <div>
                <div className="flex  items-center justify-between gap-[19]">
                    <h2 className="text-[#285A43] text-[36px] font-normal leading-[140%] font-lato tracking-[4%] max-w-[476px]">We Help choose the most suitable plants for you</h2>
                    <p className="text-[#121212] text-[18px] font-railway font-medium max-w-[648px] ">Our selection includes a wide variety of flowers, from classic roses to exotic orchids, as well as a variety of lush indoor and outdoor plants and also offer unique floral arrangements that are perfect for any occasion, whether you're looking to brighten up your home or send a thoughtful gift. </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-20 mt-24">
                    {aboutCardData.map((card) => (
                        <AboutCard key={card.id} icon={card.icon} title={card.title} description={card.description} />
                    ))}

                </div>
                
            </div>
        </div>
    </section>
  )
}

export default About
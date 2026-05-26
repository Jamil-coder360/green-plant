import React from 'react'
import hero from "../assets/hero.png"
// console.log(h);
const Hero = () => {
    const BGImage={
        backgroundImage: `url(${hero.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    }
  return (
    <div style={BGImage} className="h-screen w-full">
        <div className="flex flex-col items-center justify-center h-full text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
               Nature's Beauty Delivered to You
            </h1>
            <p className="text-lg md:text-2xl text-white mb-8 max-w-2xl">
               Nature's beauty is just a click away with our online flower and plant shop. We offer a wide variety of flowers that will bring a touch of nature to your home!
            </p>
            {/* <a
                href="#contact"
                className="px-8 py-4 bg-gold text-white rounded-md text-lg font-medium hover:bg-gold/90 transition-all"
            >
                Get a Quote
            </a> */}
        </div>  
    </div>
  )
}

export default Hero
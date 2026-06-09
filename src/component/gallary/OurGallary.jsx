import Image from 'next/image';
import React from 'react'
import gallary_1 from "@/assets/gallary_1.png"
import gallary_2 from "@/assets/gallary_2.png"
import gallary_3 from "@/assets/gallary_3.png"
import gallary_4 from "@/assets/gallary_4.png"
import gallary_5 from "@/assets/gallary_5.png"
const OurGallary = () => {
  return (
    <section>
        {/* <div className="container mx-auto"> */}
             <div className="flex flex-col pb-9">
          <h2 className="text-[#285A43] text-[36px] text-center font-normal leading-[140%] font-lato tracking-[4%]">
           Our Gallery View
          </h2>
        </div>
        <div className="grid grid-cols-[500px_460px_460px] gap-2.5">
            <div>
                <Image src={gallary_1} alt="Gallery Image 1" />
            </div>
            <div className="grid grid-cols-1 gap-2.5">
              <div>
                <Image src={gallary_2} alt="Gallery Image 2" />
            </div>
              <div>
                <Image src={gallary_3} alt="Gallery Image 3" />
            </div>


            </div>
            <div className="grid grid-cols-1 gap-2.5">
                  <div>
                <Image src={gallary_4} alt="Gallery Image 4" />
            </div>
              <div>
                <Image src={gallary_5} alt="Gallery Image 5" />
            </div>


            </div>

        </div>

        {/* </div> */}
    </section>
  )
}

export default OurGallary
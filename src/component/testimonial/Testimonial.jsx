import React from 'react'
import TestimonialCard from './TestimonialCard';
import test_1 from "../../assets/test_1.png";
import test_2 from "../../assets/test_2.png";
import test_3 from "../../assets/test_3.png";


 const testimonials = [
  {
    id: 1,
    name: "Doris Watson",
    image: test_1,
    review:
      "Highly recommend this website for quality flowers and plants. Great prices, timely delivery and excellent customer service.",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    image: test_2,
    review:
      "Amazing collection of plants! The packaging was excellent and every plant arrived in perfect condition.",
  },
  {
    id: 3,
    name: "Michael Brown",
    image: test_3,
    review:
      "The customer support team was very helpful. I will definitely order again from this store.",
  },
];
const Testimonial = () => {
  return (
   <section className="py-30">
    <div className="container mx-auto">
           <div className="flex flex-col pb-9">
          <h2 className="text-[#285A43] text-[36px] text-center font-normal leading-[140%] font-lato tracking-[4%]">
What do they say about us          </h2>
        </div>

          <div className="grid grid-cols-3 justify-center gap-17.5 mt-8.25">
      {testimonials.map((testimonial) => (
        <TestimonialCard
          key={testimonial.id}
          testimonial={testimonial}
        />
      ))}
    </div>
    </div>
   </section>
  )
}

export default Testimonial
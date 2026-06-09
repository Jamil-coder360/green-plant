import About from '@/component/about/About';
import Benifits from '@/component/benifits/Benifits';
import OurGallary from '@/component/gallary/OurGallary';
import Hero from '@/component/Hero';
import Product from '@/component/product/Product';
import Testimonial from '@/component/testimonial/Testimonial';
import React from 'react'

const HomePage = () => {
  return (
    <>
    <Hero />
    <About />
    <Product />
    <Benifits />
    <OurGallary />
    <Testimonial />
    </>
  )
}

export default HomePage
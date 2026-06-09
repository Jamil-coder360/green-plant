import About from '@/component/about/About';
import Benifits from '@/component/benifits/Benifits';
import OurGallary from '@/component/gallary/OurGallary';
import Hero from '@/component/Hero';
import Product from '@/component/product/Product';
import React from 'react'

const HomePage = () => {
  return (
    <>
    <Hero />
    <About />
    <Product />
    <Benifits />
    <OurGallary />
    </>
  )
}

export default HomePage
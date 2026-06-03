import About from '@/component/about/About';
import Benifits from '@/component/benifits/Benifits';
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
    </>
  )
}

export default HomePage
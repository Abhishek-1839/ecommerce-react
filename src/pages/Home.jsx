import React from 'react'
import Product from '../components/Product'
import Hero from '../components/Hero'
import Offer from '../components/Offer'
import Category from '../components/Category'
import Banner from '../components/Banner'
import Allitems from '../components/Allitems'
import Footer from '../components/Footer'
import ProductComponent from '../components/ProductComponent'

const Home = () => {
  return (
    <section>
    <Offer/>
    <Hero/>
    <Category/>
    <ProductComponent/>
    <Banner/>

    <Allitems/> 
</section>
  )
}

export default Home

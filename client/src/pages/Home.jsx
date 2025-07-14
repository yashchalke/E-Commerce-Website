import React from 'react'
import Navbar from '../components/Navbar'
import Blackbox from '../components/Blackbox'
import HeroSection from '../components/HeroSection'
import Logoslider from '../components/Logoslider'
import NewArrivals from '../components/NewArrivals'
import TopSelling from '../components/TopSelling'
import BrowseByDressStyle from '../components/BrowseByDressStyle'
import HappyCustomers from '../components/HappyCustomers'

const Home = () => {
  return (
    <section>
        <HeroSection />
        <Logoslider />
        <NewArrivals />
        <div className='border lg:mx-10 mx-3'></div>
        <TopSelling />
        <BrowseByDressStyle />
        <HappyCustomers />
    </section>
  )
}

export default Home
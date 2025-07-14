import React from 'react'
import Navbar from '../components/Navbar'
import Blackbox from '../components/Blackbox'
import HeroSection from '../components/HeroSection'
import Logoslider from '../components/Logoslider'
import NewArrivals from '../components/NewArrivals'

const Home = () => {
  return (
    <section>
        <HeroSection />
        <Logoslider />
        <NewArrivals />
    </section>
  )
}

export default Home
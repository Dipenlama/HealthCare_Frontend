import React from 'react'
import Header from '../components/Header'
import SpecialityMenu from '../components/SpecialityMenu'
import OurDoctors from '../components/OurDoctors'
import Banner from '../components/Banner'
import Footer from '../components/Footer'


const Home = () => {
  return (
    <div>
        <Header/>
        <SpecialityMenu/>
        <OurDoctors/>
        <Banner/>
    </div>
  )
}

export default Home
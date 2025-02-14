import React from 'react'
import Header from '../components/Header'
import SpecialityMenu from '../components/SpecialityMenu'
import OurDoctors from '../components/OurDoctors'


const Home = () => {
  return (
    <div>
        <Header/>
        <SpecialityMenu/>
        <OurDoctors/>
    </div>
  )
}

export default Home
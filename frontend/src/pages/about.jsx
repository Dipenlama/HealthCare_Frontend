import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>


      <div  className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-medium'>US</span>
        </p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Healthcare system is a seamless and secure platform that connects patients with healthcare professionals for 
            hassle-free appointment booking. We are committed to make healthcare more accessible and convenient. 
            With our user-friendly platform, patients can easily find doctors, check availability, and book appointments within minutes. 
            Whether you need a routine check-up, specialist consultation, or emergency medical attention, 
            we ensure that you connect with the right healthcare provider at the right time. </p>
          <p>We make it easy to find doctors, check availability, and schedule visits—all in just a few clicks.</p>
          <b className='text-gray-800'>Our Vision</b>
          <p>Our mission is to enhance healthcare accessibility while ensuring efficiency and confidentiality. Our secure system safeguards your medical information,
             while our dedicated support team ensures a smooth experience.
             We partner with top-rated doctors, clinics, and hospitals to provide you with the best healthcare solutions at your fingertips.</p>
          <p>Join us in revolutionizing healthcare accessibility—because your well-being is our priority!</p>
        </div>
      </div>
      <div className='text-xl my-4'>
        <p>WHY <span className='text-gray700 font-semibold'> CHOOSE US </span></p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Efficiency:</b>
          <p>Streamlined appointment scheduling that fits into your busy lifestyle</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Convenience:</b>
          <p>Access to a network of trusted healthcare professionals in your area.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Personalization:</b>
          <p>Tailored recommendations and reminders to help you on top of your health.</p>
        </div>
      </div>



    </div>
  )
}

export default About
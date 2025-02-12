import React from "react";
import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-black px-6 md:px-12 lg:px-20 py-10">
      
      {/*----- Left Side -----*/}
      <div className="w-full md:w-1/2 space-y-4">
        <p className="text-3xl font-bold leading-tight">
          Book Appointment <br /> With Trusted Doctors
        </p>

        {/* Profile and Description */}
        <div className="flex items-center space-x-4">
          <img 
            src={assets.group_profiles} 
            alt="Group Profiles" 
            className="w-12 h-12 rounded-full"
          />
          <p className="text-gray-700">
            Simply browse through our extensive list of trusted doctors, <br /> 
            schedule your appointment hassle-free.
          </p>
        </div>

        {/* Button */}
        <a 
          href="#" 
          className="flex items-center text-primary font-medium hover:underline"
        >
          Book Appointment
          <img 
            src={assets.arrow_icon} 
            alt="Arrow" 
            className="ml-2 w-4 h-4"
          />
        </a>
      </div>

      {/*----- Right Side (Doctors Image) -----*/}
      <div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0">
        <img 
          src={assets.header_img} 
          alt="Header" 
          className="w-full max-w-lg object-contain"
        />
      </div>
      
    </div>
  );
};

export default Header;

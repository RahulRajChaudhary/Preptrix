import React from 'react'
import ProfileInfoCard from "../Cards/ProfileInfoCard";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="h-16 bg-white border border-b border-gray-200/50 backdrop-blur-[2px] py-2.5 px-4 md:px-4 sticky top-0 z-30">
      <div className="container mx-auto flex items-center justify-between gap-5">
        
        {/* Logo + App Name */}
        <Link to="/dashboard" className="flex items-center gap-2 ">
          <img 
            src="/logo.png" 
            alt="logo" 
            className="h-12 w-auto bg-orange-400 rounded-lg"
          />
          <h2 className="text-lg md:text-xl font-medium text-black leading-5">
            PrepTrix AI
          </h2>
        </Link>

        {/* Profile Info */}
        <ProfileInfoCard />
      </div>
    </div>
  )
}

export default Navbar

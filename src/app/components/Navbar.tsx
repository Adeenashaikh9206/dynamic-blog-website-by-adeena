"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'


const Navbar = () => {
  // use currentdate and currenttime)
  const [currentDateTime, setCurrentDateTime] = useState(``);
  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false

      }
      setCurrentDateTime
        (now.toLocaleDateString("en-Us", options) + ""
          + now.toLocaleTimeString("en-Us", { hour12: false })
        );
    };
    // updatedatetime
    const interValId = setInterval(updateDateTime, 1000);
    return () => clearInterval(interValId)
  }, []);




return(
    <header className='bg-gradient-to-r from-purple-200 via-pink-100 to-pink-300 text-gray-200 body-font shadow-lg'>
      <div className='container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center'>
        <div className='flex-1 text-black'>
          <span>{currentDateTime}</span>
        </div>
        <nav className='md:ml-auto flex flex-wrap items-center text-black justify-center '>
          <Link href="/" className='mr-5 hover:text-red-700 transition-colors duration-300 transform hover:scale-105'
          > Home
          </Link>

          <Link href="/about" className='mr-5 hover:text-red-700 transition-colors duration-300 transform hover:scale-105'
          > About
          </Link>

          <Link href="/blog" className='mr-5 hover:text-red-700 transition-colors duration-300 transform hover:scale-105'
          > Blog
          </Link>
          <Link href="/contact" className='mr-5 hover:text-red-700 transition-colors duration-300 transform hover:scale-105'
          > Contact
          </Link>

        </nav>
        <button className='inline-flex items-center bg-blue-500 border-0 py-1 px-3 focus:outline-none hover:bg-red-600 rounded text-white mt-4 md:mt-0 transition-colors duration-300'>
          Sign Up
        </button>
        
      </div>
      {/* <nav className="flex flex-col space-y-4 mt-4">
              <Link
                href="/"
                className="hover:text-red-700 transition-colors duration-300 transform"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="hover:text-red-700 transition-colors duration-300 transform"
              >
                About
              </Link>
              <Link
                href="/blog"
                className="hover:text-red-700 transition-colors duration-300 transform"
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="hover:text-red-700 transition-colors duration-300 transform"
              >
                Contact
              </Link>
            </nav> */}
    </header>
    
  )
}

export default Navbar

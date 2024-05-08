import { useHtmlContext } from "next/dist/shared/lib/html-context.shared-runtime";
import React, { useState } from "react";
import Link from "next/link";
import { Fragment } from 'react'

const Navbar = () => {
  const [isClick, setisClick] = useState(false);
  
  const toggleNavbar = () => {
    setisClick(!isClick);
  };

  return (
    <>
      <nav className="bg-[#ede7de] z-30">
        <div className="max-m-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center ">
              <div className="flex-shrink-0">
                <Link href="/" className="text-[#025a4e] font-bold">
                  Nama Villa
                </Link>
              </div>
            </div>
            <div className="hidden md:block font-poppins">
              <div className="ml-4 flex items-center space-x-4">
              <Link href="/">
                  <p className="text-[#025a4e] hover:bg-[#0a5d4f] hover:text-white rounded-lg transition duration-500 p-2">
                    Beranda
                  </p>
                </Link>
                <Link href="/paket">
                  <p className="text-[#025a4e] hover:bg-[#0a5d4f] hover:text-white rounded-lg transition duration-500 p-2">
                    Paket
                  </p>
                </Link>
                <Link href="/">
                  {" "}
                  <p className="text-[#025a4e] hover:bg-[#0a5d4f] hover:text-white rounded-lg transition duration-500 p-2">
                    About
                  </p>
                </Link>
                  
                
              </div>
            </div>



            <div className="md:hidden flex items-center z-1">
              <button
                className="inline-flex items-center justify-center p-2 rounded-md text-[#025a4e] 
                            focus:outline-none focus:ring-2 focus:ring-[#025a4e] " onClick={toggleNavbar}          
              >
                {isClick ? (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                  
                )}
              </button>
            </div>
                  
          </div>
        </div>
        {isClick && (
          <div className="animate-fadein flex flex-col z-50 absolute w-full">
          <div className="md:hidden ">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#025a4e] font-poppins animate-geser focus:ease-in-out focus:duration-500">
              <Link
                href="/"
                className="text-white block hover:bg-[#ffffff] hover:text-black rounded-lg transition duration-500 p-2"
              >
                Home
              </Link>
              <Link
                href="/"
                className="text-white block hover:bg-[#ffffff] hover:text-black rounded-lg transition duration-500 p-2"
              >
                About
              </Link>
              <Link
                href="/paket"
                className="text-white block hover:bg-[#ffffff] hover:text-black rounded-lg transition duration-500 p-2"
                onClick={toggleNavbar}
              >
                Paket
              </Link>
            </div>
          </div>
          </div>
        )}
      </nav>
      
    </>
  );
};

export default Navbar;

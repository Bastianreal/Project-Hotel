import React from "react";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="bg-[#0a5d4f] text-white font-nunito w-s w-full">
      <div className="px-5 pt-4">
        <div className="md:flex md:justify-between">
        <div className="">
          <div>
          <h1 className="text-2xl font-bold mt-3 md:mt-0 md:text-left">
              Villa
            </h1>
            <p className="text-sm max-w-xs text-justify md:text-left">
            Villa merupakan tempat tinggal bersifat sementara yang digunakan saat berlibur dan rekreasi. Villa digunakan sebagai tempat peristirahatan.
            </p>
            <h1 className="text-2xl font-bold mt-3 md:mt-0 md:text-left">
              Social Media
            </h1>
            <p className="text-sm max-w-xs text-justify md:text-left">
            Villa merupakan tempat tinggal bersifat sementara yang digunakan saat berlibur dan rekreasi. Villa digunakan sebagai tempat peristirahatan.
            </p>
          <div className="">
          <div className="mt-3 flex">
              {/* <Image src={house} alt="House"></Image>
              <p className="ml-2">Jl Pucuk 1 No 99x Banjar Tangtu</p>
            </div>
            <div className="mt-1 flex">            
              <Image src={phone} alt="Phone"></Image>
              <p className="ml-2">0812-3902-9304</p>              
            </div>
            <div className="mt-1 flex">            
              <Image src={envelope} alt="Email"></Image>
              <p className="ml-2">bastiankristiawan9@gmail.com</p>               */}
            </div>
          </div>
          </div>
          </div>
          <div className="md:flex md:items-center mt-4">
          <div className="md:text-right ">
            <h1 className="text-2xl font-bold">Social Media</h1>
            <div className="flex  space-x-2">
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-white opacity-60 mt-1"></hr>
      <p className="text-sm opacity-60 flex flex-col items-center justify-center mt-2 pb-2 ">
        Copyright by Kelompok II 2023
      </p>
    </footer>
  );
};

export default Footer;

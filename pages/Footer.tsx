import React from "react";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="bg-[#0a5d4f] text-white font-nunito w-s w-full">
      <div className="px-5 pt-4">
        <div className="o">
          <div className="md:flex md:justify-between">
          <div>
          <h1 className="text-2xl font-bold mt-3 md:mt-0 md:text-left">
              Villa
            </h1>
            <p className="text-sm max-w-xs text-justify md:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, architecto atque dolor libero eaque delectus!
            </p>
            <br/>
            <h1 className="text-2xl font-bold mt-3 md:mt-0 md:text-left">
              Social Media
            </h1>
            <p className="text-sm max-w-xs text-justify md:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, architecto atque dolor libero eaque delectus!
            </p>
            </div>

            <div>
          <h1 className="text-2xl font-bold mt-3 md:mt-0 md:text-left">
              Villa
            </h1>
            <p className="text-sm max-w-xs text-justify md:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, architecto atque dolor libero eaque delectus!
            </p>
            <br/>
            <h1 className="text-2xl font-bold mt-3 md:mt-0 md:text-left">
              Social Media
            </h1>
            <p className="text-sm max-w-xs text-justify md:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, architecto atque dolor libero eaque delectus!
            </p>
            </div>

            <div>
          <h1 className="text-2xl font-bold mt-3 md:mt-0 md:text-left">
              Team Work
            </h1>
            <p className="list-none text-1xl max-w-xs text-justify md:text-left">
            <li>I Kadek Satrya Mahesastika | Back End</li>
            <li>I Made Dio Kartiana Putra | Back End</li>
            <li>I Putu Rangga Sanny Saputra | Database</li>
            <li>I Putu Wika Dinata | Front End</li>
            <li>Sebastian Herben Satrio Kristiawan | Front End</li>
            </p>
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

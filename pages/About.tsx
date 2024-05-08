import React from "react";
import Link from "next/link";
export default function Testimonial() {
  return (
    <>
      <div className="bg-[#ede7de] p-2 pb-28 md:pb-0">
        <div className="pb-2 pt-1">
        <hr className="max-w-full h-1 bg-[#025a4e]"  />
        </div>
        <div className="md:flex w-full h-96 justify-around">
          <div className="flex-col">
            <h1 className="md:text-4xl text-2xl font-bold mt-3 md:mt-0 md:text-left mb-4 text-[#025a4e]">
              About Us
            </h1>
            <p className=" mb-9 md:text-2xl text-xl max-w-96 text-justify md:text-left text-[#025a4e]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum, architecto atque dolor libero eaque delectus!
            </p>
            <div className="pb-5">
            <Link href="Reservasi">
              <button className=" py-1 px-8 rounded-2xl text-xl border-2 border-[#025a4e] text-[#025a4e] hover:text-white hover:bg-[#025a4e] hover:duration-700">
                Mulai Sewa Kamar
              </button>
            </Link>
            </div>
          </div>
          <div className="rounded-2xl w-96 h-64 md:w-5/12 md:h-80 bg-[#025a4e] text-black"></div>
        </div>
      </div>
    </>
  );
}

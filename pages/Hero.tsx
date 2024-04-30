import Image from "next/image";
import Link from "next/link";
import HeroBackground from "../public/HeroBackground.jpg";
import Reservasi from "./Reservasi";
import paket from "./paket";
import Nav from "./Navbar"
export default function Hero() {
  return (
    <>
    <Nav />
      <div
        className="w-full md:h-[90vh] h-[80vh] overflow-hidden relative"
        style={{
          backgroundImage: `url(${HeroBackground.src})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-col items-center h-screen justify-center gap-y-2">
          <div className="font-bold max-w-7xl text-5xl text-white mb-3"> 
            Stay With Us And Enjoy{" "}
            <span className="text-green-400">Nature</span>
          </div>
          <div className="text-1xl text-white mb-2">
            Enjoy being one with the nature like never before
          </div>
          <div className="flex gap-x-10">
            <Link href="Reservasi">
            <button className=" py-3 px-6 rounded-2xl text-xl border-2 text-white hover:bg-white text">
              Selengkapnya
            </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full h-20 justify-center flex items-center">
        <div className="w-11/12 bg-white h-1 ">
        </div>
      </div>

      <div className="flex w-full h-96 justify-around">
        <div className="">
        <h1 className="text-4xl font-bold mt-3 md:mt-0 md:text-left mb-4">
              Testimonial
            </h1>
            <p className=" mb-9 text-2xl max-w-96 text-justify md:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, architecto atque dolor libero eaque delectus!
            </p>
            <Link href="Reservasi">
            <button className=" py-1 px-8 rounded-2xl text-xl border-2 text-white hover:bg-white text">
              Mulai Sewa Kamar
            </button>
            </Link>
            </div>
        <div className="rounded-2xl w-5/12 h-80 bg-white text-black">
          <p>
            Test
          </p>
        </div>
      </div>

      <div className="flex w-full h-96 justify-around">

      </div>
    </>
  );
}

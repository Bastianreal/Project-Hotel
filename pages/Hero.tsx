import Image from "next/image";
import Link from "next/link";
import HeroBackground from "../public/HeroBackground.jpg";
import Reservasi from "./Reservasi";
import Nav from "./Navbar"
export default function Hero() {
  return (
    <>
    <Nav />
      <div
        className="w-full md:h-[90vh] h-[85vh] overflow-hidden relative"
        style={{
          backgroundImage: `url(${HeroBackground.src})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-col items-center h-screen justify-center gap-y-2">
          <div className="font-bold max-w-7xl text-7xl text-white">
            Stay With Us And Enjoy{" "}
            <span className="text-green-400">Nature</span>
          </div>
          <div className="text-3xl text-white">
            Enjoy being one with the nature like never before
          </div>
          <div className="flex gap-x-10">
            <Link href="Reservasi">
            <button className=" py-5 px-8 rounded-3xl text-xl border-4 text-white">
              See More
            </button>
            </Link>
            <button className="bg-white text-black py-5 px-8 rounded-3xl text-xl">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

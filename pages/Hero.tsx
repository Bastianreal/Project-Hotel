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
        className="w-full md:h-[93.5vh] h-[80vh] overflow-hidden relative"
        style={{
          backgroundImage: `url(${HeroBackground.src})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-col items-center h-screen justify-center gap-y-2">
          <div className="font-bold max-w-7xl text-7xl text-white mb-3"> 
            Stay With Us And Enjoy
            <span className="text-green-400"> Nature</span>
          </div>
          <div className="text-1xl text-white mb-2">
            Enjoy being one with the nature like never before
          </div>
          <div className="flex gap-x-10">
            <Link href="/paket">
            <button className=" py-3 px-6 rounded-2xl text-xl border-2 text-white hover:border-black hover:text-black hover:bg-white text hover:duration-300">
              Selengkapnya
            </button>
            </Link>
          </div>
        </div>
      </div>
      

      
    </>
  );
}

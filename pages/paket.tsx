import Image from "next/image";
import HeroBackground from "../public/HeroBackground.jpg";
import Nav from "./Navbar";
import Kamar1 from "../public/Foto Kamar 1.jpg";
import Kamar2 from "../public/Foto Kamar 2.jpg";
import Kamar3 from "../public/Foto Kamar 3.jpg";
import Footer from "./Footer";
import Link from "next/link";
export default function Paket() {
  return (
    <>
      <Nav />
      <div className="bg-[#ede7de] p-3">
        <div className="justify-center flex-col flex items-center pt-3 text-[#ede7de]">
          <div className="bg-[#025a4e] rounded-lg">
            <div className="flex flex-col justify-center items-center w-[400px] md:w-[750px] xl:w-[900px] md:max-w-7xl">
              <Image src={Kamar1} alt="foto kamar"></Image>
            </div>
            <div className="p-2">
              <div className="flex justify-between">
                <div className="">
                  <div className="font-bold text-xl h-6">Kelas Dahlia</div>
                  <div className="text-[#4d8880] text-s p-0 h-5">300.000 RP</div>
                  <div className="text-[#4d8880] text-xs p-0 w-fit">
                    include snack & drink
                  </div>
                </div>
                <Link href="/Reservasi">
                <button className="bg-[#2d6860] text-white flex flex-col justify-center items-center w-32 m-2 rounded-md">
                  BOOK NOW
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="justify-center flex-col flex items-center pt-3 text-[#ede7de]">
          <div className="bg-[#025a4e] rounded-lg">
            <div className="flex flex-col justify-center items-center w-[400px] md:w-[750px] xl:w-[900px] md:max-w-7xl">
              <Image src={Kamar2} alt="foto kamar"></Image>
            </div>
            <div className="p-2">
              <div className="flex justify-between">
                <div className="">
                  <div className="font-bold text-xl h-6">Kelas Mawar</div>
                  <div className="text-[#4d8880] text-s p-0 h-5">450.000 RP</div>
                  <div className="text-[#4d8880] text-xs p-0 w-fit">
                    include breakfast & Dinner
                  </div>
                </div>
                <Link href="/Reservasi">
                <button className="bg-[#2d6860] text-white flex flex-col justify-center items-center w-32 m-2 rounded-md">
                  BOOK NOW
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="justify-center flex-col flex items-center pt-3 text-[#ede7de]">
          <div className="bg-[#025a4e] rounded-lg">
            <div className="flex flex-col justify-center items-center w-[400px] md:w-[750px] xl:w-[900px] md:max-w-7xl">
              <Image src={Kamar3} alt="foto kamar"></Image>
            </div>
            <div className="p-2">
              <div className="flex justify-between">
                <div className="">
                  <div className="font-bold text-xl h-6">Kelas Jepun</div>
                  <div className="text-[#4d8880] text-s p-0 h-5">600.000 RP</div>
                  <div className="text-[#4d8880] text-xs p-0 w-fit">
                    include breakfast
                  </div>
                </div>
                <Link href="/Reservasi">
                <button className="bg-[#2d6860] text-[#ede7de] flex flex-col justify-center items-center w-32 m-2 rounded-md">
                  BOOK NOW
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

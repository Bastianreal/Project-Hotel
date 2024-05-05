import Image from "next/image";
import Nav from "./Navbar";
import HeroBackground from "../public/HeroBackground.jpg";
import Hotel from "../public/Hotel.webp";
import Kanan from "../public/Panah-Kanan.svg";
export default function Reservasi() {
  return (
    <>
      <Nav />
      <div
        className="w-full md:h-[93.5vh] h-[100vh] overflow-hidden relative flex justify-center items-center"
        style={{
          backgroundImage: `url(${HeroBackground.src})`,
          backgroundPosition: "center",
          backgroundSize: "screen",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Informasi Detail */}
        <div className="md:flex space-y-3 justify-center items-center">
          <div className="bg-white w-fit h-fit p-6 rounded-lg">
            <div className="text-black flex justify-center text-2xl font-bold pb-3">
              Infromasi Detail
            </div>
            <div className="flex flex-col justify-center items-center gap-y-3">
              <div className="flex gap-x-2 pt-5">
                <div className="text-red-500">*</div>
                <input
                  type="text"
                  required
                  placeholder=" Masukkan Nama Sesuai Identitas"
                  className="border-black bg-white max-w-96 w-96 max-h-lg h-10 text-black border-2 outline-none rounded-lg"
                />
              </div>
              <div className="flex gap-x-2 pt-3">
                <div className="text-red-500">*</div>
                <input
                  type="Number"
                  required
                  placeholder=" Masukkan Nomor Telepon"
                  className="border-black bg-white max-w-lg w-72 max-h-lg h-10 text-black border-2 outline-none rounded-lg"
                />
              </div>
              <div className="flex gap-x-2 pt-3">
                <div className="text-red-500">*</div>
                <input
                  type="Text"
                  required
                  placeholder=" Masukkan Email Yang Terdaftar"
                  className="border-black bg-white max-w-lg w-72 max-h-lg h-10 text-black border-2 outline-none rounded-lg"
                />
              </div>
              <button className="rounded-md bg-yellow-400 w-full h-10">Book Now</button>
            </div>
          </div>
          {/* Informasi Kamar */}
          <div className="bg-white w-fit h-fit text-black ml-3 p-5 rounded-lg">
            <div className="flex">
              <div className="font-bold text-black text-xl">Nama Kamar</div>
              <div className="ml-3">Bintang tarok sini</div>
            </div>
            <Image src={Hotel} alt="Gambar kamar" width={375} height={150} />
            <div className="flex mt-5 justify-between">
            <div className="border-2 border-gray-300 w-fit p-2  rounded-lg ">
              <div className="text-xs text-gray-500 text-center">Check In</div>
              <div className="text-swm text-black text-center">
                Wed, 1 May 2024
              </div>
              <div className="text-xs text-gray-500 text-center">
                From 14:00
              </div>
            </div>
            <div className="w-5 flex justify-center">
              <Image src={Kanan} alt="Panah Kanan" />
            </div>
            <div className="">
            <div className="border-2 border-gray-300 w-fit p-2 rounded-lg ">
              <div className="text-xs text-gray-500 text-center">Check Out</div>
              <div className="text-swm text-black text-center">
                Thu, 2 May 2024
              </div>
              <div className="text-xs text-gray-500 text-center">
                Before 12:00
              </div>
            </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import Image from "next/image";
import Background from "../public/HeroBackground.jpg";
import Nav from "./Navbar";
export default function Paket() {
  return (
<>
<Nav />

<div className="w-full md:h-[90vh] h-[85vh] overflow-hidden relative"
      style={{
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}>

<div className=" flex justify-evenly">

  <div className="rounded-2xl w-2/12 h-72  bg-white text-black">
    <p>
      Test
    </p>
  </div>

  <div className="rounded-2xl w-2/12 h-72  bg-white text-black">
    <p>
      Test
    </p>
  </div>

  <div className="rounded-2xl w-2/12 h-72  bg-white text-black">
    <p>
      Test
    </p>
  </div>

  <div className="rounded-2xl w-2/12 h-72  bg-white text-black">
    <p>
      Test
    </p>
  </div>

</div>
</div>
</> 
  );
}
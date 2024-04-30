import Image from "next/image";
import Background from "../public/HeroBackground.jpg";
import Nav from "./Navbar";
export default function Paket() {
  return (
<>
<Nav />

<div className="w-full md:h-[90vh] h-[85vh] overflow-hidden relative"
      style={{
        backgroundImage: `url(${Background.src})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}>
</div>

</>
  );
}
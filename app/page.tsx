import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Subnav from "./components/Subnav";
import Teammember from "./components/Teammember";
import Teammembers from "./components/Teammember";

export default function Home() {
  return (
    <div>
       
      <HeroSection/>
      <Subnav/>
      <Teammembers/>
    </div>
   
  );
}

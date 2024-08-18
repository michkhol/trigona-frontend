import Image from "next/image";
import About from "./_components/about";
import Services from "./_components/services";
import Contact from "./_components/contact";
import Logos from "./_components/logos";
import Link from "next/link";
import colors from "tailwindcss/colors";
import monster from "@/public/images/monster2.png"

import { ArrowRight, TrendingUp, Users, Zap } from 'lucide-react';


export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <div className="relative h-[650px] z-1 w-full bg-base-100">
        {/* <Image className="object-cover z-1 object-right opacity-40 [mask-image:_linear-gradient(to_left,_black_10%,_transparent_80%)]" src={monster} alt="Background" fill={true} priority={true}/> */}
        <Image className="absolute right-0 z-2 hidden lg:block" src={monster} alt="Background" height={600} priority={true}/>
        <div className="relative z-10">
          <h1 className="pl-[5%] text-4xl lg:text-8xl pt-10">Making Change</h1>
        </div>
        <div className="relative z-10">
          <h1 className="z-10 font-bold pl-[33%] text-red-800 text-4xl italic lg:text-8xl pt-6">Happen</h1>
        </div>
        <div className="relative z-10 mt-14 ml-8">
          <div className="grid grid-cols-1 text-2xl">
            <div className="flex items-center mix-blend-difference">
              <TrendingUp className="mr-2 flex-shrink-0" color={colors.red[800]}/><span className="text-shadow">Maximize ROI with targeted change management and human capital solutions</span>
            </div>
            <div className="flex items-center mt-3">
              <Users className="mr-2 flex-shrink-0" color={colors.red[800]}/>
              <span className="text-shadow">Achieve seamless transformation with expert fractional leadership</span>
            </div> 
            <div className="flex items-center mt-3">
              <Zap className="mr-2 flex-shrink-0" color={colors.red[800]}/>
              <span className="text-shadow">Empower your organizations with tailored change management capability building offering</span>
            </div>
          </div>
          <Link href="/#contact" className="bg-red-800 text-white text-2xl mt-8 px-8 py-3 rounded-full font-bold flex items-center hover:bg-orange-600 transition-colors w-64">
            Let Us Help You
          </Link>
        </div>
        <div className="absolute bottom-0">
          <Logos />
        </div>
      </div>
      <Services />
      <About />
      <Contact />
    </div>  
  );
}


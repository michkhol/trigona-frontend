import Image from "next/image";
import About from "./_components/about";
import Services from "./_components/services";
import Contact from "./_components/contact";
import Logos from "./_components/logos";
import Link from "next/link";
import colors from "tailwindcss/colors";
import monster from "@/public/images/monster2-small.webp"

import { PersonStanding, TrendingUp, Users, Zap } from 'lucide-react';


export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <div className="relative z-1 w-full bg-base-100">
        {/* <Image className="object-cover z-1 object-right opacity-40 [mask-image:_linear-gradient(to_left,_black_10%,_transparent_80%)]" src={monster} alt="Background" fill={true} priority={true}/> */}
        <Image className="absolute right-0 z-2 hidden lg:block" src={monster} alt="Background" height={600} priority={true}/>
        <div className="relative z-10">
          <h1 className="pl-[5%] text-8xl pt-10">Making Change</h1>
        </div>
        <div className="relative z-10">
          <h1 className="z-10 font-bold pl-[5%] lg:pl-[33%] text-red-800 italic text-8xl pt-6">Happen</h1>
        </div>
        <div className="relative z-10 mt-14 ml-8">
          <div className="grid grid-cols-1 text-2xl">
            <div className="flex items-center">
              <TrendingUp className="mr-2 flex-shrink-0" color={colors.red[800]}/><span className="text-shadow">Targeted change management</span>
            </div>
            <div className="flex items-center mt-3">
              <PersonStanding className="mr-2 flex-shrink-0" color={colors.red[800]}/><span className="text-shadow">Human capital solutions</span>
            </div>
            <div className="flex items-center mt-3">
              <Users className="mr-2 flex-shrink-0" color={colors.red[800]}/>
              <span className="text-shadow">Expert fractional leadership</span>
            </div> 
            <div className="flex items-center mt-3">
              <Zap className="mr-2 flex-shrink-0" color={colors.red[800]}/>
              <span className="text-shadow">Tailored capability building</span>
            </div>
          </div>
         </div>
         <div className="relative z-10 mt-10 ml-8">
           <Link href="/#contact" className="bg-red-800 text-white text-2xl mt-8 px-8 py-3 rounded-full font-bold flex items-center hover:bg-orange-600 transition-colors w-64">
              Let Us Help You
            </Link>
         </div>
        <div className="relative mt-8">
          <Logos />
        </div>
      </div>
      <Services />
      <About />
      <Contact />
    </div>  
  );
}


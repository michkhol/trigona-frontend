import bridge from "@/public/images/bridge2.jpg";
import Image from "next/image";
import About from "./_components/about";
import Services from "./_components/services";
import Contact from "./_components/contact";
import Logos from "./_components/logos";


export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <div className="relative h-[500px] w-full bg-base-200">
        <Image className="object-cover z-1 object-center opacity-40 [mask-image:_linear-gradient(to_left,_black_10%,_transparent_80%)]" src={bridge} alt="Background" fill={true} priority={true}/>
        <div className="relative z-10">
          <h1 className="font-semibold pl-[5%] text-4xl lg:text-7xl pt-10">Making Change</h1>
        </div>
        <div className="relative z-10">
          <h1 className="z-10 font-semibold text-center text-4xl lg:text-7xl pt-6">Happen</h1>
        </div>
        <div className="relative z-10 mt-20">
          <ul className="px-16">
            <li className="">Assistance with the transformation, whether it is an organizational redesign or a new IT system implementation.</li>
            <li className="mt-3">Delivery of a comprehensive change program that provides solutions to ensure your project&apos;s success.</li> 
            <li className="mt-3">Organizational change management expertise in commercial and public sector.</li>
          </ul>
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


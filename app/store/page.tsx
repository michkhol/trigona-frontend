import officeBackgroud from "@/public/images/New-Office.jpg";
import Image from "next/image";
import Courses from "../_components/courses";

export default function Store() {
  
  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <div className="relative h-96 w-full">
        <Image className="object-cover z-0 object-center" src={officeBackgroud} alt="Background" fill={true} priority={true} />
        <h1 className="relative z-10 font-serif font-semibold text-center text-white text-5xl pt-40">Store</h1>
      </div>
      <Courses />
    </div>  
  );
}
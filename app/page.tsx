import officeBackgroud from "@/public/images/New-Office.jpg";
import Image from "next/image";
import About from "./_components/about";
import Welcome from "./_components/welcome";
import Contact from "./_components/contact";

function restoreUrl(): void {
  const uri = window.location;
  const origin = uri.origin;
  uri.replace(origin)
}

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <div className="relative h-96 w-full">
        <Image className="object-cover z-0 object-center" src={officeBackgroud} alt="Background" fill={true} />
        <h1 className="relative z-10 font-serif font-semibold text-center text-white text-5xl pt-40">Making Change Happen</h1>
      </div>
      <Welcome />
      <About />
      <Contact />
    </div>  
  );
}


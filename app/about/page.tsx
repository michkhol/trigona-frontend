import officeBackgroud from "@/public/images/New-Office.jpg"
import Image from "next/image";
import Link from "next/link";
import img from "@/public/images/102883856small.jpeg"

export default function About() {

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <div className="relative h-96 w-full">
        <Image className="object-cover z-0 object-center" src={officeBackgroud} alt="Background" fill={true} />
        <h1 className="relative z-10 font-serif font-semibold text-center text-white text-5xl pt-40">About Us</h1>
      </div>
      <div className="text-center">
        <h1 className="font-serif font-semibold text-3xl mt-10">Our Story</h1>
      </div>
      <div className="lg:w-[60%]">
        <hr className="my-6"/>
        <Image className="hidden lg:inline float-right" src={img} alt="About image" width={400} height={240}/>
        <span className="">
        Trigona Consulting L.L.C. is a woman owned boutique consulting firm, that provides 
        transformation delivery solutions for commercial and government clients during business, organizational and digital transformations. 
        With field-tested methodologies and leading practices, we ensure that organizations maximize their project&apos;s ROI through:
                    <ul className="list-disc list-inside ml-6">
                      <li>Targeted change management solutions</li>
                      <li>Effective organizational design and operating model optimization</li>
                      <li>Results driven fractional leadership</li>
                      <li>Capability building training offerings</li>
                    </ul>
                    
                    With an extensive experience gained at Big-5 consulting firms and applied across multiple organizations nationwide, 
                    we provide our clients with holistic and comprehensive transformation implementation support.</span>
      </div>
      <div>
        <Link className="btn btn-primary" href="/contact" >Learn More</Link>
      </div>
    </div>
 
  );
}

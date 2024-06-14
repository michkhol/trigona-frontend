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
          Trigona Consulting L.L.C. is a
                    woman owned, SBA certified small business that provides organizational change
                    management solutions for federal, state and commercial clients during organizational and IT system
                    transformations. With field-tested methodologies and leading practices in behavioral change
  management, we ensure that organizations maximize their project&apos;s ROI through:
                    <ul className="list-disc list-inside ml-6">
                      
                      <li>Stakeholder engagement</li>
                      <li>Rapid change adoption</li>
                      <li>Implementation of quick wins and foundation building processes</li>
                      <li>Effective enablement for go-live and post-go-live</li>
                    </ul>
                    
                    With extensive experience gained at Big 5 consulting companies and applied at
                      multiple organizations nationwide, we provide our customers with holistic and comprehensive change
management strategy without a price tag of a big consulting firm.</span>
      </div>
      <div>
        <Link className="btn btn-primary" href="/contact" >Learn More</Link>
      </div>
    </div>
 
  );
}

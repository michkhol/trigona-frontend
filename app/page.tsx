import officeBackgroud from "@/public/images/New-Office.jpg";
import Image from "next/image";
import Link from "next/link";
import serv1 from "@/public/images/108828452small.jpeg";
import serv2 from "@/public/images/82137468small.jpeg";
import serv3 from "@/public/images/62990460small.jpeg";
// import serv4 from "@/public/images/112202028small.jpeg";
// import { useSearchParams } from "next/navigation";  // Add Suspense boundary https://nextjs.org/docs/messages/missing-suspense-with-csr-bailout
// import Script from "next/script";

function restoreUrl(): void {
  const uri = window.location;
  const origin = uri.origin;
  uri.replace(origin)
}

export default function Home() {
  // const params = useSearchParams();
  // const success = params.get("showSuccess");
  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <div className="relative h-96 w-full">
        <Image className="object-cover z-0 object-center" src={officeBackgroud} alt="Background" fill={true} />
        <h1 className="relative z-10 font-serif font-semibold text-center text-white text-5xl pt-40">Making Change Happen</h1>
      </div>
      <div className="text-center">
        <h1 className="font-serif font-semibold text-3xl mt-10">Welcome</h1>
      </div>
      <div className="lg:w-[60%]">
        <hr className="my-6"/>
        <p className="px-6">Any transformation is a journey, the one best taken with the partner. The partner, who understands the 
        challenges that lay ahead and with meaningful insights to guide you through them. Someone with knowledge to 
        assist you with the transformation, whether it is organizational redesign or new IT system implementation. 
        Someone who can deliver a comprehensive change program that provides organizationally and culturally aligned 
        solutions to ensure your project&apos;s success. Someone with a passion and dedication to bring your organization to 
        the next level. With organizational change management expertise in commercial and public sector, Trigona Consulting 
        is here to help you in your journey. We make change happen.</p>
      </div>
      <div className="w-[60%]">
        <h1 className="text-center font-serif font-semibold text-3xl mt-10">Our Services</h1>
        <hr className="my-6"/>
        <div className="grid grid-rows-1 lg:grid-cols-3 w-full lg:gap-4">
          <div className="flex flex-col gap-4">
            <div>
              <Image className="m-auto" src={serv1} alt="Services1"/>
            </div>
            <div className="basis-14">
              <h2 className="text-center font-serif font-semibold text-xl">Transformation Delivery Consulting</h2>
            </div>
            <div>
              <ul className="list-disc list-outside pl-6">
                <li>Organizational Change Management</li>
                <li>Organizational Design</li>
                <li>Program/Project Management</li>
                <li>Business Process Re-engineering</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <Image className="m-auto" src={serv2} alt="Services2"/>
            </div>
            <div className="basis-14">
              <h2 className="text-center font-serif font-semibold text-xl">On-Demand Executive Expertise</h2>
            </div>
            <div>
            <ul className="list-disc list-outside pl-6">
              <li>Interim Executive Leadership</li>
              <li>Project Based Leadership</li>
              <li>Customized Leadership Service</li>
            </ul>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <Image className="m-auto" src={serv3} alt="Services3"/>
            </div>
            <div className="basis-14">
            <h2 className="text-center font-serif text-xl font-semibold">Capability Building Tailored Training Solutions</h2>
            </div>
            <div>
            <ul className="list-disc list-outside pl-6">
              <li>Live Web-Based and In-Person Capability Building Training Offerings</li>
            </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-center gap-4 w-full">
        <Link className="btn btn-primary" href="/contact">Learn More</Link>
        {/*<Link className="btn btn-primary" href="#">Upcoming Trainings</Link>*/}
      </div>
    </div>
  );
}


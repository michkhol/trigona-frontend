import Image from "next/image";
import serv1 from "@/public/images/transformation-delivery-consulting2.jpg";
import serv2 from "@/public/images/on-demand-executive-expertise2.jpg";
import serv3 from "@/public/images/capability-building-tailored-training-solutions2.jpg";
import Logos from "./logos";
import DecoratedTitle from "./decorated-title";

export default function Welcome() {
  return (
    <>

    <div className="lg:w-[60%]">
      <DecoratedTitle title="Welcome" />
      
        <p className="px-6">Any transformation is a journey, the one best taken with the partner. The partner, who understands the 
        challenges that lay ahead and with meaningful insights to guide you through them. Someone with knowledge to 
        assist you with the transformation, whether it is organizational redesign or new IT system implementation. 
        Someone who can deliver a comprehensive change program that provides organizationally and culturally aligned 
        solutions to ensure your project&apos;s success. Someone with a passion and dedication to bring your organization to 
        the next level. With organizational change management expertise in commercial and public sector, Trigona Consulting 
        is here to help you in your journey. We make change happen.</p>
      </div>
      <div className="lg:w-[60%]">
        <DecoratedTitle title="Our Services" />
        <div className="grid grid-rows-1 lg:grid-cols-3 w-full lg:gap-4">
          <div className="flex flex-col gap-4 mb-10">
            <div>
              <Image className="m-auto" src={serv1} alt="transformation delivery consulting"/>
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
          <div className="flex flex-col gap-4 mb-10">
            <div>
              <Image className="m-auto" src={serv2} alt="on-demand executive expertise"/>
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
          <div className="flex flex-col gap-4 mb-10">
            <div>
              <Image className="m-auto" src={serv3} alt="capability building tailored training solutions"/>
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
        <DecoratedTitle title="Our Clients and Partners" />
        <Logos />
        {/*<hr className="my-6 border-orange-600"/>*/}
      </div>
    </>
  );
}


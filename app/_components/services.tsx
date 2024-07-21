import Image from "next/image";
import serv1 from "@/public/images/transformation-delivery-consulting2.jpg";
import serv2 from "@/public/images/on-demand-executive-expertise2.jpg";
import serv3 from "@/public/images/capability-building-tailored-training-solutions2.jpg";
import Logos from "./logos";
import DecoratedTitle from "./decorated-title";

export default function Services() {
  return (
    <>
      <div className="flex flex-col w-full">
        <div className="my-10">
          <h2 className="font-semibold text-5xl pl-2">Transformation Delivery Consulting</h2>
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="flex-initial w-96">
            <Image className="" src={serv1} alt="transformation delivery consulting"/>
          </div>
          <div>
            <ul className="list-disc list-inside ml-7 text-xl">
              <li>Organizational Change Management</li>
              <li className="mt-4">Organizational Design</li>
              <li className="mt-4">Program/Project Management</li>
              <li className="mt-4">Business Process Re-engineering</li>
            </ul>
          </div>
        </div>
        <div className="my-10 ml-[30%]">
          <h2 className="font-semibold text-5xl">On-Demand Executive Expertise</h2>
        </div>
        <div className="flex flex-col lg:flex-row ml-[30%]">
          <div className="flex-initial w-96">
            <Image className="" src={serv2} alt="on-demand executive expertise"/>
          </div>
          <div>
          <ul className="list-disc list-inside ml-7 text-xl">
            <li>Interim Executive Leadership</li>
            <li className="mt-4">Project Based Leadership</li>
            <li className="mt-4">Customized Leadership Service</li>
          </ul>
          </div>
        </div>
        <div className="my-10">
          <h2 className="text-5xl font-semibold pl-2">Capability Building Tailored Solutions</h2>
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="flex-initial w-96">
            <Image className="" src={serv3} alt="capability building tailored training solutions"/>
          </div>
          <div>
          <ul className="list-disc list-inside ml-7 text-xl">
            <li>Live Web-Based and In-Person Capability Building Training Offerings</li>
          </ul>
          </div>
        </div>
      </div>
    </>
  );
}


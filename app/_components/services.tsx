import Image from "next/image";
import building from "@/public/images/building-small.jpg"
import Link from "next/link";

export default function Services() {
  return (
      <div className="relative w-full z-1">
        <Image className="object-cover z-1" src={building} alt="Background" fill={true} priority={true}/>
        <div className="z-10 relative mt-10 ml-6">
          <h1 className="text-8xl">Our <span className="text-red-800 font-bold italic">Work</span></h1>
        </div>
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-10 justify-center my-20 px-10">
          <div className="bg-base-100 opacity-85 px-2">
            <div className="h-14">
              <h2 className="font-bold text-3xl text-center text-red-800 mt-6">Transformation Delivery Consulting</h2>
            </div>
            <div className="">
              <ul className="list-disc list-outside ml-10 my-6 text-xl">
                <li>Organizational Change Management</li>
                <li className="mt-4">Organizational Design</li>
                <li className="mt-4">Program/Project Management</li>
                <li className="mt-4">Business Process Re-engineering</li>
              </ul>
            </div>
          </div>
          <div className="bg-base-100 opacity-85 px-2">
            <div className="h-14">
              <h2 className="font-bold text-center text-3xl text-red-800 mt-6">Tailored Capability Building Solutions</h2>
            </div>
            <div className="">
              <ul className="list-disc list-outside ml-10 my-6 text-xl">
                <li>Organizational Change Management Capabilities Within Client Organizations</li>
                <li className="mt-4">Leadership Development, Culture, Emotional Intelligence, and DEI</li>
                <li className="mt-4">Organizational Change Management Live Web-Based Training Courses</li>
              </ul>
            </div>
          </div>
          <div className="bg-base-100 opacity-85 px-2">
            <div className="h-14">
              <h2 className="text-3xl text-center font-bold text-red-800 mt-6">On-Demand Executive Expertise</h2>
            </div>
            <div className="">
              <ul className="list-disc list-outside ml-10 my-6 text-xl">
                <li>Interim Executive Leadership</li>
                <li className="mt-4">Project Based Leadership Solutions</li>
                <li className="mt-4">Customized Leadership and Senior Advisory Services</li>
              </ul>
            </div>
          </div>       
        </div>
        <div className="relative z-10 h-20 flex justify-end mr-10 mt-4">
          <Link href="/#contact">
            <span className=" bg-red-800 text-white text-2xl px-8 py-3 rounded-full font-bold hover:bg-orange-600 transition-colors w-64">
              Let Us Help You
             </span>
           </Link>
        </div>

      </div>
  );
}


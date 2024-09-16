import { cookies } from "next/headers";
import { MagnetForm } from "../_components/magnet-form";
import Material from "../_components/material";
import type { Registrant } from "@/lib/utils";
import Image from "next/image";
import robot from "@/public/images/robot.webp";
import computer from "@/public/images/computer.webp"

export default function Courses() {
  async function handleMagnet(form: Registrant) {
    "use server";

    cookies().set({
      name: "trigonaMagnet",
      value: "true",
      httpOnly: true,
      path: "/courses",
      maxAge: 60 * 60 * 24 * 7, // a week
    });
  }

  const user = cookies().get("trigonaMagnet")

  return (
    <div className="flex flex-col w-full">
      <div className="relative z-0 selection:w-full bg-base-100 ">
        <Image className="absolute z-10 right-0 hidden md:block" src={robot} alt="Background" height={700} priority={true} />
        <div className="pl-6 mt-10">
          <h1 className="text-4xl">Live Virtual Course</h1>
        </div>
        <div className="pl-6 mt-10 w-[90%]">
          <h1 className="font-bold text-6xl lg:text-8xl">Practical Change Manangement</h1>
        </div>
        <div className="pl-6 mt-10">
          <h1 className="italic text-6xl lg:text-8xl text-red-800">Enhanced with AI</h1>
        </div>
         <div className="pl-6 mt-20 w-[80%]">
          <p className="text-4xl">EQUIP PROFESSIONALS WITH TOOLS, PROCESSES AND FRAMEWORKS TO EFFECTIVELY LEAD CHANGE</p>
        </div>
        <div className="pl-6 relative z-10 my-10">
          <p className="text-4xl text-red-800">&gt;&gt;&gt; | 6 Weeks | From $1850 | October 2024  </p>
        </div>
        <div className="absolute w-full z-1 bottom-0 h-3 bg-gradient-to-t from-gray-50"></div>
      </div>
      <div className="flex flex-row mx-2">
        <Image className="ml-4 hidden lg:block" src={computer} alt="Computer" height={600} priority={true} />
        <div className="ml-4 text-2xl px-4">
          <h2 className="text-5xl text-center mt-6"><span className="italic">Course</span> <span className="font-bold text-red-800">Overview</span>
          </h2>
          <p className="mt-6">
          The &quot;Practical Change Management, Enhanced with AI&quot; is an immersive, live online course that provides a comprehensive approach to applying proven change management principles, complemented by cutting-edge AI tools. This course equips professionals with practical, innovative ways to lead transformations effectively, enhance stakeholder journeys, and achieve data-driven decision-making, ultimately resulting sustainable transformation success.</p>
          <p className="mt-6">
          Leveraging strategies used by top global consulting firms and grounded in major change management methodologies, this course is adjusted for real world challenges and constraints. It offers a deep dive into core change management activities, optimal timing, and alignment with functional milestones.
          </p>
          <p className="mt-6">
          Participants will gain a practical, down-to-earth approach to change management, complete with actionable activity lists, templates, and options for GenAI integration that is applicable to any organization or transformation type.
          </p>
        </div>
      </div>
      <div className="">
        {cookies().get("trigonaMagnet") ? <Material /> : <MagnetForm handler={handleMagnet} />}
      </div>
    </div>
  );
}

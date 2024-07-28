import { cookies } from "next/headers";
import { EnrollForm } from "../_components/enroll-form";
import Material from "../_components/material";
import type { FormInput } from "@/lib/utils";
import Image from "next/image";
import training from "@/public/images/training.jpg";

export default function Courses() {
  async function handleRegistration(form: FormInput) {
    "use server";

    cookies().set({
      name: "trigonaEnrolled",
      value: "true",
      httpOnly: true,
      path: "/courses",
      maxAge: 60 * 60 * 24 * 7, // a week
    });
  }

  const user = cookies().get("trigonaEnrolled")
  // console.log("User: " + user?.value);

  return (
    <div className="flex flex-col w-full">
      <div className="relative h-[400px] w-full bg-base-200">
        <Image className="object-cover z-0 object-center opacity-40 [mask-image:_linear-gradient(to_left,_black_10%,_transparent_80%)]" src={training} alt="Background" fill={true} priority={true} />
        <div className="relative z-10">
          <h1 className="font-semibold pl-[5%] text-4xl lg:text-7xl pt-10">Practical Change Management</h1>
        </div>
        <div className="relative z-10">
          <h1 className="font-semibold text-center text-4xl lg:text-7xl pt-6">Training Course</h1>
        </div>
        <div className="absolute bottom-0 z-10 pl-2 mt-24">
             <ul className="pl-3 leading-loose mt-4 font-semibold">
              <li>EQUIP PROFESSIONALS WITH TOOLS, PROCESSES AND FRAMEWORKS TO EFFECTIVELY LEAD CHANGE</li>
              <li>online | 3 weeks | 6 modules | September 2024  </li>
            </ul>
        </div>
      </div>
      <div className="mx-2">
        <h2 className="font-bold text-3xl text-center mt-6">Overview</h2>
        <p>
          The &quot;Practical Change Management&quot; is an immersive, live online course that provides  practical, innovative ways to apply change management principals combined with Gen AI to the transformation delivery in order to enhance the stakeholder journeys, achieve data-driven decision making, and ultimately impact the success of your change initiatives.
          Leveraging insider strategies and AI-enhanced tools used by top global consulting firms, this interactive program offers a deep dive into change management activities, optimal timing, and alignment with functional milestones, all while considering resource constraints and project timelines. Participants will gain a practical, down-to-earth approach to change management, complete with actionable activity lists, templates, and frameworks applicable to any organization or transformation type. By mastering people-centered approaches and strategic AI integration, participants will be equipped to plan, manage, and deploy change initiatives that drive sustainable results and lasting impact.
        </p>
      </div>
      <div className="">
        {cookies().get("trigonaEnrolled") ? <Material /> : <EnrollForm handler={handleRegistration} />}
      </div>
    </div>
  );
}

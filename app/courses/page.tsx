import { cookies } from "next/headers";
import { Blurb } from "../_components/registration";
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
      <div className="relative h-[500px] w-full bg-base-200">
        <Image className="object-cover z-0 object-center opacity-40 [mask-image:_linear-gradient(to_left,_black_10%,_transparent_80%)]" src={training} alt="Background" fill={true} priority={true} />
        <div className="relative z-10">
          <h1 className="font-semibold pl-[5%] text-4xl lg:text-7xl pt-10">Practical Change Management</h1>
        </div>
        <div className="relative z-10">
          <h1 className="font-semibold text-center text-4xl lg:text-7xl pt-6">Training Series</h1>
        </div>
        <div className="relative z-10 pl-2 mt-24">
          {/* <p className="leading-loose">Are you tired of change initiatives that fall flat? Imagine leading transformations so smooth, they feel effortless. 
              Our <span className="font-semibold">Practical Change Management</span> course reveals the insider strategies used by top global firms, now supercharged with AI. 
              In just 3 weeks, master the art of people-centered change that sticks. Don&apos;t let another transformation fail - 
              discover how to turn resistance into enthusiasm and chaos into opportunity. Ready to become the change guru your organization needs?
            </p> */}
            <ul className="list-disc list-inside pl-3 leading-loose mt-4 font-semibold">
              <li>Down-to-earth approach applicable to any organization or transformation type</li>
              <li>Comprehensive activity lists, templates, and frameworks</li>
              <li>Strategies for navigating the human aspects of change</li>
              <li>Techniques to maximize success in organizational transformations</li>
            </ul>
        </div>
      </div>
      <div className="">
        {/* <Blurb /> */}
        {cookies().get("trigonaEnrolled") ? <Material /> : <EnrollForm handler={handleRegistration} />}
      </div>
    </div>
  );
}

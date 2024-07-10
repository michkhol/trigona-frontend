import { cookies } from "next/headers";
import { Blurb } from "../_components/registration";
import { EnrollForm } from "../_components/enroll-form";
import Material from "../_components/material";
import type { FormInput } from "@/lib/utils";
import Image from "next/image";
import officeBackgroud from "@/public/images/New-Office.jpg";

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
    <div className="flex flex-col items-center gap-4 w-full">
      <div className="relative h-96 w-full">
        <Image className="object-cover z-0 object-center" src={officeBackgroud} alt="Background" fill={true} priority={true} />
        <h1 className="relative z-10 font-serif font-semibold text-center text-white text-5xl pt-40">Practical Change Management<br />Training Series</h1>
      </div>
      <div className="lg:w-[60%]">
        <Blurb />
        {cookies().get("trigonaEnrolled") ? <Material /> : <EnrollForm handler={handleRegistration} />}
      </div>
    </div>
  );
}

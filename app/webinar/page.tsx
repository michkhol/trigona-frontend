import RegisterPage from "../_components/register";
import MaterialPage from "../_components/material";
import { cookies } from "next/headers";
import { sanityClient } from "@/sanity/client";
import { revalidatePath } from "next/cache";

// export const dynamic = 'force-dynamic';

export default function Webinar() {

  async function handleRegistration(name: string, email: string) {
    "use server";

    cookies().set({
      name: "name",
      value: name,
      httpOnly: true,
      path: "/webinar",
      maxAge: 60 * 60 * 24 * 7, // a week
    });

    
  }

  const user = cookies().get("name")
  console.log("User: " + user?.value);

  return <div>{cookies().get("name") ? <MaterialPage /> : <RegisterPage onLogin={handleRegistration} />}</div>

}
import { cookies } from "next/headers";
import Registration from "../_components/registration";
import Material from "../_components/material";
import type { RegisterForm } from "../_components/registration";

export default function Webinar() {
  async function handleRegistration(form: RegisterForm) {
    "use server";

    cookies().set({
      name: "lastName",
      value: form.lastName,
      httpOnly: true,
      path: "/webinar",
      maxAge: 60 * 60 * 24 * 7, // a week
    });
  }

  const user = cookies().get("lastName")
  console.log("User: " + user?.value);

  return <div>{cookies().get("lastName") ? <Material /> : <Registration handler={handleRegistration} />}</div>
  
}

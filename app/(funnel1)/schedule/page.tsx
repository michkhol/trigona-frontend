"use client"

import { use } from "react";
import { InlineWidget } from "react-calendly";
import { notFound } from "next/navigation";
// import { fromBase64 } from "@/lib/utils";
import type { Registrant } from "@/lib/utils";

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

function fromBase64(b: string): Registrant {
  const str = Buffer.from(b, "base64").toString();
  return JSON.parse(str) as Registrant
}

export default function Schedule({searchParams}: Props) {
  const params = use(searchParams);
  let form = null;

  try {
   form = fromBase64(params.id as string)
  } catch(error) {
    console.error(error)
    return notFound();
  }
  // console.log(JSON.stringify(form))

  const userData = { 
    name: form.firstName + " " + form.lastName, 
    email: form.email
  };

  
  return !params.id ? notFound() : (
    <div className="mb-6">
      <InlineWidget url="https://calendly.com/mike-ab3vn/30min" prefill={userData} />
    </div>
  );
}
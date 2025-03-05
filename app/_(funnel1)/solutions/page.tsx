"use client"

import { useRef } from "react";
import { useRouter } from "next/navigation";
import type { Registrant } from "@/lib/utils"
import Solutions1 from "@/app/_components/solutions1"


function toBase64(obj: Registrant): string {
  const str = JSON.stringify(obj);
  return Buffer.from(str).toString("base64");
} 


export default function Solutions() {
  const router = useRouter();

  async function grantAccess(form: Registrant): Promise<void> { 
    router.push("/access?id=" + toBase64(form))
    // console.log("formRef: " + JSON.stringify(formRef.current))
    return Promise.resolve() 
  }
  
  return (
    <Solutions1 handler={grantAccess}/>
  )
}
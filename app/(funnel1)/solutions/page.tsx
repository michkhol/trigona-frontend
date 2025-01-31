"use client"

import { useRouter } from "next/navigation";
import type { Registrant } from "@/lib/utils"
import Solutions1 from "@/app/_components/solutions1"

export default function Solutions() {
  const router = useRouter();

  async function grantAccess(form: Registrant): Promise<void> { 
    const data = { name: form.firstName + " " + form.lastName, email: form.email  }
    const params = new URLSearchParams(data);
    router.push("/solutions2?" + params.toString())
    // console.log("formRef: " + JSON.stringify(formRef.current))
    return Promise.resolve() 
  }
  
  return (
    <Solutions1 handler={grantAccess}/>
  )
}
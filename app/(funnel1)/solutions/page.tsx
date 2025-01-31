"use client"

import { useRef, useState } from "react";
import type { Registrant } from "@/lib/utils"
import Solutions1 from "@/app/_components/solutions1"
import Solutions2 from "@/app/_components/solutions2";

export default function Solutions() {
  const formRef = useRef<Registrant>(undefined);
  const [ access, setAccess ] = useState(false)

  async function grantAccess(form: Registrant): Promise<void> { 
    formRef.current = form;
    setAccess(true);
    // console.log("formRef: " + JSON.stringify(formRef.current))
    return Promise.resolve() 
  }
  
  return (
    access ?  <Solutions2 form={formRef.current!} /> : <Solutions1 handler={grantAccess}/>
  )
}
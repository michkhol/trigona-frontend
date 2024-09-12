"use client";

import { RefObject } from "react";
import { newContact } from "@/lib/utils"
import type { Participant } from "@/lib/utils";
import { useForm } from "react-hook-form";
import type { ModalCheckout } from "./course-checkout";

export function RegisterForm( 
  {priceId, openDialogRef}: { priceId: string, openDialogRef: RefObject<ModalCheckout | undefined>}) {

  const { register, handleSubmit, watch, formState: { errors }  } = useForm<Participant>();

  async function submit(p: Participant) {
    const fd = new FormData()
    fd.append("productId", priceId)
    fd.append("participantEmail", p.email)
    fd.append("participantName", p.name)
    fd.append("participantPhone", p.phone)
    // console.log("Registering: " + JSON.stringify(p, null ,2))
    // console.log("Participant email: " + fd.get("participantEmail"))
    // newContact(fi).then(() => handler(fi))
    return openDialogRef.current!(fd)
  }

  return (
    <div className="mb-6">    
      <div className="text-center mb-6 mt-6">
        <h1 className="text-5xl">Participant Registration</h1>
      </div>
      <form onSubmit={handleSubmit(submit)}>
        <div className="form-control max-w-xl mx-auto my-4">
          <input type="text" placeholder="Name" {...register("name")} required={true} className="input input-bordered max-w-xl border-red-800"/>
        </div>
        <div className="form-control max-w-xl mx-auto my-4">
            <input type="email" placeholder="Email" {...register("email")} required={true} className="input input-bordered max-w-xl border-red-800" />
        </div>
        <div className="form-control max-w-xl mx-auto my-4">
            <input type="text" placeholder="Company (optional)" {...register("company")} required={false} className="input input-bordered max-w-xl border-red-800" />
        </div>
        <div className="form-control max-w-xl mx-auto my-4">
            <input type="tel" placeholder="Phone: 555-123-4567" {...register("phone", { required: true, validate: v => v.match(/\d/g)?.length === 10 })} 
            className="input input-bordered max-w-xl border-red-800" />
            {errors.phone && <span className="text-red-500 text-sm mt-1">Enter a valid phone number</span>}
        </div>
        <div className="form-control max-w-xl mx-auto my-4">
            <input type="text" placeholder="Years in the industry (optional)" {...register("yearsInIndustry")} required={false} className="input input-bordered max-w-xl border-red-800" />
        </div>
        <div className="flex justify-center">
        <button className="mt-6 bg-red-800 text-xl text-white px-10 py-3 font-bold rounded-full hover:bg-orange-600 transition-colors" 
          type="submit">Pay Now</button>
        </div>
      </form>
    </div>
  );
}
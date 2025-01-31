"use client";

import { newContact } from "@/lib/utils"
import type { Registrant } from "@/lib/utils";
import { useForm, SubmitHandler } from "react-hook-form";
import { magnetNotify } from "@/lib/utils";
import { useState } from "react";


type OnRegister = (form: Registrant) => Promise<void>;

export function FunnelForm( {handler}: { handler : OnRegister}) {
  const { register, handleSubmit, watch, formState: { errors }  } = useForm<Registrant>();
  const [ loading, setLoading ] = useState(false);
  // const onSubmit: SubmitHandler<FormInput> = submit

  async function submit(fi: Registrant) {
    console.log("submitted: " + JSON.stringify(fi, null ,2))
    setLoading(true);
    // return magnetNotify(fi).then(() => handler(fi))
    return handler(fi)
  }
  
  return (<>
    <div className="mx-4">    
      <form onSubmit={handleSubmit(submit)}>
        <div className="form-control max-w-xl mx-auto my-4">
          <input type="text" placeholder="First name" {...register("firstName")} required={true} className="input input-bordered max-w-xl border-red-800"/>
        </div>
        <div className="form-control max-w-xl mx-auto my-4">
          <input type="text" placeholder="Last name" {...register("lastName")} required={true} className="input input-bordered max-w-xl border-red-800" />
        </div>
        <div className="form-control max-w-xl mx-auto my-4">
            <input type="email" placeholder="Email" {...register("email")} required={true} className="input input-bordered max-w-xl border-red-800" />
        </div>
        <div className="mt-6 flex justify-center">
          { loading ?
          <button className="btn bg-red-800 w-full text-white text-2xl font-normal mt-4">
            <span className="loading loading-spinner"></span></button>
          : <button className="btn w-full gradient-anim-btn text-white text-2xl font-normal mt-4">GET INFORMATION AND FREE VIDEO</button>
         }
        </div>
      </form>
    </div>
    <div className="text-center text-sm mt-2">
      <p>Your data is secure and will not be shared. By clicking the button, you agree to the privacy policy.</p>
    </div>
  </>
  );
}
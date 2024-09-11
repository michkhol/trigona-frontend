"use client";

import { newContact } from "@/lib/utils"
import type { FormInput } from "@/lib/utils";
import { useForm, SubmitHandler } from "react-hook-form";

type OnRegister = (form: FormInput) => Promise<void>;

export function MagnetForm( {handler}: { handler : OnRegister}) {
  const { register, handleSubmit, watch, formState: { errors }  } = useForm<FormInput>();
  // const onSubmit: SubmitHandler<FormInput> = submit

  async function submit(fi: FormInput) {
    console.log("submitted: " + JSON.stringify(fi, null ,2))
    return newContact(fi).then(() => handler(fi))
  }
  
  return (<>
    <div>    
      <div className="text-center mb-6 mt-6">
        <h1 className="text-5xl">Request More Information</h1>
      </div>
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
        <div className="form-control max-w-xl mx-auto my-4">
            <input type="tel" placeholder="Phone: 555-123-4567" {...register("phone", { required: true, validate: v => v.match(/\d/g)?.length === 10 })} 
            className="input input-bordered max-w-xl border-red-800" />
            {errors.phone && <span className="text-red-500 text-sm mt-1">Enter a valid phone number</span>}
        </div>
        <div className="form-control max-w-xl mx-auto my-4">
          <label className="label justify-start">
            <input type="checkbox" {...register("sms")} className="checkbox border-red-800"/>
            <span className="label-text ml-2">Agree to receive texts or SMS</span>
          </label>
        </div>
        <div className="flex justify-center">
        <button className="mt-6 bg-red-800 text-xl text-white px-10 py-3 font-bold rounded-full hover:bg-orange-600 transition-colors" type="submit">Submit</button>
        </div>
      </form>
    </div>
    <div className="text-center text-sm mt-2">
      <p>You must have cookies enabled to avoid multiple registrations. By submitting the form you agree
         to our <a href="/terms" className="link">Terms and Conditions</a> and <a href="https://www.zoho.com/privacy.html" className="link">Privacy Policy</a>.</p>
    </div>
  </>
  );
}

import officeBackgroud from "@/public/images/New-Office.jpg"
import Image from "next/image";
import Link from "next/link";
import img from "@/public/images/75454621small.jpeg"

export default function Contact() {
  
  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <div className="relative h-96 w-full">
        <Image className="object-cover z-0 object-center" src={officeBackgroud} alt="Background" fill={true} />
        <h1 className="relative z-10 font-serif font-semibold text-center text-white text-5xl pt-40">Contact Us</h1>
      </div>
      <div className="text-center">
        <h1 className="font-serif font-semibold text-3xl mt-10">We are here to help</h1>
      </div>
      <div className="lg:w-[60%]">
        <hr className="my-6"/>
        
      </div>
      <div className="grid grid-cols-2 gap-4 lg:w-[60%]">
        <div>
          <p className="">If you need assistance, have a question or feedback, please contact us.</p>
          <p> We look forward to talking with you!</p>
          <form name="contact" method="POST" data-netlify="true" action="/thanks.html">
            <input type="hidden" name="form-name" value="contact" />
            <input type="hidden" name="subject" value="Inquiry from trigona.netlify.app" />
            <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Name:</span>
            </div>
            <input type="text" placeholder="Required" className="input input-bordered w-full max-w-xs" name="name"/>
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Your email:</span>
              </div>
              <input type="text" placeholder="Required" className="input input-bordered w-full max-w-xs" name="email" />
            </label>
          <label className="form-control">
            <div className="label">
              <span className="label-text">Message:</span>
            </div>
            <textarea className="textarea textarea-bordered h-24" placeholder="Required" name="message" ></textarea>
          </label>
          <p className="text-center">
            <button className="btn btn-primary mt-6" type="submit">Send</button>
          </p>
        </form>
        </div>
        <div>
         <Image src={img} alt=""/>
        </div>
      </div>
    </div>
  );
}


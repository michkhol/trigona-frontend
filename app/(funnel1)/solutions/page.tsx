import Image from "next/image"
import Testimonials from "@/app/_components/testimonials"
import wb from "@/public/images/wb-big.webp"
import va from "@/public/images/va-big.webp"
import nha from "@/public/images/nha-big.webp"
import wendys from "@/public/images/wendys-big.webp"
import btg from "@/public/images/btg-big.webp"
import kpmg from "@/public/images/kpmg-big.webp"
import mariott from "@/public/images/mariott-big.webp"
import deloitte from "@/public/images/deloitte-big.webp"
import kyndryl from "@/public/images/kyndryl-big.webp"
import navy from "@/public/images/navy-big.webp"
import principal from "@/public/images/principal2.webp"

import { FunnelForm } from "@/app/_components/funnel-form"
import type { Registrant } from "@/lib/utils"

export default function Solutions() {
  async function handleFunnel(form: Registrant): Promise<void> { 
    "use server"
    return Promise.resolve() 
  }

  return (
    <div>
      <div className="flex justify-center bg-base-200 pb-20">
        <div className="lg:max-w-[1200px] mt-6 px-10">
          <p className="text-3xl text-red-800">ARE YOU LEADING A TRANSFORMATION IN YOUR ORGANIZATION?</p>
          <p className="mt-6 text-5xl font-bold">We Ensure Your Program&apos;s Success with Proven Change Management Solutions</p>
          <div className="mt-10 px-6">
              {/* TODO: Replace with SVG checkmark */}
              <ol className="list-disc list-image-[url(/images/icons8-checkmark-24.png)] leading-10 text-2xl">
                <li><span className="font-bold">Two decades of experience</span> with the top global consulting firms</li>
                <li><span className="font-bold">Field-tested framework</span> with measurable, ROI-focused transformation</li>
                <li>Either <span className="font-bold">we train your team</span> or take the lead ourselves</li>
              </ol>
          </div>
          <div className="flex lg:flex-row flex-col gap-16 mt-6">
            <div>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/6NZx4YtVKzI?si=dhZMHFH8W8cb7uSN" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
            <div>
              <FunnelForm handler={handleFunnel}/>
              {/* <button className="btn w-full gradient-anim-btn text-white text-2xl font-normal mt-4">GET INFORMATION AND FREE PDF</button> */}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 lg:px-10 py-6 px-4">
        <p className="text-center text-4xl text-red-800">TRUSTED BY</p>
        <div className="grid lg:grid-cols-5 lg:grid-rows-2 grid-cols-2 grid-rows-5 items-center justify-center gap-6 mt-6">
         <Image src={va} alt="Picture" width={200}/>
         <Image src={kpmg} alt="Picture" width={200}/>
         <Image src={mariott} alt="Picture" width={200}/>
         <Image src={nha} alt="Picture" width={200}/>
         <Image src={wendys} alt="Picture" width={200}/>
         <Image src={btg} alt="Picture" width={200}/>
         <Image src={deloitte} alt="Picture" width={200}/>
         <Image src={kyndryl} alt="Picture" width={200}/>
         <Image src={wb} alt="Picture" width={200}/>
         <Image src={navy} alt="Picture" width={200}/>
        </div>
      </div>
      <div className="bg-base-200 py-6">
        <Testimonials />
      </div>
      <div className="flex justify-center mt-6 lg:px-10 py-6 px-4">
        <div className="flex lg:flex-row flex-col max-w-[900px]">
          <div className="">
            <h1 className="text-5xl font-bold">About <span className="text-red-800">Trigona Consulting</span></h1>
            <div className="mt-4 bg-black w-28 h-[1px]"></div>
            <div className="mt-4 text-xl">
              <p>I am <span className="font-bold">Olga Denisova</span>, Founder and Managing Principal of Trigona Consulting L.L.C.</p>
              <p className="mt-4"><span className="font-bold">I&apos;ve spent nearly two decades working with the top global consulting firms</span>, leading major change management initiatives for clients across countless industries. At Trigona Consulting, we know exactly how to ensure successful transformations.</p>
              <p className="mt-4 font-bold">We make change happen.</p>
            </div>
          </div>
          <Image src={principal} alt="Principal" height={400}/>
        </div>
      </div>
    </div>
  )
}
import Image from "next/image"
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
import stars from "@/public/images/5stars.webp"
import steve from "@/public/images/mariott-steve-heitzner.webp"
import donna from "@/public/images/kyndryl-donna-walker.webp"
import tom from "@/public/images/navy-tom-harker.webp"

import { FunnelForm } from "@/app/_components/funnel-form"
import type { Registrant } from "@/lib/utils"
import ClientLogos from "./clientlogos"

type OnRegister = (form: Registrant) => Promise<void>;

export default function Solutions1({handler}: { handler : OnRegister}) {
  return (
    <div>
      <div className="flex justify-center bg-base-200 pb-20">
        <div className="lg:max-w-[1200px] mt-6 lg:pl-0 pl-2">
          <p className="text-3xl text-red-800">ARE YOU LEADING A TRANSFORMATION IN YOUR ORGANIZATION?</p>
          <p className="mt-6 lg:text-5xl text-3xl font-bold">We Ensure Your Program&apos;s Success with Proven Change Management Solutions</p>
          <div className="mt-10 px-6">
              <ol className="lg:pl-0 pl-4 list-disc list-image-[url(/images/circle-check-big.png)] leading-10 text-2xl">
                <li><span className="font-bold">&nbsp;Two decades of experience</span> with the top global consulting firms</li>
                <li><span className="font-bold">&nbsp;Field-tested framework</span> with measurable, ROI-focused transformation</li>
                <li>&nbsp;Either <span className="font-bold">we train your team</span> or take the lead ourselves</li>
              </ol>
          </div>
          <div className="flex lg:flex-row flex-col gap-16 mt-6">
            <div>
            <iframe className="lg:w-[560px] lg:h-[315px] w-[400px] h-[225px]" src="https://www.youtube.com/embed/6NZx4YtVKzI?rel=0" title="YouTube video player" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
            <div>
              <FunnelForm handler={handler}/>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 lg:px-10 py-6 px-4">
        <p className="text-center text-4xl text-red-800">TRUSTED BY</p>
        <ClientLogos />
      </div>
      <div className="bg-base-200 py-6">
      <div className="grid grid-cols-1 grid-rows-3 lg:grid-cols-3 lg:grid-rows-1 gap-4 text-center text-xl mx-4 my-6">
          <div className="flex flex-col">
            <Image className="m-auto" src={steve} alt="mariott" height={100} />
            <div>
              <p className="text-red-800 font-bold">Steve Heitzner</p>
              <p className="text-sm">Chief Sales and Marketing Officer Americas</p>
              <p className="text-sm font-bold">Marriott International</p>
            </div>
            <Image className="m-auto" src={stars} alt="stars" width={100}/>
            <p className="">&quot;Olga&apos;s expertise in organizational change management was an invaluable asset to us during challenging times.&quot;</p>
          </div>
          <div className="flex flex-col">
            <Image className="m-auto" src={donna} alt="kyndryl" height={100} />
            <div>
              <p className="text-red-800 font-bold">Donna Zaruba Walker</p>
              <p className="text-sm">VP CIO Transformations</p>
              <p className="text-sm font-bold">Kyndryl</p>
            </div>
            <Image className="m-auto" src={stars} alt="stars" width={100}/>
            <p className="">&quot;Highly recommend for programs of any size or complexity.&quot;</p>
          </div>
          <div className="flex flex-col">
            <Image className="m-auto" src={tom} alt="navy" height={100} />
            <div>
              <p className="text-red-800 font-bold">Tom Harker</p>
              <p className="text-sm">Former Acting Secretary</p>
              <p className="text-sm font-bold">Department of the Navy</p>
            </div>
            <Image className="m-auto" src={stars} alt="stars" width={100}/>
            <p className="">&quot;Exceptional work and deep expertise in organizational change management in fast-paced and complex environments.&quot;</p>
          </div>
        </div>
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
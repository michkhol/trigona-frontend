import Image from "next/image"
import Testimonials from "@/app/_components/testimonials"
import CaseStudiesMC from "@/app/_components/case-studies-mc"
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
import principal3 from "@/public/images/principal3.webp"
import { Registrant } from "@/lib/utils"

export default function Solutions2({form}: {form: Registrant}) {
  function scheduleButton() {
    return (<button className="btn w-full h-[80px] gradient-anim-btn text-white text-3xl font-normal mt-4">Claim your FREE Consultation Call</button>)
  }
  console.log("Registrant: " + JSON.stringify(form))
  return (
    <div>
      <div className="flex justify-center bg-base-200 pb-20">
        <div className="lg:max-w-[1200px] mt-6 px-10">
          <p className="text-3xl text-red-800">ARE YOU LEADING A TRANSFORMATION IN YOUR ORGANIZATION?</p>
          <p className="mt-6 text-5xl font-bold">We Ensure Your Program&apos;s Success with Proven Change Management Solutions</p>
          <div className="mt-10">
            <h1 className="text-4xl font-bold"><span className="text-red-800">STEP 1 OF 2:</span> Watch the Video</h1>
          </div>
          <div className="flex lg:flex-row flex-col gap-16 mt-6">
            <div>
            <iframe width="800" height="450" src="https://www.youtube.com/embed/I9H8irEMnf4?rel=0" title="YouTube video player" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex lg:flex-row flex-col gap-6 lg:max-w-[1000px] mt-6 px-10">
          <Image src={principal3} alt="principal3" height={400}/>
          <div>
            <h1 className="text-4xl font-bold"><span className="text-red-800">STEP 2 OF 2:&nbsp;</span>Schedule a Free Consultation with Me and My Team</h1>
            {scheduleButton()}
            <p className="text-2xl mt-2">...and learn how our field-tested, data-driven framework <span className="font-bold">ensures your project&apos;s success in the fastest, easiest, and safest way possible.</span>
            </p>
            <p className="text-2xl mt-2">We will discuss your current challenges and <span className="font-bold">tailor a roadmap</span> to guide your organization successfully through your strategic initiative.</p>
          </div>
        </div>
      </div>
      <div className="mt-6 lg:px-10 py-6 px-4 bg-base-200">
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
      <div className="py-6">
        <Testimonials />
      </div>
      <div className="text-center w-full mt-6">
        <div className="my-12 bg-red-800 h-[2px] w-full"/>
        <h1 className="my-6 text-6xl font-bold">Do You Want To Be <span className="text-red-800">Our Next Success Story</span>?</h1>
        <p className="my-6 text-2xl">Every single one of these case studies, that got these successful results, started with a consultation call a few months ago.</p>
        {scheduleButton()}
        <div className="mt-12 bg-red-800 h-[2px] w-full"/>
      </div>
      <div className="bg-base-200">
        <h1 className="mb-10 pt-10 mx-4 text-center text-3xl lg:text-5xl font-bold">Results We have Delivered for Organizations Just Like Yours <span className="text-red-800 font-bold italic"></span></h1>
        <CaseStudiesMC />
      </div>
      <div className="text-center w-full">
        <div className="bg-red-800 h-[2px] w-full"/>
        <h1 className="mt-12 text-6xl font-bold"><span className="text-red-800">Do You Want to Ensure the Success </span>of Your Transformation?</h1>
        <p className="my-6 text-2xl">Every single one of these case studies, that got these successful results, started with a consultation call a few months ago.</p>
        {scheduleButton()}
        <div className="mt-12 bg-red-800 h-[2px] w-full"/>
      </div>
    </div>
  )
}
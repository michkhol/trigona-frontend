import Image from "next/image"
import deptOfNavy from "@/public/images/Department of the Navy.gif"
import deptOfVA from "@/public/images/Department of Veteran Administration.png"
import deloitte from "@/public/images/Deloitte.png"
import kyndryl from "@/public/images/Kyndryl.png"
import mariott from "@/public/images/Marriott_International.png"
import btg from "@/public/images/logo-btg-hs-horizontal-teal.png"
import natHeritage from "@/public/images/National Heritage Academies.png"
import wendys from "@/public/images/wendys.png"
import warnerBros from "@/public/images/Warner Bros. Discovery web.png"
import kpmg from "@/public/images/kpmg-logo-png-transparent.png"


const images = [deptOfNavy, deptOfVA, deloitte, kyndryl, mariott, warnerBros, wendys, btg, natHeritage, kpmg];


export default function Logos() {
  return (
    <div className="w-full inline-flex flex-nowrap overflow-hidden" >
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-12 [&_img]:max-w-none animate-infinite-scroll">
        {
          images.map((logo) => {
            return (<li key={logo.src}><Image src={logo} alt={logo.src} height={50} /></li>)
          })
        }
    </ul>
    <ul className="flex items-center justify-center md:justify-start [&_li]:mx-12 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
        {
          images.map((logo) => {
            return (<li key={logo.src}><Image src={logo} alt={logo.src} height={50} /></li>)
          })
        }
    </ul>
    </div>
  );
}
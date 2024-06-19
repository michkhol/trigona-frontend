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


const images = [deptOfNavy, deptOfVA, deloitte, kyndryl, mariott, warnerBros, wendys, btg, natHeritage];


export default function Logos() {
  return (
    <div className="grid grid-rows-1 grid-cols-9 gap-4 items-center" >
    {
      images.map((logo) => {
        return <Image key={logo.src} src={logo} alt={logo.src} />
      })
    }
    </div>
  );
}
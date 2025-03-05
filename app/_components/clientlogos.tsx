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

export default function ClientLogos() {
  return (
    <div className="grid lg:grid-cols-5 lg:grid-rows-2 grid-cols-2 grid-rows-5 items-center justify-center gap-6 mt-6">
    <Image className="m-auto" src={va} alt="Picture" width={200}/>
    <Image className="m-auto" src={kpmg} alt="Picture" width={200}/>
    <Image className="m-auto" src={mariott} alt="Picture" width={200}/>
    <Image className="m-auto" src={nha} alt="Picture" width={200}/>
    <Image className="m-auto" src={wendys} alt="Picture" width={200}/>
    <Image className="m-auto" src={btg} alt="Picture" width={200}/>
    <Image className="m-auto" src={deloitte} alt="Picture" width={200}/>
    <Image className="m-auto" src={kyndryl} alt="Picture" width={200}/>
    <Image className="m-auto" src={wb} alt="Picture" width={200}/>
    <Image className="m-auto" src={navy} alt="Picture" width={200}/>
   </div>

  );
}
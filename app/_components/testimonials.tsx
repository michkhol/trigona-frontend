import Image from "next/image";
import stars from "@/public/images/5stars.webp"
import steve from "@/public/images/mariott-steve-heitzner.webp"
import donna from "@/public/images/kyndryl-donna-walker.webp"
import tom from "@/public/images/navy-tom-harker.webp"
import john from "@/public/images/mit-john-adams.webp"
import robert from "@/public/images/ati-robert-partrick.webp"
import nikki from "@/public/images/wendys-nikki-omelian.webp"

export default function Testimonials() {
  return (
      <div className="">
        <div className="grid grid-cols-1 grid-rows-6 lg:grid-cols-3 lg:grid-rows-2 gap-4 text-center text-xl mx-4 my-6">
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
          <div className="flex flex-col">
            <Image className="m-auto" src={john} alt="mit" height={100} />
            <div>
              <p className="text-red-800 font-bold">John Adams</p>
              <p className="text-sm">Director of Finance</p>
              <p className="text-sm font-bold">MIT Lincoln Laboratory</p>
            </div>
            <Image className="m-auto" src={stars} alt="stars" width={100}/>
            <p className="">&quot;Organizational change management experts...&quot;</p>
          </div>
          <div className="flex flex-col">
            <Image className="m-auto" src={robert} alt="ati" height={100} />
            <div>
              <p className="text-red-800 font-bold">Robert W Patrick Jr.</p>
              <p className="text-sm">Senior Director</p>
              <p className="text-sm font-bold">ATI</p>
            </div>
            <Image className="m-auto" src={stars} alt="stars" width={100}/>
            <p className="">&quot;Highly recommend! Worked with Olga and her team as part of a successful change management effort with the US Navy Financial Management team.&quot;</p>
          </div>
          <div className="flex flex-col">
            <Image className="m-auto" src={nikki} alt="wendys" height={100} />
            <div>
              <p className="text-red-800 font-bold">Nikki Omelian</p>
              <p className="text-sm">Change Management Lead</p>
              <p className="text-sm font-bold">Wendy&apos;s</p>
            </div>
            <Image className="m-auto" src={stars} alt="stars" width={100}/>
            <p className="">&quot;I highly recommend Olga and her team for any change management initiative - their strategic thinking, deep expertise, and unwavering commitment to success are unparalleled.&quot;</p>
          </div>
        </div>

      </div>
  );
}


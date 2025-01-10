import Image from "next/image";
import stars from "@/public/images/5stars.webp"
import steve from "@/public/images/mariott-steve-heitzner.webp"
import donna from "@/public/images/kyndryl-donna-walker.webp"
import tom from "@/public/images/navy-tom-harker.webp"
import john from "@/public/images/mit-john-adams.webp"
import robert from "@/public/images/ati-robert-partrick.webp"
import nikki from "@/public/images/wendys-nikki-omelian.webp"
import Link from "next/link";

export default function Testimonials() {
  return (
      <div className="">
        <div className="mt-10">
          <h1 className="ml-4 text-center text-6xl lg:text-8xl">Testimonials<span className="text-red-800 font-bold italic"></span></h1>
        </div>
        <div className="grid grid-cols-1 grid-rows-6 lg:grid-cols-3 lg:grid-rows-2 gap-4 text-center text-xl mx-4 mt-6">
          <div className="grid grid-cols-1 grid-rows-4">
            <Image className="m-auto" src={stars} alt="stars" width={100}/>
            <p className="">"Olga's expertise in organizational change management was an invaluable asset to us during challenging times."</p>
            <Image className="m-auto" src={steve} alt="mariott" height={100} />
            <div>
              <p className="text-red-800 font-bold">Steve Heitzner</p>
              <p className="text-sm">Chief Sales and Marketing Officer Americas</p>
              <p className="text-sm font-bold">Marriott International</p>
            </div>
          </div>
          <div className="grid grid-cols-1 grid-rows-4">
            <Image className="m-auto" src={stars} alt="stars" width={100}/>
            <p className="">"Highly recommend for programs of any size or complexity."</p>
            <Image className="m-auto" src={donna} alt="kyndryl" height={100} />
            <div>
              <p className="text-red-800 font-bold">Donna Zaruba Walker</p>
              <p className="text-sm">VP CIO Transformations</p>
              <p className="text-sm font-bold">Kyndryl</p>
            </div>
          </div>
          <div className="grid grid-cols-1 grid-rows-4">
            <Image className="m-auto" src={stars} alt="stars" width={100}/>
            <p className="">"Highly recommend for programs of any size or complexity."</p>
            <Image className="m-auto" src={tom} alt="navy" height={100} />
            <div>
              <p className="text-red-800 font-bold">Tom Harker</p>
              <p className="text-sm">Former Acting Secretary Department</p>
              <p className="text-sm font-bold">Navy</p>
            </div>
          </div>
          <div className="grid grid-cols-1 grid-rows-4">
            <Image className="m-auto" src={stars} alt="stars" width={100}/>
            <p className="">"Organizational change management experts..."</p>
            <Image className="m-auto" src={john} alt="mit" height={100} />
            <div>
              <p className="text-red-800 font-bold">John Adams</p>
              <p className="text-sm">Director of Finance</p>
              <p className="text-sm font-bold">MIT Lincoln Laboratory</p>
            </div>
          </div>
          <div className="grid grid-cols-1 grid-rows-4">
            <Image className="m-auto" src={stars} alt="stars" width={100}/>
            <p className="">"Highly recommend! Worked with Olga and her team as part of a successful change management effort with the US Navy Financial Management team."</p>
            <Image className="m-auto" src={robert} alt="ati" height={100} />
            <div>
              <p className="text-red-800 font-bold">Robert W Patrick Jr.</p>
              <p className="text-sm">Senior Director</p>
              <p className="text-sm font-bold">ATI Defense</p>
            </div>
          </div>
          <div className="grid grid-cols-1 grid-rows-4">
            <Image className="m-auto" src={stars} alt="stars" width={100}/>
            <p className="">"I highly recommend Olga and her team for any change management initiative - their strategic thinking, deep expertise, and unwavering commitment to success are unparalleled."</p>
            <Image className="m-auto" src={nikki} alt="wendys" height={100} />
            <div>
              <p className="text-red-800 font-bold">Nikki Omelian</p>
              <p className="text-sm">Change Management</p>
              <p className="text-sm font-bold">Wendy's Company</p>
            </div>
          </div>
        </div>

      </div>
  );
}


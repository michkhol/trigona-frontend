import officeBackgroud from "@/public/images/New-Office.jpg"
import Image from "next/image";
import Link from "next/link";
import { SanityImageAsset, SimplePage } from "@/sanity/sanity.types";
import { sanityClient } from "@/sanity/client";

//import img from "@/public/images/102883856small.jpeg"

function bodyText(body: SimplePage["body"], index: number): string {
  const textArray = body!.map((e) => {
    if (e._type === "block" && e.listItem === undefined) {
      if (e.children != undefined) {
        const entry = e.children.map(e => e.text!).join(" ") 
        return entry;
      }
      else {
        return "";
      }
    }
    else return "";  
  })
  return textArray.filter(s => s.length != 0)[index]
}

function imageUrl(body: SimplePage["body"]) {
  const image = body!.find(e => e._type === "image")
  if (image != undefined && "asset" in image) {
    const asset = image.asset as unknown as SanityImageAsset; // Force the type cast, we got it from groq
    return asset.url;
  }
  else throw new Error("No asset found in the 'image' object");
}

interface BulletList {
  key: string;
  item: string;
}

function bulletList(body: SimplePage["body"]): Array<BulletList> {
  const items = body!.map((e) => {
    if (e._type === "block" && e.listItem === "bullet") {
      if (e.children != undefined) {
        const item = e.children[0].text as string 
        return { key: e._key, item: item }
      }
      else {
        return { key: e._key, item: "" };
      }
    }
    else return { key: e._key, item: "" };  
  })
  return items.filter(e => e.item.length != 0)
}

export default async function About() {

  const data = await sanityClient.fetch(
    `*[_type == "simplePage" || slug.current == "about"]{
        slug,
        title,
        body[] {
          ...,
          asset -> {
            ...
          }
          
        }
      }`, 
    {}, {next: { revalidate: 60}}
  );
  // console.log(data);
  
  const page: SimplePage = data[0];
  //console.log(page)
  // console.log(bulletList(page.body));

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <div className="relative h-96 w-full">
        <Image className="object-cover z-0 object-center" src={officeBackgroud} alt="Background" fill={true} />
        <h1 className="relative z-10 font-serif font-semibold text-center text-white text-5xl pt-40">About Us</h1>
      </div>
      <div className="text-center">
        <h1 className="font-serif font-semibold text-3xl mt-10">{page.title}</h1>
      </div>
      <div className="lg:w-[60%]">
        <hr className="my-6"/>
        <Image className="hidden lg:inline float-right" src={imageUrl(page.body)!} alt="About image" width={400} height={240}/>
        <span className="">{bodyText(page.body, 0)}
          {/*Trigona Consulting L.L.C. is a
                    woman owned, SBA certified small business that provides organizational change
                    management solutions for federal, state and commercial clients during organizational and IT system
                    transformations. With field-tested methodologies and leading practices in behavioral change
  management, we ensure that organizations maximize their project&apos;s ROI through:*/}
                    <ul className="list-disc list-inside ml-6">
                      {bulletList(page.body).map(i => <li key={i.key}>{i.item}</li>)}
                      {/*
                      <li>Stakeholder engagement</li>
                      <li>Rapid change adoption</li>
                      <li>Implementation of quick wins and foundation building processes</li>
                      <li>Effective enablement for go-live and post-go-live</li>*/}
                    </ul>
                    {bodyText(page.body, 1)}
                    {/*
                    With extensive experience gained at Big 5 consulting companies and applied at
                      multiple organizations nationwide, we provide our customers with holistic and comprehensive change
management strategy without a price tag of a big consulting firm.*/}</span>
      </div>
      <div>
        <Link className="btn btn-primary" href="/contact" >Learn More</Link>
      </div>
    </div>
 
  );
}

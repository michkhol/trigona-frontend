import officeBackgroud from "@/public/images/New-Office.jpg"
import Image from "next/image";
import Link from "next/link";
import { SanityImageAsset, SimplePage } from "@/sanity/sanity.types";
//import img from "@/public/images/102883856small.jpeg"

type StrictBody = Exclude<SimplePage["body"], undefined>
type BodyElement = StrictBody[number]
type Block = Extract<BodyElement, {_type: "block"}>

function bodyText(body: SimplePage["body"], index: number): string {
  if (body != undefined) {
    const textArray = body.map((e) => {
      if (e._type === "block" && e.listItem === undefined) {
        if (e.children != undefined) {
          const entry = e.children.map(e => e.text as string).join(" ") 
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
  else throw new Error("Body is not found in response")
}

function imageUrl(body: SimplePage["body"]) {
  if (body != undefined) {
    const image = body.find(e => e._type === "image")
    if (image != undefined && "asset" in image) {
      const asset = image.asset as unknown as SanityImageAsset; // Force the type cast, we got it from groq
      return asset.url as string;
    }
    else throw new Error("No asset found in the 'image' object");
  }
  else throw new Error("Body is not found in response");
}

interface BulletList {
  key: string;
  item: string;
}

function bulletList(body: SimplePage["body"]): Array<BulletList> {
  if (body != undefined) {
    const items = body.map((e) => {
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
  else throw new Error("Body is not found in response")
}

export default async function About() {
  const about = await fetch("https://c5f8ymr4.api.sanity.io/v2022-03-07/data/query/production?query=*%5Bslug.current+%3D%3D+%22about%22%5D%7B%0A++slug%2C%0A++title%2C%0A++body%5B%5D+%7B%0A++++...%2C%0A++++asset+-%3E+%7B%0A++++++...%0A++++%7D%0A++++%0A++%7D%0A%7D",
    {next: { revalidate: 60}}
  )

  const js = await about.json();
  const page: SimplePage = js.result[0];
  //console.log(page.body)
  console.log(bulletList(page.body));

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <div className="relative h-96 w-full">
        <Image className="object-cover z-0 object-center" src={officeBackgroud} alt="Background" fill={true} />
        <h1 className="relative z-10 font-serif font-semibold text-center text-white text-5xl pt-40">ABOUT US</h1>
      </div>
      <div className="text-center">
        <h1 className="font-serif font-semibold text-3xl mt-10">{page.title}</h1>
      </div>
      <div className="lg:w-[60%]">
        <hr className="my-6"/>
        <Image className="hidden lg:inline float-right" src={imageUrl(page.body)} alt="About image" width={400} height={240}/>
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

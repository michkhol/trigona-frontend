import officeBackgroud from "@/public/images/New-Office.jpg"
import Image from "next/image";
import Link from "next/link";
import img from "@/public/images/102883856small.jpeg"
import { PortableText, PortableTextComponents } from "next-sanity";
import { sanityClient } from "@/sanity/client";
import { getImageDimensions } from "@sanity/asset-utils";
import { SanityImageSource } from "@sanity/asset-utils";
import { SanityImageAsset } from "@/sanity/sanity.types";
import { SanityImageObjectStub } from "@sanity/asset-utils";
import { SimplePage } from "@/sanity/sanity.types";

const BlockImageComponent = ({value, isInline}: { value: SanityImageSource, isInline: boolean}) => {
  const asset = (value as SanityImageObjectStub).asset as SanityImageAsset

  const {width, height} = getImageDimensions(value);
  return (
    <Image
      src={asset.url!}
      width={width}
      height={height}  
      alt={asset.altText || ' '}
      loading="lazy"
      className="hidden lg:inline float-right"
    />
  )
}

const components: PortableTextComponents = {
  types: {
    image: BlockImageComponent,
    // Any other custom types you have in your content
    // Examples: mapLocation, contactForm, code, featuredProjects, latestNews, etc.
  },
  list: {
    bullet: ({children}) => <ul className="list-disc list-inside ml-6">{children}</ul>,
  },
}

export default async function About() {
  const data = await sanityClient.fetch(
    `*[_type == "simplePage" && slug.current == "about"]{
      ...,
      body[] {
        ...,
        asset ->
      }
    }[0]`, 
    {}, {next: { revalidate: 60}}
  );

  // console.log(data)

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <div className="relative h-96 w-full">
        <Image className="object-cover z-0 object-center" src={officeBackgroud} alt="Background" fill={true} />
        <h1 className="relative z-10 font-serif font-semibold text-center text-white text-5xl pt-40">About Us</h1>
      </div>
      <div className="text-center">
        <h1 className="font-serif font-semibold text-3xl mt-10">{data.title}</h1>
      </div>
      <div className="lg:w-[60%]">
        <hr className="my-6"/>
        <PortableText value={data.body} components={components}/>
        {/*
        <Image className="hidden lg:inline float-right" src={img} alt="About image" width={400} height={240}/>
        <span className="">
        Trigona Consulting L.L.C. is a woman owned boutique consulting firm, that provides 
        transformation delivery solutions for commercial and government clients during business, organizational and digital transformations. 
        With field-tested methodologies and leading practices, we ensure that organizations maximize their project&apos;s ROI through:
                    <ul className="list-disc list-inside ml-6">
                      <li>Targeted change management solutions</li>
                      <li>Effective organizational design and operating model optimization</li>
                      <li>Results driven fractional leadership</li>
                      <li>Capability building training offerings</li>
                    </ul>
                    
                    With an extensive experience gained at Big-5 consulting firms and applied across multiple organizations nationwide, 
                    we provide our clients with holistic and comprehensive transformation implementation support.</span>
                    */}
      </div>
      <div>
        <Link className="btn btn-primary" href="/contact" >Learn More</Link>
      </div>
    </div>
 
  );
}

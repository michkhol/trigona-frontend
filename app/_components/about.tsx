import Image from "next/image";
import { PortableText, PortableTextComponents } from "next-sanity";
import { sanityClient } from "@/sanity/client";
import { getImageDimensions } from "@sanity/asset-utils";
import { SanityImageSource } from "@sanity/asset-utils";
import { SanityImageAsset } from "@/sanity/sanity.types";
import { SanityImageObjectStub } from "@sanity/asset-utils";
import { SimplePage } from "@/sanity/sanity.types";
import img from "@/public/images/director.jpg"
import DecoratedTitle from "./decorated-title";
import Link from "next/link";

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
      className="hidden lg:inline lg:float-right"
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

export default function About() {
  // const data = await sanityClient.fetch(
  //   `*[_type == "simplePage" && slug.current == "about"]{
  //     ...,
  //     body[] {
  //       ...,
  //       asset ->
  //     }
  //   }[0]`, 
  //   {}, {next: { revalidate: 60}}
  // );

  // console.log(data)

  return (
    <>
      <div className="bg-base-200 mt-6">
        <h2 id="about" className="text-center text-5xl font-semibold mt-6">Our Story</h2>
        {/*}
        <div className="px-6"><PortableText value={data.body} components={components}/></div>
        */}
        <div className="mt-6 px-4 flex flex-col lg:flex-row gap-4">
          <div className="">
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
                      we provide our clients with holistic and comprehensive transformation implementation support.
          </div>
          <div className="flex-none w-60">
            <div className="flex flex-col">
            <div>
              <Image className="" src={img} alt="Managing Director" height={400} width={400}/>
            </div>
            <div className="text-center text-sm italic">
              <Link href="https://www.linkedin.com/in/olga-denisova-pmp-01ab847/" className="hover:underline">Olga Denisova<br />Managing Director</Link>
            </div>
            </div>
          </div>
       </div>            
      </div>
    </>
 
  );
}

import Image from "next/image";
import { PortableText, PortableTextComponents } from "next-sanity";
import { sanityClient } from "@/sanity/client";
import { getImageDimensions } from "@sanity/asset-utils";
import { SanityImageSource } from "@sanity/asset-utils";
import { SanityImageAsset } from "@/sanity/sanity.types";
import { SanityImageObjectStub } from "@sanity/asset-utils";
import { SimplePage } from "@/sanity/sanity.types";
import img from "@/public/images/director.jpg"

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

export default async function About() {
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
      <div id="about" className="text-center">
        <h1 className="font-serif font-semibold text-3xl mt-10">Our Story</h1>
      </div>
      <div className="lg:w-[60%]">
        <hr className="my-6"/>
        {/*}
        <div className="px-6"><PortableText value={data.body} components={components}/></div>
        */}
        
        <Image className="hidden lg:inline float-right" src={img} alt="Managing Director" width={400} height={240}/>
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
                    we provide our clients with holistic and comprehensive transformation implementation support.
        </span>
                    
      </div>
    </>
 
  );
}

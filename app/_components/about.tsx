import Image from "next/image";
import { PortableText, PortableTextComponents } from "next-sanity";
import { sanityClient } from "@/sanity/client";
import { getImageDimensions } from "@sanity/asset-utils";
import { SanityImageSource } from "@sanity/asset-utils";
import { SanityImageAsset } from "@/sanity/sanity.types";
import { SanityImageObjectStub } from "@sanity/asset-utils";
import { SimplePage } from "@/sanity/sanity.types";
import principal from "@/public/images/principal-bw.png"
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
      <div id="about" className="bg-base-200">
        {/*}
        <div className="px-6"><PortableText value={data.body} components={components}/></div>
        */}
        <div className="my-16 px-4 flex flex-col lg:flex-row gap-4">
          <div className="text-xl">
          <h2  className="text-8xl mt-6 mb-10">Hi - <span className="italic">I'm Olga</span></h2>
<p className="" >Founder of Trigona Consulting. </p>

<p className="mt-6">I have spent nearly two decades guiding Fortune 500 companies, governmental agencies, and PE-backed mid-size firms through complex changes. If there is one thing I've learned, it is that a successful transformation isn't just about best-in-class technology or streamlined processes—it's about people. </p>

<p className="mt-6">At Trigona, we've mastered the art and science of human-centered transformation. Since 2016, we've partnered with top global consulting firms and industry leaders to turn resistance into enthusiasm and plans into results. </p>

<p className="mt-6">Whether you're rolling out a new system, integrating an acquisition, or reimagining your operating model, we know precisely how to turn daunting transformations into lasting success stories - that is where 70% of organizations stumble. </p>

<p className="mt-6">We make change happen by putting your people first. </p>

<p className="mt-6">Ready to make change feel less like a mandate and more like an opportunity? </p>
          </div>
          <div className="flex-none w-[400px]">
            <div className="flex flex-col">
              <Image className="" src={principal} alt="Managing Director"/>
              <div className="-ml-16 text-center text mt-4">
                <Link href="https://www.linkedin.com/in/olga-denisova-pmp-01ab847/" className="hover:underline">Olga Denisova<br />
                <span className="italic">Founder and Managing Principal</span></Link>
              </div>
            </div>
          </div>
        </div>            
      </div>
  );
}

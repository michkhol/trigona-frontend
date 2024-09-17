import Image from "next/image";
import Link from "next/link";
import { PortableText } from "next-sanity";
import { sanityClient } from "@/sanity/client";
import { getImageDimensions } from "@sanity/asset-utils";
import { SanityImageSource } from "@sanity/asset-utils";
import { SanityImageAsset } from "@/sanity/sanity.types";
import { SanityImageObjectStub } from "@sanity/asset-utils";
import { BlogPost } from "@/sanity/sanity.types";

const GeneralImageComponent = ({value, isInline}: { value: SanityImageSource, isInline: boolean}) => {
  const asset = (value as SanityImageObjectStub).asset as SanityImageAsset

  const {width, height} = getImageDimensions(value);
  return (
    <Image
      src={asset.url!}
      width={width}
      height={height}  
      alt={asset.altText || ' '}
      loading="lazy"
      style={{
        // Display alongside text if image appears inside a block text span
        display: isInline ? 'inline-block' : 'block',

        // Avoid jumping around with aspect-ratio CSS property
        aspectRatio: width / height,
      }}
    />
  )
}

const components = {
  types: {
    image: GeneralImageComponent,
    // Any other custom types you have in your content
    // Examples: mapLocation, contactForm, code, featuredProjects, latestNews, etc.
  },
}

export default async function Blog() {
  const data = await sanityClient.fetch(
    `*[_type == "blogPost"]{
  ...,
  mainImage {
    ...,
    asset ->  
  },
  body[] {
    ...,
    asset ->
  }
} | order(_createdAt desc)`, 
    {}, {next: { revalidate: 60}}
  );
  // console.log(data[0].body);

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <div className="relative h-96 w-full">
        {/* <Image className="object-cover z-0 object-center" src={officeBackgroud} alt="Background" fill={true} /> */}
        <h1 className="relative z-10 font-serif font-semibold text-center text-white text-5xl pt-40">Our Blog</h1>
      </div>
      { 
        data.map((b: BlogPost) => {
          return (
            <div key={b._id}>
            <PortableText value={b.body!} components={components}/>
            <hr className="w-full"/>
            </div>
          );
        })
      }
      
    </div>
  );
}

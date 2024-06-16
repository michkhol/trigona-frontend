import { NextRequest, NextResponse } from "next/server";
import { sanityClient } from "@/sanity/client";

export async function POST(req: NextRequest) {
  const form = req.formData();
  console.log("Form: " + form)

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
  const response = NextResponse.rewrite("/contact");
  
  return response;

}
import { NextRequest, NextResponse } from "next/server";
import * as zoho from "./environment";

export const dynamic = 'force-dynamic'; // defaults to auto

export async function GET(request: Request) {

  const {searchParams} = new URL(request.url);
  const name = searchParams.get("status");
  
  return Response.json({name});
}

export async function POST(req: NextRequest) {
  console.log("api/bigin")
  const fd = await req.formData;
  console.log(fd)
  try {
    // console.log(session);
    return NextResponse.redirect("http://localhost:3000");

  
  } catch (err) {
    if (err instanceof Error) {
      return NextResponse.json({ error: err.message }, { status: 500 });
    }
  }
}

import { NextRequest, NextResponse } from "next/server";
import * as zoho from "./environment";

export const dynamic = 'force-dynamic'; // defaults to auto

export async function POST(req: NextRequest) {
  try {
    // console.log(session);
    return NextResponse.redirect("session.url", 303);

  
  } catch (err) {
    if (err instanceof Error) {
      return NextResponse.json({ error: err.message }, { status: 500 });
    }
  }
}

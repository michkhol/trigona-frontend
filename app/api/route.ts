
import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe"

export const dynamic = 'force-dynamic'; // defaults to auto

export async function GET(request: Request) {

  const {searchParams} = new URL(request.url);
  const name = searchParams.get("status");
  
  return Response.json({name});
}

export async function POST(req: NextRequest) {
  try {
    // Create Checkout Sessions from body params.
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
          price: 'price_1PMwW1P5tKHKdMCqfBFLdtsg',
          quantity: 1,
        },
      ],
      mode: 'payment',
      //payment_method_types: ["card", "klarna", "amazon_pay"],
      success_url: `${req.headers.get('Origin')}/?showSuccess=1`,
      // cancel_url: `${req.headers.get('Origin')}/api?status=cancelled`,
      cancel_url: `${req.headers.get('Origin')}/landing/index.html`,
    });
    // console.log(session);
    return NextResponse.redirect(session.url!, 303);
    // return NextResponse.json(session, { status: 200 });
  } catch (err) {
    if (err instanceof Error) {
      return NextResponse.json({ error: err.message }, { status: 500 });
    }
  }
}


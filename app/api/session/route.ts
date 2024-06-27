import type Stripe from "stripe";
import { stripe } from "@/lib/stripe"
import { NextRequest, NextResponse } from "next/server";

export const dynamic = 'force-dynamic'; 

export async function POST(req: NextRequest) {
  try {
    // Create Checkout Sessions from body params.
    const session = await stripe.checkout.sessions.create({
      ui_mode: "embedded",
      line_items: [
        {
          // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
          price: 'price_1PMwW1P5tKHKdMCqfBFLdtsg',
          quantity: 1,
        },
      ],
      mode: 'payment',
      payment_method_types: ["card", "amazon_pay", "klarna"],
      return_url: `${req.headers.get("origin")}/payment?session_id={CHECKOUT_SESSION_ID}`,
    });
    // console.log(session);
    // const pd = await stripe.paymentMethodDomains.list();
    // console.log(JSON.stringify(pd, null, 2));
    return NextResponse.json({clientSecret: session.client_secret});
  } catch (err) {
    if (err instanceof Error) {
      return NextResponse.json({ error: err.message }, { status: 500 });
    }
  }
}

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const session = await stripe.checkout.sessions.retrieve(searchParams.get("session_id")!);
    
    NextResponse.json({
      status: session.status,
      customer_email: session.customer_details!.email
    });
  } catch (err) {
    if (err instanceof Error) {
      return NextResponse.json({ error: err.message }, { status: 500 });
    }
  }
}

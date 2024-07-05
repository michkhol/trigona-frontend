import { stripe } from "@/lib/stripe"
import { NextRequest, NextResponse } from "next/server";

export const dynamic = 'force-dynamic'; 

export async function POST(req: NextRequest) {
  
  try {
    // const data = await req.formData();
    // console.log("API: productId: " + data.get("productId"))
    // Create Checkout Sessions from body params.
    const session = await req.formData().then(data => {
      const items = data.getAll("productIds").map(e => { 
        return { price: e as string, quantity: 1 } 
      });
      return stripe.checkout.sessions.create({
        ui_mode: "embedded",
        line_items: items,
        mode: 'payment',
        payment_method_types: ["card", "cashapp", "amazon_pay", "klarna", "affirm"],
        return_url: `${req.headers.get("origin")}/processed?session_id={CHECKOUT_SESSION_ID}`,
      })
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

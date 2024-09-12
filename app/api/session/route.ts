import { stripe } from "@/lib/stripe"
import { NextRequest, NextResponse } from "next/server";
import * as uuid from "uuid";

export const dynamic = 'force-dynamic'; 


export async function POST(req: NextRequest) {
  
  try {
    const session = await req.formData().then(data => {
      // Generate next order id, using random numbers for now.
      const orderId = "AR-" + uuid.v4().slice(-6).toUpperCase();
      const participantEmail = data.get("participantEmail") as string 
      // console.log("Participant email: " + participantEmail)
      const participantName = data.get("participantName") as string 
      const participantPhone = data.get("participantPhone") as string 

      const items = data.getAll("productId").map(e => { 
        return { price: e as string, quantity: 1 } 
      });
      return stripe.checkout.sessions.create({
        client_reference_id: orderId,
        ui_mode: "embedded",
        line_items: items,
        mode: 'payment',
        payment_method_types: ["card", "cashapp", "amazon_pay", "klarna", "affirm"],
        return_url: `${req.headers.get("origin")}/processed?session_id={CHECKOUT_SESSION_ID}`,
        metadata: { participantEmail: participantEmail, participantName: participantName, participantPhone: participantPhone }
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

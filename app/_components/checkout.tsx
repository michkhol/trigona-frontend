"use client";
import { useCallback } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout
} from '@stripe/react-stripe-js';


const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function Checkout({productId, }: { productId: string}) {
  const fetchClientSecret = useCallback(() => {
    // Create a Checkout Session
    const formData = new FormData();
    formData.append("productId", productId);

    const resp = fetch("/api/session", {
      method: "POST",
      body: formData,
    }).then(res => res.json()).then(data => data.clientSecret);
    return resp;
  }, []);

  const options = {fetchClientSecret};
  // console.log("Checkout module rendering")

  return (
    <div id="checkout">
      <EmbeddedCheckoutProvider
        stripe={stripePromise}
        options={options}
      >
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  )
}
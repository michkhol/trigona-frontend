"use client";

import { useRef, useEffect } from "react";
import { loadStripe, StripeEmbeddedCheckout } from '@stripe/stripe-js';
import type { Stripe } from '@stripe/stripe-js';
import { stripePk } from "@/lib/utils";

export type ModalCheckout = (data: FormData) => Promise<void>;

export default function CourseCheckout({setOpenDialog}: { setOpenDialog: (mc: ModalCheckout) => void}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const stripeRef = useRef<Stripe | null>(null);

  let checkout: StripeEmbeddedCheckout;

  function fetchClientSecret(data: FormData) { return () => {
    // Create a Checkout Session
    // console.log("Products before fetch: " + prods)

    const resp = fetch("/api/session", {
      method: "POST",
      body: data,
    }).then(res => res.json()).then(data => data.clientSecret);
    return resp;
  }};

  async function openDialog(data: FormData) {
    // const pArray = data.getAll("productId").map(p => p as string);

    if(stripeRef.current) {
      checkout = await stripeRef.current.initEmbeddedCheckout({fetchClientSecret: fetchClientSecret(data), onComplete: destroyCheckout})
      checkout.mount("#checkout-modal")
    }
    
    (dialogRef.current!).showModal();
  }

  function destroyCheckout() {
    if(checkout)
      try { checkout.destroy(); } catch(e) { console.log(e) }  // Ignore if already destroyed
  }


  useEffect(() => {
    // Immediately Invoked Function Expression
    (async () => {await stripePk().then(pk => loadStripe(pk)).then(s => stripeRef.current = s)})()
    setOpenDialog(openDialog)
  },[setOpenDialog]);


  return (
      <div className="">
        <dialog ref={dialogRef} className="modal" onClose={destroyCheckout}>
          <div className="modal-box">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            <div id="checkout-modal">
            </div>
          </div>
        </dialog>
    </div>
  );
}


"use client";

import DecoratedTitle from "./decorated-title";
import { useState, useRef, useEffect, ChangeEvent } from "react";
import Image from "next/image";
import { loadStripe, StripeEmbeddedCheckout } from '@stripe/stripe-js';
import type { Stripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);
 
export default function Store() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const stripeRef = useRef<Stripe | null>(null);
  const btnModulesRef = useRef<HTMLButtonElement>(null);
  let moduleProdIds: string[] = [];
  let checkout: StripeEmbeddedCheckout;

  function fetchClientSecret(prods: string[]) { return () => {
    // Create a Checkout Session
    const formData = new FormData();
    prods.map(p => formData.append("productIds", p));
    console.log("Products before fetch: " + prods)

    const resp = fetch("/api/session", {
      method: "POST",
      body: formData,
    }).then(res => res.json()).then(data => data.clientSecret);
    return resp;
  }};

  async function openDialog(data: FormData) {
    const pArray = data.getAll("productIds").map(p => p as string);

    if(stripeRef.current) {
      checkout = await stripeRef.current.initEmbeddedCheckout({fetchClientSecret: fetchClientSecret(pArray), onComplete: destroyCheckout})
      checkout.mount("#checkout-modal")
    }
    
    (dialogRef.current!).showModal();
  }

  function destroyCheckout() {
    if(checkout)
      checkout.destroy();
  }

  function manageProdIds(e: ChangeEvent<HTMLInputElement>) {
    if(e.target.checked) 
      moduleProdIds.push(e.target.value)
    else {
      const idx = moduleProdIds.indexOf(e.target.value)
      if (idx != -1)
        moduleProdIds.splice(idx, 1)
    }
    
    if (btnModulesRef.current) {
      if(moduleProdIds.length > 0)
        btnModulesRef.current.disabled = false;
      else
        btnModulesRef.current.disabled = true;
    }
  }

  function collectProdIds() {
    const formData = new FormData();
    moduleProdIds.map(id => formData.append("productIds", id))
    openDialog(formData);
  }

  useEffect(() => {
    stripePromise.then((s) => stripeRef.current = s)
  },[]);


  return (
      <div className="">
        <DecoratedTitle title="Our Packages" />
        <div className="flex flex-col">
          <div className="mx-auto" >
            <h2 className="font-serif font-semibold text-3xl mt-4">One-on-one guidance package</h2>
              <ul className="list-disc list-inside pl-3 leading-loose mt-4">
                <li>10 1-hour long private coaching sessions.</li>
                <li>6-module group live web-based training series.</li>
                <li>Individual video-recorded modules.</li>
                <li>Weekly group office hours.</li>
                <li>Group collaboration forums.</li>
              </ul>
            <form action={(data) => openDialog(data)}>
              <input type="hidden" name="productIds" value="price_1PXpDYP5tKHKdMCqcqcQtzd0"/>
              <p className="text-center">
                <button className="btn btn-primary mt-6" type="submit">Pay $11,250</button>
              </p>
            </form>
          </div>
          <div className="mx-auto" >
            <h2 className="font-serif font-semibold text-3xl mt-4">Group training series</h2>
              <ul className="list-disc list-inside pl-3 leading-loose mt-4">
                <li>6-module group live web- based training series.</li>
                <li>Individual video-recorded modules.</li>
                <li>Weekly group office hours.</li>
                <li>Group collaboration forums.</li>
              </ul>
            <form action={(data) => openDialog(data)}>
              <input type="hidden" name="productIds" value="price_1PXpEfP5tKHKdMCqmqcIP83P"/>
              <p className="text-center">
                <button className="btn btn-primary mt-6" type="submit">Pay $1,675</button>
              </p>
            </form>
          </div>
          <div className="mx-auto" >
            <h2 className="font-serif font-semibold text-3xl mt-4">Pick & choose module</h2>
              <ul className="list-disc list-inside pl-3 leading-loose mt-4">
                <li>Individual group live training session module.</li>
                <li>Individual video-recorded modules.</li>
                <li>Weekly group office hours.</li>
                <li>Group collaboration forums.</li>
              </ul>
            <form action={() => collectProdIds()}>
              <label className="label cursor-pointer">
                <span className="label-text">MODULE 1</span>
                <input type="checkbox" className="checkbox" name="module1" value="price_1PXpFRP5tKHKdMCqsmgg2e1B" onChange={manageProdIds}/>
              </label>
              <label className="label cursor-pointer">
                <span className="label-text">MODULE 2</span>
                <input type="checkbox" className="checkbox" name="module1" value="price_1PXpFvP5tKHKdMCqnJ7mUe8f" onChange={manageProdIds}/>
              </label>
              <label className="label cursor-pointer">
                <span className="label-text">MODULE 3</span>
                <input type="checkbox" className="checkbox" name="module1" value="price_1PXpGYP5tKHKdMCqth8Q5nwA" onChange={manageProdIds}/>
              </label>
              <label className="label cursor-pointer">
                <span className="label-text">MODULE 4</span>
                <input type="checkbox" className="checkbox" name="module1" value="price_1PXpH1P5tKHKdMCqvgMrlVQ1" onChange={manageProdIds}/>
              </label>
              <label className="label cursor-pointer">
                <span className="label-text">MODULE 5</span>
                <input type="checkbox" className="checkbox" name="module1" value="price_1PXpI8P5tKHKdMCqGzPq1D2U" onChange={manageProdIds}/>
              </label>
              <label className="label cursor-pointer">
                <span className="label-text">MODULE 6</span>
                <input type="checkbox" className="checkbox" name="module1" value="price_1PXpIZP5tKHKdMCqnLTwtWTP" onChange={manageProdIds}/>
              </label>

              <p className="text-center">
                <button ref={btnModulesRef} className="btn btn-primary mt-6" disabled={true} type="submit">Pay</button>
              </p>
            </form>
          </div>
        </div>

        <dialog ref={dialogRef} className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={destroyCheckout}>✕</button>
          </form>
          <div id="checkout-modal">
          </div>
        </div>
      </dialog>
    </div>
  );
}


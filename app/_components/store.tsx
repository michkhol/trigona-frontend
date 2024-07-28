"use client";

import DecoratedTitle from "./decorated-title";
import { useRef, useEffect, ChangeEvent } from "react";
import Image from "next/image";
import { loadStripe, StripeEmbeddedCheckout } from '@stripe/stripe-js';
import type { Stripe } from '@stripe/stripe-js';
import type { Stripe as SrvStripe } from "stripe";
// import * as uuid from "uuid";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'usd',

  // These options are needed to round to whole numbers if that's what you want.
  //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});

type Product = { id: string, price: number};

const LiveCourseId = "price_1PXpDYP5tKHKdMCqcqcQtzd0";
const FullCourseId = "price_1PXpEfP5tKHKdMCqmqcIP83P";
const ModuleIds = [
  "price_1PXpFRP5tKHKdMCqsmgg2e1B",
  "price_1PXpFvP5tKHKdMCqnJ7mUe8f",
  "price_1PXpGYP5tKHKdMCqth8Q5nwA",
  "price_1PXpH1P5tKHKdMCqvgMrlVQ1",
  "price_1PXpI8P5tKHKdMCqGzPq1D2U",
  "price_1PXpIZP5tKHKdMCqnLTwtWTP"
]
 
export default function Store({prices}: { prices: SrvStripe.Price[]}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const stripeRef = useRef<Stripe | null>(null);
  const btnModulesRef = useRef<HTMLButtonElement>(null);

  const liveCoursePrice = prices.find(p => p.id === LiveCourseId)?.unit_amount! / 100;
  const fullCoursePrice = prices.find(p => p.id === FullCourseId)?.unit_amount! / 100;

  let moduleProdIds: Product[] = [];
  let checkout: StripeEmbeddedCheckout;

  function fetchClientSecret(prods: string[]) { return () => {
    // Create a Checkout Session
    const formData = new FormData();
    prods.map(p => formData.append("productIds", p));
    // console.log("Products before fetch: " + prods)

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
      try { checkout.destroy(); } catch(e) { console.log(e) }  // Ignore if already destroyed
  }

  function manageProdIds(e: ChangeEvent<HTMLInputElement>) {
    if(e.target.checked) 
      moduleProdIds.push({ id: e.target.value, price: prices.find(p => p.id === e.target.value)?.unit_amount! / 100 })
    else {
      const idx = moduleProdIds.findIndex(p => p.id === e.target.value)
      if (idx != -1)
        moduleProdIds.splice(idx, 1)
    }
    
    if (btnModulesRef.current) {
      if(moduleProdIds.length > 0) {
        const total = moduleProdIds.map(p => p.price).reduce((acc, p) => acc + p, 0);
        btnModulesRef.current.innerText = `Pay $${total.toLocaleString()}`
        btnModulesRef.current.disabled = false;
      }
      else {
        btnModulesRef.current.disabled = true;
        btnModulesRef.current.innerText = "Pay"
      }
    }
  }

  function collectProdIds() {
    const formData = new FormData();
    moduleProdIds.map(p => formData.append("productIds", p.id))
    openDialog(formData);
  }

  useEffect(() => {
    // console.log("UUID: " + uuid.v4().toUpperCase().slice(-6))
    // console.log("Total: " + formatter.format(167500 / 100))
    stripePromise.then((s) => stripeRef.current = s)
  },[]);


  return (
      <div className="bg-base-200 mt-6 pb-8">
        <h2 className="text-center text-4xl font-semibold my-6">Packages and pricing</h2>
        <div className="flex flex-col lg:flex-row gap-4 justify-center">
          <div className="border border-orange-600 p-3 rounded-lg mx-2 flex-none w-[500px]" >
            <div className="grid grid-rows-4 grid-cols-1 h-full">
              <div className="row-span-3">
                <h2 className="font-semibold text-3xl mt-4 text-center">One-on-one guidance package</h2>
                  <ul className="list-disc list-inside pl-3 leading-loose mt-4">
                    <li>10 1-hour long private coaching sessions.</li>
                    <li>6 1-hour module group live web-based training series.</li>
                    <li>Weekly group office hours.</li>
                    <li>Group collaboration forums.</li>
                    <li>Individual video-recorded modules.</li>
                  </ul>
              </div>
              <div>
                <form action={(data) => openDialog(data)}>
                  <input type="hidden" name="productIds" value={LiveCourseId}/>
                  <p className="text-center">
                    <button className="btn btn-primary mt-6" type="submit">{`Pay $${liveCoursePrice.toLocaleString()}`}</button>
                  </p>
                </form>
              </div>
            </div>
          </div>
          <div className="border border-orange-600 p-3 rounded-lg mx-2 flex-none w-[500px]" >
            <div className="grid grid-rows-4 grid-cols-1 h-full">
              <div className="row-span-3">
                <h2 className="font-semibold text-3xl mt-4 text-center">Group training series</h2>
                  <ul className="list-disc list-inside pl-3 leading-loose mt-4">
                    <li>6 1-hour module group live web-based training series.</li>
                    <li>Individual video-recorded modules.</li>
                    <li>Weekly group office hours.</li>
                    <li>Group collaboration forums.</li>
                  </ul>
              </div>
              <div>
                <form action={(data) => openDialog(data)}>
                  <input type="hidden" name="productIds" value={FullCourseId}/>
                  <p className="text-center">
                    <button className="btn btn-primary mt-6" type="submit">{`Pay $${fullCoursePrice.toLocaleString()}`}</button>
                  </p>
                </form>
              </div>
            </div>
          </div>
          {/* <div className="mx-auto" >
            <h2 className="font-serif font-semibold text-3xl mt-4">Pick & choose module</h2>
              <ul className="list-disc list-inside pl-3 leading-loose mt-4">
                <li>Individual group live training session module.</li>
                <li>Individual video-recorded modules.</li>
                <li>Weekly group office hours.</li>
                <li>Group collaboration forums.</li>
              </ul>
            <form action={() => collectProdIds()}>
              {
                ModuleIds.map((p, idx) => {return (
                  <label key={p} className="label cursor-pointer">
                    <span className="label-text">{`MODULE ${idx + 1}`}</span>
                    <input type="checkbox" className="checkbox" name="module1" value={p} onChange={manageProdIds}/>
                  </label>
                )})
              }

              <p className="text-center">
                <button ref={btnModulesRef} className="btn btn-primary mt-6" disabled={true} type="submit">Pay</button>
              </p>
            </form>
          </div> */}
        </div>

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


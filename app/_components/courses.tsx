"use client";

import DecoratedTitle from "./decorated-title";
import { useState, useRef, lazy } from "react";
import Image from "next/image";
import serv2 from "@/public/images/on-demand-executive-expertise2.jpg";
 
const DynamicCheckout = lazy(() => import('./checkout'));

export default function Courses() {
  const [renderCheckout, setRenderCheckout] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [product, setProduct] = useState("No product");

  function openDialog(data: FormData) {
    // console.log("Dialog: " + data.get("productId"));
    setProduct(data.get("productId") as string);
    
    (dialogRef.current!).showModal();
    setRenderCheckout(true);
  }

  return (
      <div className="lg:w-[60%]">
        <DecoratedTitle title="Our Courses" />
        <div className="flex flex-row justify-center w-full">
          <div className="justify-center" >
          <form action={(data) => openDialog(data)}>
            <input type="hidden" name="productId" value="price_1PMwW1P5tKHKdMCqfBFLdtsg"></input>
            <Image className="m-auto" src={serv2} alt="on-demand executive expertise" width={400}/>
            <p className="text-center">
              <button className="btn btn-primary mt-6" type="submit">Pay</button>
            </p>
          </form>
          </div>
        </div>
        <dialog ref={dialogRef} className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <h3 className="font-bold text-lg">Pay now</h3>
          {renderCheckout && <DynamicCheckout productId={product}/>}
        </div>
      </dialog>
    </div>
  );
}


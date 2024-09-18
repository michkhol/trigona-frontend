import {stripe} from "@/lib/stripe";
import PriceList2Register from "../_components/pricelist2register";
import Link from "next/link";

export default async function Pricing2() {
  const priceList = (await stripe.prices.list()).data
  return (
    <div>
      <h1 className="text-center text-5xl mb-6"><span className="italic">Practical Change Management, Enhanced with AI</span> <span className="text-red-800 font-semibold">Course</span></h1>
      <PriceList2Register prices={priceList}/>
      <div className="my-8 flex justify-center">
           <Link href="/courses" className="bg-red-800 text-white text-2xl mt-8 px-8 py-3 rounded-full font-bold text-center hover:bg-orange-600 transition-colors w-52">
              Learn More
            </Link>
         </div>

    </div>
  );
}
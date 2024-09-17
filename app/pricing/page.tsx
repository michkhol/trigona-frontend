import {stripe} from "@/lib/stripe";
import PriceList2Register from "../_components/pricelist2register";
import Link from "next/link";

export default async function Pricing2() {
  const priceList = (await stripe.prices.list()).data
  return (
    <div>
      <PriceList2Register prices={priceList}/>
      <div className="my-8 flex justify-center">
           <Link href="/courses" className="bg-red-800 text-white text-2xl mt-8 px-8 py-3 rounded-full font-bold text-center hover:bg-orange-600 transition-colors w-52">
              Learn More
            </Link>
         </div>

    </div>
  );
}
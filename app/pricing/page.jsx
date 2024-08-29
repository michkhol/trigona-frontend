import {stripe} from "@/lib/stripe";
import Store from "../_components/store";
import Link from "next/link";

export default async function Pricing() {
  const priceList = (await stripe.prices.list()).data
  return (
    <div>
      <Store prices={priceList}/>
      <div className="my-8 flex justify-center">
           <Link href="/courses" className="bg-red-800 text-white text-2xl mt-8 px-8 py-3 rounded-full font-bold text-center hover:bg-orange-600 transition-colors w-52">
              Learn More
            </Link>
         </div>

    </div>
  );
}
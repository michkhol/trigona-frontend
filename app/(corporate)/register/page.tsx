import RegisterAndCheckout from "@/app/_components/register-and-checkout";
import Link from "next/link";

type Params = Promise<{ slug: string }>
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>

export default async function Register(props: {
  params: Params,
  searchParams: SearchParams,
}) {
  const searchParams = await props.searchParams
  return (
    <div>
      <RegisterAndCheckout priceId={searchParams.priceId as string} />
      {/* <div className="my-8 flex justify-center">
           <Link href="/courses" className="bg-red-800 text-white text-2xl mt-8 px-8 py-3 rounded-full font-bold text-center hover:bg-orange-600 transition-colors w-52">
              Learn More
            </Link>
         </div> */}

    </div>
  );
}
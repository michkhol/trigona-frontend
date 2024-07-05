import officeBackgroud from "@/public/images/New-Office.jpg";
import Image from "next/image";
import { stripe } from "@/lib/stripe"
import { reportError } from "@/lib/utils";

export default async function ReturnFromPayment({
  params,
  searchParams,
}: {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}) 
{
  try {
    const session = await stripe.checkout.sessions.retrieve(searchParams.session_id as string);
    console.log(session);
    const status = session.status;
    const customerEmail = session.customer_email;
    const jSession = JSON.stringify(session, null, 2);

    return (
      <div className="flex flex-col items-center gap-4 w-full">
        <div className="relative h-96 w-full">
          <Image className="object-cover z-0 object-center" src={officeBackgroud} alt="Background" fill={true} priority={true} />
          <h1 className="relative z-10 font-serif font-semibold text-center text-white text-5xl pt-40">Payment status</h1>
        </div>
        <div>
          <h1 className="text-xl">Thank you for your payment!</h1>
        </div>
        <div>
          We appreciate your business! A confirmation email will be sent to {customerEmail}.
          If you have any questions, please email <a href="mailto:support@trigonaconsulting.com">support@trigonaconsulting.com</a>.
        </div>
        <div>
          Session: {jSession}
        </div>
      </div>  
    );
  } catch(e) {
    // console.log("In catch: " + (e as Error).stack);
    // reportError("payment-return", (e as Error))
    throw e;
  }
}
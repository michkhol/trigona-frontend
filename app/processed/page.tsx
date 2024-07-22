import officeBackgroud from "@/public/images/New-Office.jpg";
import Image from "next/image";
import { stripe } from "@/lib/stripe"
import { reportError } from "@/lib/utils";
import { client } from "@/lib/postmark";
import type { TemplatedMessage } from "postmark";

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
    const items = await stripe.checkout.sessions.listLineItems(searchParams.session_id as string);
    console.log(session);
    const status = session.status;
    const orderDate = new Date(session.created).toLocaleDateString();
    const customerEmail = session.customer_details?.email

    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: session.currency || "USD",
    });
    
    const itemList = items.data.map(d => { return({description: d.description, amount: d.amount_total})})
    const jSession = JSON.stringify(session, null, 2);
    const message: TemplatedMessage = {
      TemplateAlias: "receipt",
      TemplateModel: {
        receipt_id: session.client_reference_id,
        name: session.customer_details?.name || "Customer",
        date: orderDate,
        receipt_details: itemList,
        total: formatter.format((session.amount_total! / 100)) || "Invalid", 
      },
      From: "sales@trigonaconsulting.com",
      To: customerEmail!
    }
    
    // TODO: Make sure sesstion.payment_statis is "paid", otherwise ask to contact support.
    //await client.sendEmailWithTemplate(message);

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
          <p>Session: {jSession}</p>
          <p>Line items: {JSON.stringify(items, null ,2)}</p>
        </div>
      </div>  
    );
  } catch(e) {
    // console.log("In catch: " + (e as Error).stack);
    // reportError("payment-return", (e as Error))
    throw e;
  }
}

const itemsTest = {
  "object": "list",
  "data": [
    {
      "id": "li_1PbnVQP5tKHKdMCqSVRaonNu",
      "object": "item",
      "amount_discount": 0,
      "amount_subtotal": 31000,
      "amount_tax": 0,
      "amount_total": 31000,
      "currency": "usd",
      "description": "MODULE 1: CHANGE MANAGEMENT APPROACH",
      "price": {
        "id": "price_1PXpFRP5tKHKdMCqsmgg2e1B",
        "object": "price",
        "active": true,
        "billing_scheme": "per_unit",
        "created": 1719859605,
        "currency": "usd",
        "custom_unit_amount": null,
        "livemode": false,
        "lookup_key": null,
        "metadata": {},
        "nickname": null,
        "product": "prod_QOcUln6cYckk9J",
        "recurring": null,
        "tax_behavior": "unspecified",
        "tiers_mode": null,
        "transform_quantity": null,
        "type": "one_time",
        "unit_amount": 31000,
        "unit_amount_decimal": "31000"
      },
      "quantity": 1
    }
  ],
  "has_more": false,
  "url": "/v1/checkout/sessions/cs_test_a1QRSfkK8A5BQeXz6h8Nkfio6EJ7bITBfyHDgcRMXLtJwlQWxXszdewFAW/line_items"
};

const sessionTest = {
  "id": "cs_test_a1u0gJmk0kxP5ZU8daxUogdLxJX8loWoZKlzeFadaSaNsGTIjZthUSueVF",
  "object": "checkout.session",
  "after_expiration": null,
  "allow_promotion_codes": null,
  "amount_subtotal": 167500,
  "amount_total": 167500,
  "automatic_tax": {
    "enabled": false,
    "liability": null,
    "status": null
  },
  "billing_address_collection": null,
  "cancel_url": null,
  "client_reference_id": null,
  "client_secret": null,
  "consent": null,
  "consent_collection": null,
  "created": 1720802839,
  "currency": "usd",
  "currency_conversion": null,
  "custom_fields": [],
  "custom_text": {
    "after_submit": null,
    "shipping_address": null,
    "submit": null,
    "terms_of_service_acceptance": null
  },
  "customer": null,
  "customer_creation": "if_required",
  "customer_details": {
    "address": {
      "city": null,
      "country": "US",
      "line1": null,
      "line2": null,
      "postal_code": "11111",
      "state": null
    },
    "email": "sales@trigonaconsulting.com",
    "name": "Test Name",
    "phone": null,
    "tax_exempt": "none",
    "tax_ids": []
  },
  "customer_email": null,
  "expires_at": 1720889239,
  "invoice": null,
  "invoice_creation": {
    "enabled": false,
    "invoice_data": {
      "account_tax_ids": null,
      "custom_fields": null,
      "description": null,
      "footer": null,
      "issuer": null,
      "metadata": {},
      "rendering_options": null
    }
  },
  "livemode": false,
  "locale": null,
  "metadata": {},
  "mode": "payment",
  "payment_intent": "pi_3PbmdVP5tKHKdMCq1cFImtVg",
  "payment_link": null,
  "payment_method_collection": "if_required",
  "payment_method_configuration_details": null,
  "payment_method_options": {
    "card": {
      "request_three_d_secure": "automatic"
    }
  },
  "payment_method_types": [
    "card",
    "cashapp",
    "amazon_pay",
    "klarna",
    "affirm"
  ],
  "payment_status": "paid",
  "phone_number_collection": {
    "enabled": false
  },
  "recovered_from": null,
  "redirect_on_completion": "always",
  "return_url": "https://develop--trigona.netlify.app/processed?session_id={CHECKOUT_SESSION_ID}",
  "saved_payment_method_options": null,
  "setup_intent": null,
  "shipping_address_collection": null,
  "shipping_cost": null,
  "shipping_details": null,
  "shipping_options": [],
  "status": "complete",
  "submit_type": null,
  "subscription": null,
  "success_url": null,
  "total_details": {
    "amount_discount": 0,
    "amount_shipping": 0,
    "amount_tax": 0
  },
  "ui_mode": "embedded",
  "url": null
}
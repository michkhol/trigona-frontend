"use server";

import { client } from "./postmark";

export async function reportError(module: string, e: Error) {
  const email = {
    "From": "sales@trigonaconsulting.com",
    "To": "support@trigonaconsulting.com",
    "Subject": `Error in ${module}`,
    "HtmlBody": `<strong>${e.message}</strong><br /><p>${e.stack}</p>`,
    "TextBody": e.stack,
    "MessageStream": "outbound"
  };

  await client.sendEmail(email).then(x => console.log(x))
}
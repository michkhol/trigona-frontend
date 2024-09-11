"use server";

import { client } from "./postmark";
import { addContact } from "./zoho";

export async function stripePk() { return process.env.NEXT_STRIPE_PUBLISHABLE_KEY! };

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

export interface FormInput {
  firstName: string,
  lastName: string,
  email: string,
  phone: string,
  sms: boolean
}

export async function newContact(fi: FormInput): Promise<void> {

  const data = `
  { 
    "data": 
    [
      { 
        "First_Name": "${fi.firstName}", 
        "Last_Name": "${fi.lastName}", 
        "Email": "${fi.email}", 
        "Mobile": "${fi.phone}", 
        "Description":"sms: ${fi.sms}"
      }
    ]
  }`
  
   await addContact(data).then(response => { console.log(response); return response.json()}).then(j => console.log("Body: " + JSON.stringify(j, null,2)))
  .catch(error => console.log(error));
  
}

export interface Participant {
  name: string,
  email: string,
  company?: string,
  phone: string,
  yearsInIndustry: number,
}

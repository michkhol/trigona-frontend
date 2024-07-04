import { client } from "../../lib/postmark"
import { addContact } from "@/lib/zoho";

export type RegisterForm = {
  firstName: string,
  lastName: string,
  email: string,
  phone: string,
}

type OnRegister = (form: RegisterForm) => void;

export function Blurb() {
  return (
    <>
      <div className="text-center mb-6">
        {/*<h1 className="font-serif font-semibold text-3xl">Equip Professionals With Tools,<br /> Processes and Frameworks to Effectively Lead Change</h1>*/}
      </div>
    
      <div className="flex flex-col justify-center">
        <div>
            <p className="leading-loose">Are you tired of change initiatives that fall flat? Imagine leading transformations so smooth, they feel effortless. 
              Our <span className="font-semibold">Practical Change Management</span> course reveals the insider strategies used by top global firms, now supercharged with AI. 
              In just 3 weeks, master the art of people-centered change that sticks. Don&apos;t let another transformation fail - 
              discover how to turn resistance into enthusiasm and chaos into opportunity. Ready to become the change guru your organization needs?
            </p>
        </div>
      </div>
    </>
  );
}

export function EnrollForm( {handler}: { handler : OnRegister}) {
  async function register(formData: FormData) {
    'use server'
 
    const rawFormData: RegisterForm = {
      firstName: formData.get('firstName') as string,
      lastName: formData.get('lastName') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
    }
    const data = `{ "data": [{"First_Name": "${rawFormData.firstName}", "Last_Name": "${rawFormData.lastName}", "Email": "${rawFormData.email}" }]}`
    
    await addContact(data).then(response => console.log(response))
    .catch(error => console.log(error))

    handler(rawFormData);
  }

  return (<>
    <div>    
      <div className="text-center mb-6">
            <h1 className="font-serif font-semibold text-3xl">Request More Information</h1>
      </div>
      <form action={register}>
        <div className="form-control max-w-xl mx-auto my-4">
          <input type="text" placeholder="First name" required={true} className="input input-bordered max-w-xl border-orange-600" name="firstName"/>
        </div>
        <div className="form-control max-w-xl mx-auto my-4">
          <input type="text" placeholder="Last name" required={true} className="input input-bordered max-w-xl border-orange-600" name="lastName"/>
        </div>
        <div className="form-control max-w-xl mx-auto my-4">
            <input type="email" placeholder="Email" required={true} className="input input-bordered max-w-xl border-orange-600" name="email" />
        </div>
        <div className="form-control max-w-xl mx-auto my-4">
            <input type="tel" placeholder="Phone" required={true} className="input input-bordered max-w-xl border-orange-600" name="phone" />
        </div>
          <div className="flex justify-center"><button className="btn btn-primary mt-6" type="submit">Submit</button></div>
      </form>
    </div>
    <div className="text-center text-sm mt-2">
      <p>You must have cookies enabled to avoid multiple registrations. By submitting the form you agree to our <a className="link">Terms and Conditions</a> and <a className="link">Privacy Policy</a>.</p>
    </div>
  </>
  );
}
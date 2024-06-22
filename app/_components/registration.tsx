import officeBackgroud from "@/public/images/New-Office.jpg";
import Image from "next/image";
import DecoratedTitle from "../_components/decorated-title";

export type RegisterForm = {
  firstName: string,
  lastName: string,
  email: string
}

type OnRegister = (form: RegisterForm) => void;

const secret = process.env.AUTH_ZOHO_SECRET;
const clientId = process.env.AUTH_ZOHO_ID;
const refreshToken = process.env.BIGIN_REFRESH_TOKEN;
const zohoTokenUrl = process.env.NEXT_PUBLIC_ZOHO_TOKEN_URL
const zohoContactsUrl = process.env.NEXT_PUBLIC_ZOHO_CONTACTS_URL

export default function Registration(props: { handler : OnRegister}) {

  async function register(formData: FormData) {
    'use server'
 
    const rawFormData: RegisterForm = {
      firstName: formData.get('firstName') as string,
      lastName: formData.get('lastName') as string,
      email: formData.get('email') as string,
    }

    console.log(rawFormData);
    // Get auth token
    const authData = new FormData();
    authData.append("refresh_token", refreshToken!)
    authData.append("client_id", clientId!)
    authData.append("client_secret", secret!)
    authData.append("grant_type", "refresh_token")

    await fetch(zohoTokenUrl!, {
      method: "POST",
      body: authData,
    }).then(response => response.json()).then(json => {
      console.log(json)
      const data = `{ "data": [{"First_Name": "${rawFormData.firstName}", "Last_Name": "${rawFormData.lastName}", "Email": "${rawFormData.email}" }]}`
      console.log(data)
      const headers = new Headers();
      headers.set('Authorization', 'Zoho-oauthtoken ' + json.access_token);
      headers.set('Content-Type', 'application/json');

      return fetch(zohoContactsUrl!, {
        method: "POST",
        headers: headers,
        body: data
      })
    }).then(response => console.log(response))
    .catch(error => console.log(error))

    props.handler(rawFormData);
    // mutate data
    // revalidate cache
  }
  
  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <div className="relative h-96 w-full">
        <Image className="object-cover z-0 object-center" src={officeBackgroud} alt="Background" fill={true} priority={true} />
        <h1 className="relative z-10 font-serif font-semibold text-center text-white text-5xl pt-40">New Webinar</h1>
      </div>
      <div id="about" className="lg:w-[60%]">
        <DecoratedTitle title="Business as Unusual" />
      
        <div className="flex flex-col justify-center">
          <div>
              <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc laoreet lorem sem, id imperdiet dui tincidunt ut. 
                Nunc lobortis tempus lectus, dapibus venenatis justo tempor nec. Phasellus ipsum mi, mollis ac euismod in, convallis at nisi. 
                Pellentesque augue metus, facilisis sed nisi dignissim, pellentesque lobortis erat. Mauris eu nibh rutrum arcu accumsan ultricies at 
                faucibus metus. Donec eu aliquam ante. Aliquam laoreet posuere felis, in ultricies sapien sollicitudin sed. Morbi sollicitudin quam eu metus rutrum, 
                eu vehicula sem varius. Praesent non orci in velit scelerisque condimentum placerat quis nulla.</p>
          </div>
          <div>    
            <form action={register}>
            <label className="form-control max-w-xl mx-auto">
              <div className="label">
                <span className="label-text">First name:</span>
              </div>
              <input type="text" placeholder="Required" required={true} className="input input-bordered max-w-xl border-orange-600" name="firstName"/>
              </label>
            <label className="form-control max-w-xl mx-auto">
              <div className="label">
                <span className="label-text">Last name:</span>
              </div>
              <input type="text" placeholder="Required" required={true} className="input input-bordered max-w-xl border-orange-600" name="lastName"/>
            </label>
            <label className="form-control max-w-xl mx-auto">
                <div className="label">
                  <span className="label-text">Your email:</span>
                </div>
                <input type="email" placeholder="Required" required={true} className="input input-bordered max-w-xl border-orange-600" name="email" />
            </label>
              <div className="flex justify-center"><button className="btn btn-primary mt-6" type="submit">More info</button></div>
            </form>
          </div>
          <div className="text-center text-sm mt-2">
            <p>You must have cookies enabled to avoid multiple registrations. By submitting the form you agree to our <a className="link">Terms and Conditions</a> and <a className="link">Privacy Policy</a>.</p>
          </div>
        </div>
      </div>
    </div>  
  );
}

import { sanityClient } from "@/sanity/client";
import { revalidatePath } from "next/cache";

type OnLogin = (username: string, email: string) => void;

export default function RegisterPage(props: { onLogin : OnLogin}) {
    
    async function register(formData: FormData) {
      'use server'
   
      const rawFormData = {
        name: formData.get('name') as string,
        email: formData.get('email') as string,
      }

      const data = await sanityClient.fetch(
        `*[_type == "blogPost"]{
        ...,
        mainImage {
        ...,
        asset ->  
        },
        body[] {
        ...,
        asset ->
        }
    } | order(_createdAt desc)`);
  
      // console.log(data[0])
      const title = data[0].title

      props.onLogin(title, rawFormData.email);
      // mutate data
      // revalidate cache
    }
  
    return (
      <form action={register}>
        <label>
          Username:
          <input type="text"  />
        </label>
        <br />
        <label>
          Email:
          <input type="email" />
        </label>
        <br />
        <input className="btn" type="submit" value="Submit" />
      </form>
    )
  }
  
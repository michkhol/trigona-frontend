import Solutions2 from "@/app/_components/solutions2"
import { use } from "react";

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};


export default function Solutions2Page({ searchParams }: Props) {
  const params = use(searchParams); 
  const userData = { 
    name: params.name as string, 
    email: params.email as string
  };
  
  return(
    <Solutions2 userData={userData}/>
  )
}
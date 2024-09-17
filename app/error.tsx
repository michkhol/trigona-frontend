'use client'

import {client} from "@/lib/postmark"
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  // const [err, setErr] = useState(null as unknown)
  console.log("In Error boundary")
  console.log("Boundary error: " + error.stack)

  
  return (
    <div className="flex justify-center">
      <div>
        <div className="flex justify-center">
          <h2 className="text-2xl">Something went wrong!</h2>
        </div>
        <br />
        <p>Please contact our suport at <a className="link" href="mailto:support@trigonaconsulting.com">support@trigonaconsulting.com</a>, or try again later.</p>
      </div>
    </div>
  )
}
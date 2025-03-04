
export default function Contact() {
  return (
    <div className="flex flex-col justify-center w-full mx-2 mb-6">
      <div><h2 className="my-10 text-center text-8xl">We are Here to <span className="text-red-800 italic font-bold">Help</span></h2></div>
      <div className="m-auto px-2 flex flex-col" >
        <p className="text-xl">If you need assistance, have a question or feedback, please contact us. We look forward to talking with you!</p>
        <form className="mx-auto min-w-md" name="contact" method="POST" data-netlify="true" action="/thanks.html">
          <input type="hidden" name="form-name" value="contact" />
          <input type="hidden" name="subject" value="Inquiry from trigona.netlify.app" />
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Name:</legend>
            <input type="text" placeholder="Required" required={true} className="input input-bordered w-full border-red-800" name="name"/>
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Your email:</legend>
            <input type="email" placeholder="Required" required={true} className="input input-bordered w-full border-red-800" name="email" />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Message:</legend>
            <textarea className="textarea textarea-bordered h-24 border-red-800 w-full" placeholder="Required" required={true} name="message" ></textarea>
          </fieldset>
        <p className="text-center">
          <button className="mt-6 bg-red-800 text-xl text-white px-10 py-3 font-bold rounded-full hover:bg-orange-600 transition-colors" type="submit">Send</button>
        </p>
      </form>
      </div>
    </div>
  );
}


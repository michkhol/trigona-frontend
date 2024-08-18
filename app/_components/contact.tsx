import DecoratedTitle from "./decorated-title";

export default function Contact() {
  return (
    <div className="flex flex-col justify-center w-full mx-2 mb-6">
      <div><h2 className="my-10 text-center text-6xl font-semibold">We are Here to Help</h2></div>
      <div className="m-auto" >
        <p className="text-xl">If you need assistance, have a question or feedback, please contact us. We look forward to talking with you!</p>
        <form name="contact" method="POST" data-netlify="true" action="/thanks.html">
          <input type="hidden" name="form-name" value="contact" />
          <input type="hidden" name="subject" value="Inquiry from trigona.netlify.app" />
          <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Name:</span>
          </div>
          <input type="text" placeholder="Required" required={true} className="input input-bordered w-full max-w-xs border-orange-600" name="name"/>
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Your email:</span>
            </div>
            <input type="email" placeholder="Required" required={true} className="input input-bordered w-full max-w-xs border-orange-600" name="email" />
          </label>
        <label className="form-control">
          <div className="label">
            <span className="label-text">Message:</span>
          </div>
          <textarea className="textarea textarea-bordered h-24 border-orange-600" placeholder="Required" required={true} name="message" ></textarea>
        </label>
        <p className="text-center">
          <button className="mt-6 bg-red-800 text-xl text-white px-6 py-3 font-bold rounded-full hover:bg-orange-600 transition-colors" type="submit">Send</button>
        </p>
      </form>
      </div>
    </div>
  );
}


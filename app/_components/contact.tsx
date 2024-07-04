import DecoratedTitle from "./decorated-title";

export default function Contact() {
  return (
    <>
      <div id="contact" className="lg:w-[60%]">
        <DecoratedTitle title="We are Here to Help" />
        <div className="flex flex-row justify-center w-full">
          <div className="justify-center" >
            <p className="">If you need assistance, have a question or feedback, please contact us. We look forward to talking with you!</p>
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
              <button className="btn btn-primary mt-6" type="submit">Send</button>
            </p>
          </form>
          </div>
        </div>
      </div>
    </>
  );
}


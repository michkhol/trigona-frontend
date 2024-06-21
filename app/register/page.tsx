import officeBackgroud from "@/public/images/New-Office.jpg";
import Image from "next/image";
import DecoratedTitle from "../_components/decorated-title";

export default function Home() {
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
            <form name="register" method="POST" action="/api/bigin">
              <label className="form-control max-w-xl mx-auto">
              <div className="label">
                <span className="label-text">Name:</span>
              </div>
              <input type="text" placeholder="Required" className="input input-bordered max-w-xl border-orange-600" name="name"/>
              </label>
              <label className="form-control max-w-xl mx-auto">
                <div className="label">
                  <span className="label-text">Your email:</span>
                </div>
                <input type="email" placeholder="Required" className="input input-bordered max-w-xl border-orange-600" name="email" />
              </label>
              <div className="flex justify-center"><button className="btn btn-primary mt-6" type="submit">More info</button></div>
            </form>
          </div>
          <div className="text-center text-sm mt-2">
            <p>By submitting the form you agree to our <a className="link">Terms and Conditions</a> and <a className="link">Privacy Policy</a>.</p>
          </div>
        </div>
      </div>
    </div>  
  );
}

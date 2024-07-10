import { client } from "../../lib/postmark"

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


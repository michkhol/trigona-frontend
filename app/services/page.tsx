import officeBackgroud from "@/public/images/New-Office.jpg"
import Image from "next/image";
import Link from "next/link";
import img1 from "@/public/images/95550594small.jpeg"
import serv1 from "@/public/images/108828452small.jpeg"
import serv2 from "@/public/images/82137468small.jpeg"
import serv3 from "@/public/images/62990460small.jpeg"
import serv4 from "@/public/images/112202028small.jpeg"

export default function Services() {
  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <div className="relative h-96 w-full">
        <Image className="object-cover z-0 object-center" src={officeBackgroud} alt="Background" fill={true} />
        <h1 className="relative z-10 font-serif font-semibold text-center text-white text-5xl pt-40">Let Us Help You</h1>
      </div>
      {/*
      <div className="text-center">
        <h1 className="font-serif font-semibold text-3xl mt-10">Let&apos;s Talk About Changes As A Whole...</h1>
      </div>
      <div className="lg:w-[60%]">
        <hr className="my-6"/>
        <Image className="hidden lg:inline float-left pr-6" src={img1} alt="Services image"/>
        <span className="">They come in all forms and shapes. It can be new business processes implementation, systems and technology 
        transformations, merger and acquisitions, organizational restructuring, cultural transformations and many others. 
        But one thing they have in common: change can be disruptive. As a result of the change, 
        jobs have to be structured and performed differently, people have to change their paradigm of thinking, 
        operational efficiencies suffer.  Without a clear organizational change management strategy that will take address all these issues, 
        the whole initiative is at a great risk of doom. Depending on the type of the change, there are specific change management key 
        success factors that are essential for the enablement of the overall transformation that need to be addressed by 
        a well designed organizational change management strategy.
                    <ul className="list-disc list-outside pl-12">
                      <li><span className="font-semibold">Organizational Restructuring:</span> when companies transform their business models, teams, 
                        processes or strategic goals,  maximizing operational continuity and minimizing  productivity 
                        disruptions require communication of a compelling vision by senior leadership, ongoing executive 
                        sponsorship and solid understanding of change impacts by operational teams.  </li>
                      <li><span className="font-semibold">IT System Transformations:</span> As the new technologies, social media, Big Data, enterprise resource 
                        planning and cloud-based solutions are changing the way people, and businesses operate it is critical 
                        for operational efficiency to implement targeted, timely communications and training strategy to 
                        ensure knowledge transfer of the new efficiencies and capabilities.</li>
                      <li><span className="font-semibold">Growth Initiatives:</span> In order to stay relevant and competitive in time of the ever changing 
                        competitive landscape many organizations are focusing more and more on the reinventing themselves 
                        through expansion of the service and product lines and inventing new capabilities.  To ensure that this 
                        growth becomes and integral part of the organization it is essential to migrate the organizational culture 
                        and ensure that stakeholder engagement is in alignment with the new strategies and objectives at 
                        all levels of the organization.</li>
                    </ul>
                    To ensure that your organization transitions through the change with minimum disruptions, 
                    Trigona Consulting LLC provides a robust suit of services, based field tested best practices and methodologies.</span>
      </div>
      */}
      <div className="w-[60%]">
        <h1 className="text-center font-serif font-semibold text-3xl mt-10">Our Services</h1>
        <hr className="my-6"/>
        <div className="grid grid-rows-1 lg:grid-cols-3 w-full lg:gap-4">
          <div className="relative inset-0">
            <Image className="m-auto" src={serv1} alt="Services1"/>
            <h2 className="text-center font-serif text-xl">Transformation Delivery Consulting</h2>
            <ul className="list-disc list-outside pl-6">
              <li>Organizational Change Management</li>
              <li>Organizational Design</li>
              <li>Program/Project Management</li>
              <li>Business Process Re-engineering</li>
            </ul>
          </div>
          <div className="relative inset-0">
            <Image className="m-auto" src={serv2} alt="Services2"/>
            <h2 className="text-center font-serif text-xl">On-Demand Executive Expertise</h2>
            <ul className="list-disc list-outside pl-6">
              <li>Interim Executive Leadership</li>
              <li>Project Based Leadership</li>
              <li>Customized Leadership Service</li>
            </ul>
          </div>
          <div className="relative inset-0">
            <Image className="m-auto" src={serv3} alt="Services3"/>
            <h2 className="text-center font-serif text-xl">Capability Building Tailored Training Solutions</h2>
            <ul className="list-disc list-outside pl-6">
              <li>Live Web-Based and In-Person Capability Building Training Offerings</li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <Link className="btn btn-primary" href="/about">Learn More</Link><br />
        {/*
        <form method="POST" action="/api">
          <button className="btn" type="submit">Webinar</button>
        </form>
        */}
      </div>
    </div>
 
  );
}

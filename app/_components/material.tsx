import Image from "next/image";
import Store from "./store";
import {stripe} from "@/lib/stripe"
import Link from "next/link";
import img from "@/public/images/principal.png"
import whoShouldEnroll from "@/public/images/whoshouldenroll.webp"

import time from "@/public/images/time.png";
import { Methodology } from "./svg-icons";
import tools from "@/public/images/practical.png"
import { Format } from "./svg-icons";
import { Personalized } from "./svg-icons";
import { Expert } from "./svg-icons";
import career from "@/public/images/career.png"
import impact from "@/public/images/impact.png"
import smallClass from "@/public/images/smallclass.png"
import takeaway from "@/public/images/takeaway.webp"

export default async function Material() {
  const prices = (await stripe.prices.list()).data
  
  return (
    <div className="relative flex flex-col">
      {/* TODO: Sticky menu here */}
      <div className="hidden fixed z-50 top-96 right-6">
        <h1 className="text-6xl">Enroll</h1>
      </div>
      <div className="mb-6 mx-6 pb-6 pr-6 bg-base-200">
        <h1 className="mt-6 ml-6 text-5xl mb-4"><span className="italic">Training</span> <span className="font-bold text-red-800">Curriculum</span></h1>
        <div className="grid grid-cols-1 grid-rows-6 lg:grid-cols-2 lg:grid-rows-3 items-end">
          <div className="ml-6 mt-6">
            <div className="text-xl h-14">
              <span className="font-bold italic">MODULE 1: </span>
              <span className="text-red-800 font-bold">CHANGE MANAGEMENT APPROACH & PLAN</span>
            </div>
            <ul className="list-outside list-disc pl-6 marker:text-red-800">
              <li>Development of an actionable change management framework.</li>
              <li>Alignment of change activities with functional roadmaps. </li>
              <li>Identifying and mitigating risks in change initiatives. </li>
              <li>Creation and management of impactful change management plans.</li>
            </ul>
          </div>
          <div className="ml-6 mt-6">
            <div className="text-xl h-14"><span className="font-bold italic">MODULE 2: </span>
            <span className="font-bold text-red-800">PERSONA DEVELOPMENT & STAKEHOLDER ANALYSIS</span>
            </div>
            <ul className="pl-6 list-outside list-disc marker:text-red-800">
              <li>Benefit of persona development for change management work.</li>
              <li>Framework of actionable persona-based stakeholder analysis.</li>
              <li>Creating actionable stakeholder engagement strategies.</li>
              <li>Leveraging AI for deeper stakeholder analysis and predictive modeling.</li>
            </ul>
          </div>
          <div className="ml-6 mt-6">
            <div className="text-xl h-14"><span className="font-bold italic">MODULE 3: </span>
            <span className="font-bold text-red-800">COMS PLAN & STAKEHOLDER JOURNEY</span></div>
            <ul className="pl-6 list-outside list-disc marker:text-red-800">
              <li>Developing multi-channel communication strategies and plans.</li>
              <li>Comprehensive stakeholder journeys mapping.</li>
              <li>Crafting of compelling transformation narratives.</li>
              <li>Employment of AI for ethical message customization.</li>
            </ul>
          </div>
          <div className="ml-6 mt-6">
            <div className="text-xl h-14"><span className="font-bold italic">MODULE 4: </span>
            <span className="font-bold text-red-800">CHANGE CHAMPION NETWORK</span></div>
            <ul className="pl-6 list-outside list-disc marker:text-red-800">
              <li>Role and importance of change champion networks in transformations.</li>
              <li>Key attributes for effective change champions.</li>
              <li>Building and management of high-impact change champion network for transformation success.</li>
            </ul>
          </div>
          <div className="ml-6 mt-6">
            <div className="text-xl h-14"><span className="font-bold italic">MODULE 5: </span>
            <span className="font-bold text-red-800">CHANGE IMPACT ASSESSMENT & TRAINING NEEDS ANALYSIS</span>
            </div>
            <ul className="pl-6 list-outside list-disc marker:text-red-800">
              <li>Benefit of comprehensive change impact assessments.</li>
              <li>Route from actionable training needs analysis to effective training curriculum.</li>
              <li>Training as a part of stakeholder journey maps.</li>
            </ul>
          </div>
          <div className="ml-6 mt-6">
            <div className="text-xl h-14"><span className="font-bold italic">MODULE 6: </span>
            <span className="font-bold text-red-800">CHANGE READINESS & EFFECTIVENESS ASSESSMENTS</span>
            </div>
            <ul className="pl-6 list-outside list-disc marker:text-red-800">
              <li>Change readiness and adoption measurement process.</li>
              <li>Grasp what metrics to use and when.</li>
              <li>Learn effective assessment tools.</li>
              <li>Use of AI tools for data analysis.</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex justify-center">
           <Link href="/pricing" className="bg-red-800 text-white text-2xl mt-8 px-8 py-3 rounded-full font-bold text-center hover:bg-orange-600 transition-colors w-52">
              Enroll Now
            </Link>
         </div>
      </div>
      <div className="ml-2 mt-6">
        <h2 className="text-center text-5xl mt-4"><span className="italic">How It</span><span className="font-bold text-red-800"> Works</span></h2>
        <div className="grid grid-cols-1 grid-rows-8 lg:grid-cols-3 lg:grid-rows-3 gap-4 text-center text-xl mr-4">
          <div className="">
            <div className="my-4 flex items-center justify-center gap-4 h-14">
              <Format className="fill-red-800" viewBox="0 0 128 128" height={50} />
              <h2 className="text-red-800 text-2xl">FORMAT</h2>
            </div>
            <p>Live Online Training + On-demand Recordings</p>
          </div>
          <div className="">
            <div className="my-4 flex items-center justify-center gap-4 h-14">
              <Image src={time} alt="time" height={45} />
              <h2 className="text-2xl text-red-800">TIME COMMITMENT</h2>
            </div>
            <p>3 Weeks | 3-4 Hours/Week | 2 Live Classes & 1 Office Hour Weekly | Optional One-on-One Coaching</p>
          </div>
          <div className="">
            <div className="my-4 flex items-center justify-center gap-4 h-14">
              <Methodology className="fill-red-800" viewBox="0 0 126 126" width={45} />
              <h2 className="text-2xl text-red-800">METHODOLOGY</h2>
            </div>
            <p>Learn Top-Tier Consulting Change Management Techniques</p>
          </div>
          <div className="">
            <div className="my-4 flex items-center justify-center gap-4 h-14">
              <Image src={tools} alt="tools" width={45} />
              <h2 className="text-2xl text-red-800">PRACTICAL TOOLS</h2>
            </div>
            <p>Receive Ready-to-Use Templates and Step-by-Step Guides</p>
          </div>
          <div className="">
            <div className="my-4 flex items-center justify-center gap-4 h-14">
              <Personalized className="fill-red-800" viewBox="0 0 126 111" height={45} />
              <h2 className="text-2xl text-red-800">PERSONALIZED SUPPORT</h2>
            </div>
            <p>Get Tailored Feedback for Your Organizational Challenges</p>
          </div>
          <div className="">
            <div  className="my-4 flex items-center justify-center gap-4 h-14">
              <Expert className="fill-red-800" viewBox="0 0 128 100" width={64} />
              <h2 className="text-2xl text-red-800">EXPERT INSTRUCTORS</h2>
            </div>           
            <p>Learn from Former Big 5 Consulting Leaders</p>
          </div>
          <div className="">
            <div className="my-4 flex items-center justify-center gap-4 h-14">
              <Image src={career} alt="career" width={50} />
              <h2 className="text-2xl text-red-800">CAREER ADVANCEMENT</h2>
            </div>
            <p>Master AI-Driven Change Management Skills</p>
          </div>
          <div className="">
            <div className="my-4 flex items-center justify-center gap-4 h-14">
              <Image src={impact} alt="impact" width={50} />
              <h2 className="text-2xl text-red-800">IMMEDIATE IMPACT</h2>
            </div>
            <p>Apply Learnings Through Guided Real-World Projects</p>
          </div>
          <div className="">
            <div className="my-4 flex items-center justify-center gap-4 h-14">
              <Image src={smallClass} alt="impact" width={50} />
              <h2 className="text-2xl text-red-800">SMALL CLASS EXPERIENCE</h2>
            </div>
            <p>Participate in Facilitated Discussions With Industry Peers</p>
          </div>
        </div>
        {/* <div className="mb-4 flex justify-center">
           <Link href="/pricing" className="bg-red-800 text-white text-2xl mt-8 px-8 py-3 rounded-full font-bold text-center hover:bg-orange-600 transition-colors w-52">
              Enroll Now
            </Link>
         </div> */}
      </div>
      <div className="bg-base-200 py-6">
        <Store prices={prices}/>
        {/* <div className="my-10 flex justify-center">
           <Link href="/pricing" className="bg-red-800 text-white text-2xl px-8 py-3 rounded-full font-bold text-center hover:bg-orange-600 transition-colors w-52">
              Enroll Now
            </Link>
         </div> */}
  </div>
      <div className="flex flex-row gap-4 ml-2">
        <Image className="ml-4 hidden lg:block" src={takeaway} alt="takeaway" height={600} priority={true} />
        <div className="mt-6 mx-4">
          <h2 className="text-5xl mt-6"><span className="italic">Key Course</span> <span className="font-bold text-red-800">Takeaways</span></h2>
          <p className="mt-4 text-xl">
          Bring yourself and your team to the next level with cutting-edge change management skills that drive successful strategic initiatives in any business landscape.
          </p>
          <div className="w-[60%] h-[1px] mt-4 bg-red-800"></div>
          <ul className="list-decimal list-inside pl-3 leading-loose mt-8 text-xl marker:text-red-800 marker:font-bold">
            <li>Master data-driven change strategies for diverse stakeholder engagement.</li>
            <li>Optimize change sequencing for maximum impact and resource efficiency.</li>
            <li>Leverage AI technologies strategically in change management processes.</li>
            <li>Apply versatile tools and frameworks to various transformation scenarios.</li>
            <li>Develop practical skills to sustain long-term organizational change.</li>
            <li>Address real-world challenges with immediately applicable tactical solutions.</li>
          </ul>
        <div className="mt-4 flex justify-center">
           <Link href="/pricing" className="bg-red-800 text-white text-2xl mt-8 px-8 py-3 rounded-full font-bold text-center hover:bg-orange-600 transition-colors w-52">
              Enroll Now
            </Link>
         </div>
        </div>
      </div>
      <div className="flex flex-row bg-base-200">
        <div className="ml-4">
          <h2 className="text-5xl mt-10"><span className="italic">Who Should</span> <span className="font-bold text-red-800">Enroll</span></h2>
          <p className="text-xl mt-6">
          This course is ideal for professionals directly involved in implementing and managing organizational change and those seeking practical skills to drive successful transformations in their daily work.
          </p>
          <ul className="list-disc list-inside pl-3 leading-loose mt-6 text-xl font-bold text-red-800 marker:text-black">
            <li>Change Management Specialists</li>
            <li>Project Managers</li>
            <li>HR Business Partners</li>
            <li>IT Implementation Leads</li>
            <li>Process Improvement Coordinators</li>
            <li>Communications Specialists</li>
            <li>Training and Development Coordinators</li>
            <li>Department Team Leaders</li>
          </ul>
          <div className="mt-6 mb-8 flex justify-center">
           <Link href="/pricing" className="bg-red-800 text-white text-2xl px-8 py-3 rounded-full font-bold text-center hover:bg-orange-600 transition-colors w-52">
              Enroll Now
            </Link>
         </div>
        </div>
        <Image className="mx-4 hidden lg:block" src={whoShouldEnroll} alt="takeaway" height={600} priority={true} />
       </div>
      <div className="flex flex-col lg:flex-row mt-6">
        <div className="flex-none">
          <Image className="" src={img} alt="Managing Director" height={500}/>
          <div className="max-w-[400px] text-center text-xl italic">
            <Link href="https://www.linkedin.com/in/olga-denisova-pmp-01ab847/" className="hover:underline">Olga Denisova<br />Founder &amp; Managing Principal</Link>
          </div>
        </div>
        <div className="mx-4">
          <h2 className="text-5xl mt-6"><span className="italic">Faculty</span> <span className="font-bold text-red-800">Information</span></h2>
          <p className="text-xl mt-6">
          <span className="font-bold text-red-800">Olga Denisova</span> is a distinguished organizational change management leader with over 17 years of invaluable experience advising C-Suite executives at Fortune 500 companies and esteemed federal agencies. As an Accenture alumna, she has spearheaded transformational programs worth over $500M in collaboration with industry titans like Deloitte, McKinsey, and KPMG. Currently, Olga heads her boutique consulting firm, where she partners with senior executives at Fortune 200 powerhouses and the largest government agencies, providing cutting-edge human capital solutions to drive transformational success. Renowned for her thought leadership in organizational change management, Olga has guided numerous organizations through large-scale ERP implementations, M&A integrations, and business redesign initiatives, earning extensive accolades from clients and partners alike.
          </p>
          <div className="mt-16 flex justify-center">
           <Link href="/pricing" className="bg-red-800 text-white text-2xl px-8 py-3 rounded-full font-bold text-center hover:bg-orange-600 transition-colors w-52">
              Enroll Now
            </Link>
         </div>
        </div>
      </div>
   </div>  
  );
}

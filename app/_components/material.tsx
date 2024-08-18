import Image from "next/image";
import DecoratedTitle from "../_components/decorated-title";
import Store from "./store";
import {stripe} from "@/lib/stripe"
import Link from "next/link";
import img from "@/public/images/principal.png"
import { Computer } from "./svg-icons";
import { Time } from "./svg-icons";
import { Tools } from "./svg-icons";

export default async function Material() {
  const prices = (await stripe.prices.list()).data
  
  return (
    <div className="flex flex-col">
      {/* <div className="ml-2">
        <h2 className="font-bold text-3xl mt-6">After completing the course, you will</h2>
        <ul className="list-decimal list-inside pl-3 leading-loose mt-4">
          <li>Deeply understand change management activities and their optimal timing</li>
          <li>Master people-centered approaches to organizational transformation</li>
          <li>Attain practical skills to align change initiatives with functional milestones</li>
          <li>Gain expertise in leveraging AI to enhance change management efficiency</li>
        </ul>
      </div> */}
      <div className="my-6 mx-2 lg:ml-[10%] lg:mr-[5%]">
        <h1 className="font-bold text-3xl mb-4">Curriculum</h1>
        <div className="grid grid-cols-1 grid-rows-6 lg:grid-cols-2 lg:grid-rows-3 gap-4">
          <div className="collapse collapse-arrow bg-base-200">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium"><span className="font-bold">MODULE 1: </span>CHANGE MANAGEMENT APPROACH & PLAN</div>
            <div className="collapse-content">
              <ul className="list-inside list-['-_'] leading-loose">
                <li>Development of an actionable change management framework.</li>
                <li>Alignment of change activities with functional roadmaps. </li>
                <li>Identifying and mitigating risks in change initiatives. </li>
                <li>Creation and management of impactful change management plans.</li>
              </ul>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium"><span className="font-bold">MODULE 2: </span>PERSONA DEVELOPMENT & STAKEHOLDER ANALYSIS</div>
            <div className="collapse-content">
              <ul className="list-inside list-['-_'] leading-loose">
                <li>Benefit of persona development for change management work.</li>
                <li>Framework of actionable persona-based stakeholder analysis.</li>
                <li>Creating actionable stakeholder engagement strategies.</li>
                <li>Leveraging AI for deeper stakeholder analysis and predictive modeling.</li>
              </ul>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium"><span className="font-bold">MODULE 3: </span>COMS PLAN & STAKEHOLDER JOURNEY</div>
            <div className="collapse-content">
              <ul className="list-inside list-['-_'] leading-loose">
                <li>Developing multi-channel communication strategies and plans.</li>
                <li>Comprehensive stakeholder journeys mapping.</li>
                <li>Crafting of compelling transformation narratives.</li>
                <li>Employment of AI for ethical message customization.</li>
              </ul>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium"><span className="font-bold">MODULE 4: </span>CHANGE CHAMPION NETWORK</div>
            <div className="collapse-content">
              <ul className="list-inside list-['-_'] leading-loose">
                <li>Role and importance of change champion networks in transformations.</li>
                <li>Key attributes for effective change champions.</li>
                <li>Building and management of high-impact change champion network for transformation success.</li>
              </ul>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium"><span className="font-bold">MODULE 5: </span>CHANGE IMPACT ASSESSMENT & TRAINING NEEDS ANALYSIS</div>
            <div className="collapse-content">
              <ul className="list-inside list-['-_'] leading-loose">
                <li>Benefit of comprehensive change impact assessments.</li>
                <li>Route from actionable training needs analysis to effective training curriculum.</li>
                <li>Training as a part of stakeholder journey maps.</li>
              </ul>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium"><span className="font-bold">MODULE 6: </span>CHANGE READINESS & EFFECTIVENESS ASSESSMENTS</div>
            <div className="collapse-content">
              <ul className="list-inside list-['-_'] leading-loose">
                <li>Change readiness and adoption measurement process.</li>
                <li>Grasp what metrics to use and when.</li>
                <li>Learn effective assessment tools.</li>
                <li>Use of AI tools for data analysis.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="ml-2 mt-6">
        <h2 className="font-bold text-center text-3xl mt-4">How it works</h2>
        <div className="grid grid-cols-1 grid-rows-8 lg:grid-cols-2 lg:grid-rows-4 gap-4 text-center lg:w-[50%] m-auto">
          <div className="">
            <Computer className="m-auto fill-orange-600" viewBox="0 0 64 64" width={64} />
            <h2 className="font-semibold text-center text-2xl mt-4">FORMAT</h2>
            <p>Live Online Training + On-demand Recordings</p>
          </div>
          <div className="">
            <Time className="m-auto fill-orange-600" viewBox="0 0 64 64" width={64} />
            <h2 className="font-semibold text-center text-2xl mt-4">TIME COMMITMENT</h2>
            <p>3 Weeks | 3-4 Hours/Week | 2 Live Classes & 1 Office Hour Weekly | Optional One-on-One Coaching</p>
          </div>
          <div className="">
            <Computer className="m-auto fill-orange-600" viewBox="0 0 64 64" width={64} />
            <h2 className="font-semibold text-center text-2xl mt-4">METHODOLOGY</h2>
            <p>Learn Top-Tier Consulting Change Management Techniques</p>
          </div>
          <div className="">
            <Tools className="m-auto fill-orange-600" viewBox="-15 0 64 40" width={100} />
            <h2 className="font-semibold text-center text-2xl mt-4">PRACTICAL TOOLS</h2>
            <p>Access Ready-to-Use Templates and Step-by-Step Guides</p>
          </div>
          <div className="">
            <Computer className="m-auto fill-orange-600" viewBox="0 0 64 64" width={64} />
            <h2 className="font-semibold text-center text-2xl mt-4">PERSONALIZED SUPPORT</h2>
            <p>Tailored Feedback for Your Organizational Challenges</p>
          </div>
          <div className="">
            <Computer className="m-auto fill-orange-600" viewBox="0 0 64 64" width={64} />
            <h2 className="font-semibold text-center text-2xl mt-4">EXPERT INSTRUCTORS</h2>
            <p>Learn from Former Big 5 Consulting Leaders</p>
          </div>
          <div className="">
            <Computer className="m-auto fill-orange-600" viewBox="0 0 64 64" width={64} />
            <h2 className="font-semibold text-center text-2xl mt-4">CAREER ADVANCEMENT</h2>
            <p>Master AI-Driven Change Management Skills</p>
          </div>
          <div className="">
            <Computer className="m-auto fill-orange-600" viewBox="0 0 64 64" width={64} />
            <h2 className="font-semibold text-center text-2xl mt-4">IMMEDIATE IMPACT</h2>
            <p>Apply Learnings Through Guided Real-World Projects</p>
          </div>
           
        </div>

      </div>
      <Store prices={prices}/>
      <div className="ml-2">
        <h2 className="font-bold text-3xl mt-4">Key Course Takeaways</h2>
        <ul className="list-decimal list-inside pl-3 leading-loose mt-4">
          <li>Master data-driven change strategies for diverse stakeholder engagement.</li>
          <li>Optimize change sequencing for maximum impact and resource efficiency.</li>
          <li>Leverage AI technologies strategically in change management processes.</li>
          <li>Apply versatile tools and frameworks to various transformation scenarios.</li>
          <li>Develop practical skills to sustain long-term organizational change.</li>
          <li>Address real-world challenges with immediately applicable tactical solutions.</li>
        </ul>
      </div>
      <div className="ml-2">
        <h2 className="font-bold text-3xl mt-4">Who Should Enroll</h2>
        <p>
        This course is ideal for professionals directly involved in implementing and managing organizational change and those seeking practical skills to drive successful transformations in their daily work. 
        </p>
        <ul className="list-disc list-inside pl-3 leading-loose mt-2">
          <li>Change Management Specialists.</li>
          <li>Project Managers.</li>
          <li>HR Business Partners.</li>
          <li>IT Implementation Leads.</li>
          <li>Process Improvement Coordinators.</li>
          <li>Communications Specialists.</li>
          <li>Training and Development Coordinators.</li>
          <li>Department Team Leaders.</li>
        </ul>
      </div>
      <div className="mt-6">
        <h2 className="text-center text-5xl font-semibold mt-6">Presenter</h2>
        <div className="mt-6 px-4 flex flex-col lg:flex-row gap-4">
          <div className="">
          Olga Denisova is a distinguished organizational change management leader with over 17 years of invaluable experience advising C-Suite executives at Fortune 500 companies and esteemed federal agencies. As an Accenture alumna, she has spearheaded transformational programs worth over $500M in collaboration with industry titans like Deloitte, McKinsey, and KPMG. Currently, Olga heads her boutique consulting firm, where she partners with senior executives at Fortune 200 powerhouses and the largest government agencies, providing cutting-edge human capital solutions to drive transformational success. Renowned for her thought leadership in organizational change management, Olga has guided numerous organizations through large-scale ERP implementations, M&A integrations, and business redesign initiatives, earning extensive accolades from clients and partners alike. 
          </div>
          <div className="flex-none w-60">
            <div className="flex flex-col">
            <div>
              <Image className="" src={img} alt="Managing Director" height={400} width={400}/>
            </div>
            <div className="text-center text-sm italic">
              <Link href="https://www.linkedin.com/in/olga-denisova-pmp-01ab847/" className="hover:underline">Olga Denisova<br />Managing Director</Link>
            </div>
            </div>
          </div>
       </div>            
      </div>
   </div>  
  );
}

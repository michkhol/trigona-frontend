import Image from "next/image";
import DecoratedTitle from "../_components/decorated-title";
import Store from "./store";
import {stripe} from "@/lib/stripe"

export default async function Material() {

  const prices = (await stripe.prices.list()).data
  
  return (
    <div className="flex flex-col">
      <div className="">
      <h2 className="font-serif font-semibold text-3xl mt-4">After completing the course, you will gain</h2>
      <ul className="list-decimal list-inside pl-3 leading-loose mt-4">
        <li>Deep understanding of change management activities and their optimal timing</li>
        <li>Mastery of people-centered approaches to organizational transformation</li>
        <li>Practical skills to align change initiatives with functional milestones</li>
        <li>Expertise in leveraging AI to enhance change management efficiency</li>
      </ul>
        <h2 className="font-serif font-semibold text-3xl mt-4">Course highlights</h2>
        <ol className="list-decimal list-inside pl-3 leading-loose mt-4">
          <li>Down-to-earth approach applicable to any organization or transformation type</li>
          <li>Comprehensive activity lists, templates, and frameworks</li>
          <li>Strategies for navigating the human aspects of change</li>
          <li>Techniques to maximize success in organizational transformations</li>
        </ol>
      </div>
      <div className="mb-6">
        <h1 className="font-serif font-semibold text-3xl mt-4">Curriculum</h1>
      </div>

      <div className="collapse collapse-arrow bg-base-200">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">MODULE 1: CHANGE MANAGEMENT APPROACH</div>
        <div className="collapse-content">
          <ul className="list-inside list-['-_'] leading-loose">
            <li>Learn actionable change management framework and  activities: what needs to be done and when.</li>
            <li>Understand how theses activities  align with functional roadmap. </li>
            <li>Acquire knowledge of best practices and common pitfalls. </li>
            <li>Learn to create an actionable change management plan.</li>
          </ul>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">MODULE 2: PERSONA DEVELOPMENT & STAKEHOLDER ANALYSIS</div>
        <div className="collapse-content">
          <ul className="list-inside list-['-_'] leading-loose">
            <li>Understand how persona development simplifies future change management work.</li>
            <li>Learn how to conduct persona-based stakeholder analysis and what to do with the results.</li>
            <li>Supplement with AI tools for actionable stakeholder analysis.</li>
          </ul>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">MODULE 3: CHANGE CHAMPION NETWORK</div>
        <div className="collapse-content">
          <ul className="list-inside list-['-_'] leading-loose">
            <li>Understand key requirements for impactful change champions.</li>
            <li>Learn how to establish and  how to  manage effective change champion network for project success.</li>
          </ul>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">MODULE 4: COMS PLAN & STAKEHOLDER JOURNEY PART 1</div>
        <div className="collapse-content">
          <ul className="list-inside list-['-_'] leading-loose">
            <li>Learn to develop effective communication plan and key components of stakeholder journey.</li>
            <li>Understand how to create audience and purpose-based communication, channels & tactics.</li>
            <li>Grasp components of impactful transformation stories.</li>
            <li>Ethical use of AI tools to customize messaging.</li>
          </ul>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">MODULE 5: CHANGE IMPACT ASSESSMENT & STAKEHOLDER JOURNEY PART 2</div>
        <div className="collapse-content">
          <ul className="list-inside list-['-_'] leading-loose">
            <li>Grasp the components of meaningful change impact assessment and actionable training needs analysis.</li>
            <li>Learn  to translate it all into effective training and continued stakeholder journey.</li>
          </ul>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">MODULE 6: CHANGE READINESS & ADOPTION ASSESSMENTS</div>
        <div className="collapse-content">
          <ul className="list-inside list-['-_'] leading-loose">
            <li>Understand change readiness and adoption measurement process.</li>
            <li>Grasp what metrics to use and when.</li>
            <li>Learn effective assessment tools.</li>
            <li>Use of AI tools for data analysis.</li>
          </ul>
        </div>
      </div>

      <h2 className="font-serif font-semibold text-3xl mt-4">Why choose this course</h2>
      <ul className="list-decimal list-inside pl-3 leading-loose mt-4">
        <li>Immersive, interactive learning experience</li>
        <li>Content distilled from renowned methodologies (Prosci, Kotter) and top consulting firms</li>
        <li>Real-world applications validated across global organizations</li>
        <li>Tailored for professionals dealing with limited resources and tight project timelines</li>
      </ul>
      <Store prices={prices}/>
      
    </div>  
  );
}

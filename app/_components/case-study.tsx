import Image from "next/image";
import stars from "@/public/images/5stars.webp"
import steve from "@/public/images/mariott-steve-heitzner.webp"
import hospitality from "@/public/images/hospitality.webp"

export default function CaseStudy() {
  return (
      <div className="bg-gray-100">
        <div className="mt-10">
          <h1 className="ml-10 text-6xl lg:text-8xl">Case <span className="text-red-800 font-bold italic">Study</span></h1>
        </div>
        <div className="w-[80%] mx-auto grid grid-cols-1 grid-rows-6 lg:grid-cols-2 lg:grid-rows-3 gap-10 text-xl mt-6 pb-6">
          <div className="p-4 border border-red-800">
            <h1 className="text-2xl font-bold">Driving Sustainable Change for a Mid-Market Hospitality Company</h1>
            <Image className="mx-auto mt-4" src={hospitality} alt="mariott"  />
            <h2 className="mt-4 font-bold">Challenge:</h2>
            <p className="text-sm">A mid-market hospitality company undertaking a complex Human Capital Management System implementation across 5,000+ properties faced substantial resistance to change among a diverse workforce, along with the challenge of maintaining uninterrupted operations. Without a sustainable change management approach, the project risked delays, system adoption and reduced productivity.</p>
            <h2 className="mt-4 font-bold">Approach:</h2>
            <p className="text-sm">Trigona Consulting crafted a tailored change management strategy to address these complexities. Our work included in-depth stakeholder analysis and persona-based change journeys to ensure alignment across teams. By focusing on building sustainable, internal change competencies, we enabled the client to navigate the transformation with confidence.</p>
            <h2 className="mt-6 font-bold text-white bg-red-800">&nbsp;Outcome:</h2>
            <p className="text-sm">The project achieved an impressive <span className="font-bold">87% readiness goal and 84% user buy-in</span>, ensuring a seamless Oracle rollout. Beyond immediate success, the organization gained a strong in-house change management function, empowering them to lead future transformations independently and effectively.</p>
          </div>
          <div className="p-4 border border-red-800">
            <h1 className="text-2xl font-bold">Revolutionizing Operations for a Global Technology Leader</h1>
            <Image className="mx-auto mt-4" src={hospitality} alt="mariott"  />
            <h2 className="mt-4 font-bold">Challenge:</h2>
            <p className="text-sm">After a major spin-off, a global technology company needed to restructure operations for 15,000 employees worldwide. The CIO&apos;s shared service model required optimization to reduce costs, streamline processes, and ensure compliance. The organization faced challenges with readiness, data integrity, and the risk of operational disruptions during the transition.</p>
            <h2 className="mt-4 font-bold">Approach:</h2>
            <p className="text-sm">Trigona Consulting developed a comprehensive change management strategy based on stakeholder analysis and strategic communication. We reimagined the CIO&apos;s shared service structure, optimizing the operating model and enhancing organizational readiness. Through our tailored approach, we also created a reusable transformation framework, equipping the organization with tools for managing future changes independently.</p>
            <h2 className="mt-6 font-bold text-white bg-red-800">&nbsp;Outcome:</h2>
            <p className="text-sm">Our efforts led to a <span className="font-bold">20% increase in organizational readiness</span>, a seamless transition to the new operating model, and substantial <span className="font-bold">cost reductions</span>. This project not only met immediate restructuring goals but also fostered a culture of adaptability, positioning the client for long-term success in a dynamic market environment.</p>
          </div>
          <div className="p-4 border border-red-800">
            <h1 className="text-2xl font-bold">Transforming Financial Management for a Department of Defense Organization</h1>
            <Image className="mx-auto mt-4" src={hospitality} alt="mariott"  />
            <h2 className="mt-4 font-bold">Challenge:</h2>
            <p className="text-sm">A major Department of Defense organization faced the need to streamline its financial and logistical systems while achieving significant cost reductions. With massive expense reduction goals, the project required consolidating nine general ledgers and integrating 200 financial and logistics systems. The complexity of the organization&apos;s dual reporting structure demanded a strategic approach to change management.</p>
            <h2 className="mt-4 font-bold">Approach:</h2>
            <p className="text-sm">Trigona Consulting established and led the Enterprise Change Management Office (ECMO) to oversee change efforts across six focus areas and approximately 80 projects. Our strategy ensured consistent, integrated communications, leadership engagement and training efforts tailored to the organization&apos;s structure and operating model. To ensure alignment, we developed a change-specific risk management framework, collaborated with the PMO to integrate change into project plans, and created an executive dashboard with KPIs to monitor readiness and adoption.</p>
            <h2 className="mt-6 font-bold text-white bg-red-800">&nbsp;Outcome:</h2>
            <p className="text-sm">The project successfully achieved <span className="font-bold">$180 million in expense reductions</span> while consolidating systems and enhancing operational efficiency. Trigona&apos;s approach ensured alignment with Financial Management Transformation goals, resulting in a smooth transition that positioned the client for long-term success.</p>
          </div>  
          <div className="p-4 border border-red-800">
            <h1 className="text-2xl font-bold">Standardizing Change Management for a Global SaaS Company&apos;s CTO Office</h1>
            <Image className="mx-auto mt-4" src={hospitality} alt="mariott"  />
            <h2 className="mt-4 font-bold">Challenge:</h2>
            <p className="text-sm">Following a major spin-off, the CTO office of a global technology company needed a consistent change management approach to support over 60 diverse programs and projects. Without a standardized framework, the organization faced inefficiencies, limited visibility, and challenges in managing change impacts across a complex technological landscape.</p>
            <h2 className="mt-4 font-bold">Approach:</h2>
            <p className="text-sm">Trigona Consulting implemented a uniform change management framework across the CTO&apos;s portfolio, creating standardized tools, templates, and processes adaptable to projects of varying sizes and complexities. We established a central repository of change resources and trained key personnel in their use. To ensure consistency, we introduced a governance structure to oversee change management practices across all projects, enhancing efficiency and alignment.</p>
            <h2 className="mt-6 font-bold text-white bg-red-800">&nbsp;Outcome:</h2>
            <p className="text-sm">The standardization effort <span className="font-bold">brought consistency and visibility to change management processes</span>, enabling the CTO office to prioritize resources, mitigate risks, and drive adoption more effectively. Trigona&apos;s work laid a strong foundation for the organization to execute technology initiatives with increased agility and success, positioning the SaaS leader to thrive in a dynamic market.</p>
          </div>
          <div className="p-4 border border-red-800">
            <h1 className="text-2xl font-bold">Enhancing Change Adoption for a National Education Client</h1>
            <Image className="mx-auto mt-4" src={hospitality} alt="mariott"  />
            <h2 className="mt-4 font-bold">Challenge:</h2>
            <p className="text-sm">FA national education client struggled to gain buy-in from a field-based workforce for corporate-led initiatives. This lack of alignment between corporate vision and field-level implementation created barriers to change adoption, impacting the success of transformation efforts across diverse educational settings.</p>
            <h2 className="mt-4 font-bold">Approach:</h2>
            <p className="text-sm">Trigona Consulting conducted an in-depth root cause analysis to identify key obstacles to change. Using these insights, we developed a standardized change management framework tailored to the client’s unique needs. A critical component of our solution was equipping change managers with AI-powered analytics tools, enabling data-driven insights and predictive capabilities. This innovative approach allowed for personalized communication strategies, accurate resistance predictions, and enhanced measurement of adoption rates.</p>
            <h2 className="mt-6 font-bold text-white bg-red-800">&nbsp;Outcome:</h2>
            <p className="text-sm">Trigona&apos;s approach bridged the gap between corporate initiatives and field implementation, fostering a culture of agile change management. The client not only <span className="font-bold">overcame immediate buy-in challenges</span> but also <span className="font-bold">gained a scalable, AI-enhanced framework</span> for future transformations, ensuring consistency and effectiveness across the organization.</p>
          </div>
          <div className="p-4 border border-red-800">
            <h1 className="text-2xl font-bold">Driving Post-M&amp;A Success for a Global Hospitality Leader</h1>
            <Image className="mx-auto mt-4" src={hospitality} alt="mariott"  />
            <h2 className="mt-4 font-bold">Challenge:</h2>
            <p className="text-sm">A global hospitality leader faced the complex task of integrating 6 Sales and 5 Revenue Management organizations after a major acquisition. With the need for cultural alignment, talent retention, and cost efficiencies, the project required a comprehensive approach to ensure a seamless transition and structural cohesion.</p>
            <h2 className="mt-4 font-bold">Approach:</h2>
            <p className="text-sm">Trigona Consulting led a strategic post-M&amp;A integration, focusing on cultural alignment and organizational restructuring. We facilitated executive leadership sessions to align stakeholders on priorities and developed a cross-company integration roadmap, synergy realization strategy, and tailored sales force integration approach. Our holistic strategy ensured that all workstreams moved in unison toward shared goals.</p>
            <h2 className="mt-6 font-bold text-white bg-red-800">&nbsp;Outcome:</h2>
            <p className="text-sm">The integration delivered impressive results, achieving <span className="font-bold">$24 million in first-year operating cost savings</span> while maintaining operational continuity and retaining top talent. Trigona&apos;s approach fostered a cohesive organizational culture, positioning the client for sustained success post-integration.</p>
          </div>
        </div>
      </div>
  );
}


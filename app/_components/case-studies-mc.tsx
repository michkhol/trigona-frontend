"use client"

import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import restaurant from "@/public/images/restaurant.jpg"
import hotel from "@/public/images/hotel.jpg"
import warship from "@/public/images/warship.jpg"
import wasteman from "@/public/images/wasteman.png"
import it1 from "@/public/images/it.jpg"
import it2 from "@/public/images/it2.jpg"
import school from "@/public/images/school.jpg"
import { useEffect, useState } from "react";

export default function CaseStudiesMC() {
  const [deviceType, setDeviceType] = useState('');

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  useEffect(() => {
    const agent = navigator.userAgent;
    console.log("Agent: " + agent)
    if (/Mobi/i.test(agent)) {
      setDeviceType('mobile');
      // console.log("Device: mobile")
    } else if (/Tablet/i.test(agent)) {
      setDeviceType('tablet');
      // console.log("Device: tablet")
    } else {
      setDeviceType('desktop');
      // console.log("Device: desktop")
    }

  }, [])

  return (
      <div className="">
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={true}
          responsive={responsive}
          ssr={false} 
          infinite={true}
          autoPlay={false}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="pb-8"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          renderDotsOutside={false}
          deviceType={deviceType}
          dotListClass="custom-dot-list-style"
          itemClass=""
        >
          <div className="mx-2 p-4 h-full border border-red-800 text-sm">
            <h1 className="text-2xl font-bold">Global Restaurant Group: Oracle HCM/FMS Global Rollout</h1>
            <Image className="mx-auto mt-4" src={restaurant} alt="restaurant"  />
            <h2 className="mt-4 font-bold">Client Profile</h2>
            <p>A multinational restaurant group operating 7000+ properties worldwide launched a global Oracle HCM/FMS rollout. The program impacted every layer of the organization — both owned and franchised. </p>
            <h2 className="mt-4 font-bold">Business Challenge</h2>
            <p >The executive team was concerned about potential operational disruption. Any mistake in payroll, scheduling, or labor compliance could create ripple effects across restaurants, directly impacting customer service and revenue. The frontline workers, many with limited digital skills and little time off the floor, faced a steep learning curve. At the same time, HR Business Partners bore the responsibility of supporting every user group, but their experience with enterprise HRIS solutions varied greatly across markets. The leadership team needed a deployment plan that would protect the guest experience, boost confidence among the frontline staff, and improve HR&apos;s ability to support adoption.</p>
            <h2 className="mt-4 font-bold">Approach</h2>
            <p>Trigona Consulting partnered closely with both executive sponsors and functional business leads to ensure tight alignment between change management and the redesign teams, ensuring a lean and agile approach to rapid value creation. This collaboration allowed us to pinpoint the specific stakeholder impacts of each design decision and co-create the transformation narrative. Together, we identified the biggest levers to win the workforce over — including a transparent rationale for segmentation, fairness in territory assignments, and clarity in compensation changes.</p>
            <br />
            <p>We launched a cascading communication campaign with over 30 sequential, role-specific messages aligned with program milestones. Leadership visibility increased through video messaging, roadshows, townhalls, and direct manager engagement, reinforcing sponsorship and accountability. Feedback loops empowered frontline sales teams and helped close information gaps identified during the transition. This transparent and iterative approach reduced anxiety, built trust, and accelerated adoption.</p>
            <h2 className="mt-6 font-bold text-white bg-red-800">&nbsp;Result</h2>
            <ul className="list-disc list-outside pl-4 mt-4">
            <li>Successfully rolled out the redesigned sales model <strong>within 90 days</strong> of project launch.</li>
            <li>Achieved <strong>rapid adoption</strong> across geographically dispersed sales teams, with <strong>no operational disruption</strong>.</li>
            <li>Over <strong>30 sequential, role-specific communications</strong>, achieved workforce engagement and process clarity.</li>
            <li>Maintained workforce confidence and <strong>avoided salesforce attrition</strong> during a sensitive post-acquisition period.</li>
            </ul>
          </div>
          <div className="mx-2 p-4 h-full border border-red-800 text-sm">
            <h1 className="text-2xl font-bold">PE-Backed Environmental Services Company: Commercial Transformation</h1>
            <Image className="mx-auto mt-4" src={wasteman} alt="it"  />
            <h2 className="mt-4 font-bold">Client Profile</h2>
            <p>A private equity-backed environmental services company specializing in hazardous and toxic waste disposal for large industrial clients. Following its acquisition, the company was tasked with rapidly redesigning its commercial operating model to align with the PE sponsor&apos;s aggressive value-creation plan.</p>
            <h2 className="mt-4 font-bold">Business Challenge</h2>
            <p>The transformation required a sales organization redesign, new customer segmentation, territory realignment, and compensation restructuring — all to be completed within a tight post-acquisition timeline. Executives faced pressure to achieve aggressive EBITDA targets and fulfill the sponsor&apos;s growth strategy. Leadership worried that poorly managed transitions could damage client relationships, disrupt revenue, and trigger salesforce turnover, especially as employees questioned the fairness of new territories and compensation plans.</p>
            <h2 className="mt-4 font-bold">Approach</h2>
            <p>Trigona Consulting partnered closely with both executive sponsors and functional business leads to ensure tight alignment between change management and the redesign teams, ensuring a lean and agile approach to rapid value creation. This collaboration allowed us to pinpoint the specific stakeholder impacts of each design decision and co-create the transformation narrative. Together, we identified the biggest levers to win the workforce over — including a transparent rationale for segmentation, fairness in territory assignments, and clarity in compensation changes.</p>
            <br />
            <p>We launched a cascading communication campaign with over 30 sequential, role-specific messages aligned with program milestones. Leadership visibility increased through video messaging, roadshows, townhalls, and direct manager engagement, reinforcing sponsorship and accountability. Feedback loops empowered frontline sales teams and helped close information gaps identified during the transition. This transparent and iterative approach reduced anxiety, built trust, and accelerated adoption.</p>
            <h2 className="mt-6 font-bold text-white bg-red-800">&nbsp;Result</h2>
            <ul className="list-disc list-outside pl-4 mt-4">
            <li>Successfully rolled out the redesigned sales model <strong>within 90 days</strong> of project launch.</li>
            <li>Achieved <strong>rapid adoption</strong> across geographically dispersed sales teams, with <strong>no operational disruption</strong>.</li>
            <li>Over <strong>30 sequential, role-specific communications</strong>, achieved workforce engagement and process clarity.</li>
            <li>Maintained workforce confidence and <strong>avoided salesforce attrition</strong> during a sensitive post-acquisition period.</li>
            </ul>
          </div>
          <div className="mx-2 p-4 h-full border border-red-800 text-sm">
            <h1 className="text-2xl font-bold">Department of Defense - Enterprise Change Management Office (ECMO)</h1>
            <Image className="mx-auto mt-4" src={warship} alt="mil"  />
            <h2 className="mt-4 font-bold">Client Profile</h2>
            <p>The U. S. Department of Defense launched one of the largest financial management transformations in government history. The program involved consolidating over <strong>200 systems</strong> and nine general ledgers, impacting more than <strong>300,000 employees</strong> across multiple agencies</p>
            <h2 className="mt-4 font-bold">Business Challenge</h2>
            <p>The human-capital challenges were as significant as the technical ones. The workforce was highly conservative and deeply skeptical of change, having witnessed many initiatives start and then fade away with the arrival of new political appointees. Many employees had learned to &quot;outwait&quot; leadership changes. Additionally, a &quot;frozen middle&quot; of managers withheld information and failed to pass on messages, creating bottlenecks and delaying downstream adoption. Senior leaders feared the transformation could stall, wasting billions of dollars and damaging credibility with Congress and oversight bodies.</p>
            <h2 className="mt-4 font-bold">Approach</h2>
            <p>Trigona Consulting worked directly with the secretariat and the command senior leadership to establish an Enterprise Change Management Office (ECMO), integrating OCM into the program's governance framework. We developed standardized playbooks and readiness dashboards to maintain a consistent approach across more than 80 simultaneous projects. Change champions were identified in each major command, creating alternative pathways to reach employees where middle managers resisted. Quick-win adoption proof points were included in the reporting schedule, allowing leadership to demonstrate progress to skeptical stakeholders and political sponsors.</p>
            <h2 className="mt-6 font-bold text-white bg-red-800">&nbsp;Result</h2>
            <ul className="list-disc list-outside pl-4 mt-4">
            <li>Achieved <strong>$180M in expense reductions</strong> through adoption-driven process alignment.</li>
            <li>Enabled <strong>consistent readiness reporting </strong>and KPI tracking for Congress and oversight bodies.</li>
            <li><strong>Overcame bottlenecks</strong> caused by the frozen middle by empowering champions to cascade information and facilitate adoption.</li>
            </ul>
          </div>  
          <div className="mx-2 p-4 h-full border border-red-800 text-sm">
            <h1 className="text-2xl font-bold">Standardizing Change Management for a Global SaaS Company&apos;s CTO Office</h1>
            <Image className="mx-auto mt-4" src={it2} alt="saas"  />
            <h2 className="mt-4 font-bold">Client Profile</h2>
            <p>A global SaaS leader undergoing a major post-spinoff transformation. The CTO Office was responsible for managing over <strong>60 concurrent technology initiatives</strong> (Workday, SAP ERP, and others) impacting more than <strong>80,000 employees worldwide</strong>.</p>
            <h2 className="mt-4 font-bold">Business Challenge</h2>
            <p>The Chief Technology Officer faced mounting concerns about the <strong>sheer number of concurrent activities</strong> and the absence of a standardized OCM framework. Change management and PMO teams were repeatedly recreating deliverables from scratch, wasting time and resources while slowing momentum. From a workforce perspective, employees were bombarded with <strong>conflicting messages from multiple initiatives</strong>, leading to <strong>change fatigue, disengagement, and skepticism</strong>. Without a portfolio-level view and consistent communication cascade, leadership lacked the visibility and governance needed to ensure adoption at scale.</p>
            <h2 className="mt-4 font-bold">Approach</h2>
            <p>Trigona Consulting partnered with the CTO Office to design and embed a <strong>standardized enterprise OCM </strong><b>framework</b> into the transformation governance model. We worked closely with functional teams and leadership to redesign the shared service structure for change management, clarifying roles and responsibilities across PMO, OCM, and business teams. At the same time, we developed portfolio-level standards, templates, and toolkits that execution teams could apply consistently across initiatives, reducing duplication and ensuring alignment. A new communication cascade model eliminated conflicting messages, providing employees with clear and coordinated updates. By linking OCM directly to portfolio-level governance, leaders gained visibility into adoption progress and the ability to prioritize resources across 60+ initiatives.</p>
            <h2 className="mt-6 font-bold text-white bg-red-800">&nbsp;Result</h2>
            <ul className="list-disc list-outside pl-4 mt-4">
            <li>Brought <strong>consistency and visibility</strong> to change management across 60+ initiatives.</li>
            <li>Enabled the CTO Office to <strong>prioritize resources</strong> and mitigate risk with a portfolio-level view.</li>
            <li>Reduced rework and duplication of effort, <strong>lowering workload for execution teams</strong> through reusable templates and toolkits. </li>
            <li>Minimized change fatigue by introducing a <strong>standard communication cascade</strong>, ensuring employees received clear, aligned messaging.</li>
            </ul>
          </div>
          {/* <div className="mx-2 p-4 h-full border border-red-800">
            <h1 className="text-2xl font-bold">Enhancing Change Adoption for a National Education Client</h1>
            <Image className="mx-auto mt-4" src={school} alt="school"  />
            <h2 className="mt-4 font-bold">Challenge</h2>
            <p className="text-sm">A national education client struggled to gain buy-in from a field-based workforce for corporate-led initiatives. The lack of alignment between the corporate vision and field-level implementation created barriers to change adoption, which impacted the success of transformation efforts across diverse educational settings.</p>
            <h2 className="mt-4 font-bold">Approach</h2>
            <p className="text-sm">Trigona Consulting conducted an in-depth root cause analysis to identify key obstacles to change. Using these insights, we developed a standardized change management framework tailored to the client&apos;s unique needs. A critical component of our solution was equipping change managers with AI-powered analytics tools, enabling data-driven insights and predictive capabilities. This innovative approach allowed for personalized communication strategies, accurate resistance predictions, and enhanced measurement of adoption rates.</p>
            <h2 className="mt-6 font-bold text-white bg-red-800">&nbsp;Result</h2>
            <p className="text-sm">Trigona&apos;s approach bridged the gap between corporate initiatives and field implementation, fostering a culture of agile change management. The client not only <span className="font-bold">overcame immediate buy-in challenges</span> but also <span className="font-bold">gained a scalable, AI-enhanced framework</span> for future transformations, ensuring consistency and effectiveness across the organization.</p>
          </div>
          <div className="mx-2 p-4 h-full border border-red-800">
            <h1 className="text-2xl font-bold">Driving Post-M&amp;A Success for a Global Hospitality Leader</h1>
            <Image className="mx-auto mt-4" src={hotel} alt="hotel"  />
            <h2 className="mt-4 font-bold">Challenge</h2>
            <p className="text-sm">A global hospitality leader faced the complex task of integrating 6 Sales and 5 Revenue Management organizations after a major acquisition. The project required a comprehensive approach to achieve cultural alignment, talent retention, and cost efficiencies through operating model standardization, ensuring a seamless transition and structural cohesion.</p>
            <h2 className="mt-4 font-bold">Approach</h2>
            <p className="text-sm">Trigona Consulting led a strategic post-M&amp;A integration, focusing on cultural alignment, organizational, and operational restructuring. We facilitated executive leadership sessions to align stakeholders on priorities and developed a cross-company integration roadmap. With the design and execution of  synergy realization strategy, and tailored salesforce integration approach, we ensured that all workstreams moved in tight alignment toward a unified organizational structure while maintaining a regional market presence.</p>
            <h2 className="mt-6 font-bold text-white bg-red-800">&nbsp;Result</h2>
            <p className="text-sm">The integration delivered impressive results, achieving <span className="font-bold">$24 million in first-year operating cost savings</span> while maintaining operational continuity and retaining <span  className="font-bold">92% of top talent</span>. Trigona&apos;s approach fostered a cohesive organizational culture and integrated operating model, positioning the client for sustained success post-integration.</p>
          </div>
          <div className="mx-2 p-4 h-full border border-red-800">
            <h1 className="text-2xl font-bold">Revolutionizing Operations for a Global Technology Leader</h1>
            <Image className="mx-auto mt-4" src={it1} alt="it"  />
            <h2 className="mt-4 font-bold">Challenge</h2>
            <p className="text-sm">Global SaaS company was re-establishing organizational structure across multiple global markets post-spin-off. The goal was to establish a shared service solution structure for the Chief Information Officer with optimized processes and reduced operational costs impacting 15k resources worldwide. The organization faced challenges with readiness, leadership alignment, and the risk of operational disruptions during the transition.</p>
            <h2 className="mt-4 font-bold">Approach</h2>
            <p className="text-sm">In collaboration with client leadership and functional teams, Trigona Consulting redesigned the CIO&apos;s shared service structure, optimizing the operating model and ensuring leadership alignment. Through our tailored change management approach, we enhanced organizational readiness and minimized operational disruptions. Our reusable transformation framework, equipped the organization with tools for managing future changes independently.</p>
            <h2 className="mt-6 font-bold text-white bg-red-800">&nbsp;Result</h2>
            <p className="text-sm">Our efforts led to the resulting operating model&apos;s improved effectiveness, <span className="font-bold">improving process standardization by 43% </span>and achieving a <span className="font-bold">25% first-year operating costs reduction</span>. This project met immediate restructuring goals and fostered a culture of adaptability, positioning the client for long-term success in a dynamic market environment.</p>
          </div> */}
        </Carousel>
      </div>
  );
}


"use client"

import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import restaurant from "@/public/images/restaurant.jpg"
import hotel from "@/public/images/hotel.jpg"
import warship from "@/public/images/warship.jpg"
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
          <div className="mx-2 p-4 h-full border border-red-800">
            <h1 className="text-2xl font-bold">Driving Sustainable Change for a Mid-Market Hospitality Company</h1>
            <Image className="mx-auto mt-4" src={restaurant} alt="restaurant"  />
            <h2 className="mt-4 font-bold">Challenge</h2>
            <p className="text-sm">Global hospitality client was replacing outdated HR and Financial systems with Oracle solutions. Field locations had a high turnover rate of hourly employees, and HR Business partner&apos;s efforts were disjointed and sporadical. An experienced change management support was required to provide a structured approach accounting for the global distribution of the facilities and complex organizational structure. Without a sustainable change management approach, the project was at risk of delays, poor system adoption, and reduced productivity.</p>
            <h2 className="mt-4 font-bold">Approach</h2>
            <p className="text-sm">Trigona Consulting crafted a tailored change management strategy to address these complexities. Our work included in-depth stakeholder analysis and persona-based change journeys to ensure alignment across teams with the development of an enterprise-wide deployment approach tailored to the client&apos;s unique operational constraints. With a tiered change management toolkit, we enabled standardized yet flexible implementation of the &quot;train-the-trainer&quot; program for HR Business Partners, digital learning modules for hourly staff, and the establishment of a change champion network across key locations.</p>
            <h2 className="mt-6 font-bold text-white bg-red-800">&nbsp;Result</h2>
            <p className="text-sm">The project achieved an impressive <span className="font-bold">87% readiness goal and 84% user buy-in</span>, ensuring a seamless Oracle rollout within 3 months post-go-live. Beyond immediate success, the organization gained a strong in-house change management function, empowering them to lead future transformations independently and effectively.</p>
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
          </div>
          <div className="mx-2 p-4 h-full border border-red-800">
            <h1 className="text-2xl font-bold">Transforming Financial Management for a Department of Defense Organization</h1>
            <Image className="mx-auto mt-4" src={warship} alt="mil"  />
            <h2 className="mt-4 font-bold">Challenge</h2>
            <p className="text-sm">A major Department of Defense organization needed to streamline its financial and logistical systems while achieving significant cost reductions. The project consolidated nine general ledgers with massive expense reduction goals and integrated 200 financial and logistics systems. The complexity of the organization&apos;s dual reporting structure, siloed processes, and conservative change resistant workforce required a strategic approach to change management.</p>
            <h2 className="mt-4 font-bold">Approach</h2>
            <p className="text-sm">Trigona Consulting established and led the Enterprise Change Management Office (ECMO)  and to oversee change efforts across six focus areas and approximately 80 projects. Our strategy ensured consistent, integrated communications, leadership engagement, and training efforts tailored to the organization&apos;s structure and operating model. To ensure alignment and consistency, we developed an enterprise-wide organizational change management framework, collaborated with the PMO to integrate change activities into project plans, and created executive dashboards with KPIs to monitor readiness and adoption.</p>
            <h2 className="mt-6 font-bold text-white bg-red-800">&nbsp;Result</h2>
            <p className="text-sm">The project successfully achieved <span className="font-bold">$180 million in expense reductions</span> while consolidating systems and enhancing operational efficiency. Trigona&apos;s approach ensured alignment with Financial Management Transformation goals, resulting in a smooth transition that positioned the client for long-term success.</p>
          </div>  
          <div className="mx-2 p-4 h-full border border-red-800">
            <h1 className="text-2xl font-bold">Standardizing Change Management for a Global SaaS Company&apos;s CTO Office</h1>
            <Image className="mx-auto mt-4" src={it2} alt="saas"  />
            <h2 className="mt-4 font-bold">Challenge</h2>
            <p className="text-sm">Following a major spin-off, the CTO office of a global technology company was undertaking over 60 technological transformations (Workday, SAP ERP, etc.) post M&amp;A that impacted over 80000 employees. The complexity of the transformation required an established enterprise OCM functionality within the Chief Transformation Office to ensure standardized and repeatable OCM methodology implementation for proper employee buy-in and onboarding into the new systems.</p>
            <h2 className="mt-4 font-bold">Approach</h2>
            <p className="text-sm">Trigona Consulting implemented a uniform change management framework across the CTO&apos;s portfolio, creating standardized tools, templates, and processes adaptable to projects of varying sizes and complexities. We established a central repository of change resources and trained key personnel in their use. To ensure consistency, we introduced a governance structure to oversee change management practices across all projects, enhancing efficiency and alignment.</p>
            <h2 className="mt-6 font-bold text-white bg-red-800">&nbsp;Result</h2>
            <p className="text-sm">The standardization effort <span className="font-bold">brought consistency and visibility to change management processes</span>, enabling the CTO office to prioritize resources, mitigate risks, and drive adoption more effectively. Trigona&apos;s work laid a strong foundation for the organization to execute technology initiatives with increased agility and success, positioning the SaaS leader to thrive in a dynamic market.</p>
          </div>
          <div className="mx-2 p-4 h-full border border-red-800">
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
        </Carousel>
      </div>
  );
}


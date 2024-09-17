"use client";

import type { Stripe as SrvStripe } from "stripe";
import Link from "next/link";
import { Roboto } from "next/font/google";

const priceFont = Roboto({ subsets: ["latin"], weight: ["700"] });

const LiveCourseId = process.env.NEXT_PUBLIC_STRIPE_LIVE_COURSE;
const FullCourseId = process.env.NEXT_PUBLIC_STRIPE_FULL_COURSE;
 
export default function PriceList2Register({prices }: { prices: SrvStripe.Price[]}) {

  const liveCoursePrice = prices.find(p => p.id === LiveCourseId)?.unit_amount! / 100;
  const fullCoursePrice = prices.find(p => p.id === FullCourseId)?.unit_amount! / 100;

   return (
      <div className="">
        <h2 className="text-center mb-6 text-5xl"><span className="italic">Packages &amp;</span> <span className="font-bold text-red-800
        ">Pricing</span></h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mx-4">
          <div className="bg-red-800 text-white mx-4">
            <div className="mt-10 mx-[15%]">
              <h1 className="text-2xl text-center italic font-semibold">CUSTOM SOLUTIONS</h1>
              <p className="italic text-xl mt-6">
              Do you want a personalized training for your team? We offer custom design and delivery training based on your needs.
              </p>
              <h1 className="mt-6 text-2xl text-center italic font-semibold">GROUP DISCOUNTS</h1>
              <p className="italic text-xl mt-6">
              Do you have multiple team members you want to enroll? We provide group discounts for 2+ participants.
              </p>
            </div>
            <div className="my-10 text-center">
              <Link href="https://outlook.office365.com/book/AIEnhancedPracticalChangeManagementConsultationRequest@trigonaconsulting.com">
                <span className="bg-white text-red-800 hover:text-orange-600 text-2xl px-8 py-3 rounded-full font-bold w-64">
                Schedule&nbsp;a&nbsp;Call
                </span>
              </Link>
            </div>

          </div>
          <div className="flex mx-4 px-4 border border-red-800" >
            <div className="">
              <h2 className="text-2xl mt-4 text-red-800">GROUP TRAINING SERIES</h2>
                <p className="text-xl">Share diverse experience and perspectives.</p>
                <p className={`text-black ${priceFont.className} text-3xl mt-4`}>{`$${fullCoursePrice.toLocaleString()}`}</p>
                <div className="mt-4">
                  <Link className="text-center" href={`/register?priceId=${FullCourseId}`}>
                      <button className="w-full text-red-800 text-2xl font-bold px-8 py-3 border border-red-800 rounded-full hover:text-orange-600 transition-colors" >Enroll Now</button>
                  </Link>
                </div>
                <p className="font-bold italic text-xl mt-4">Includes:</p>
                <ul className="list-disc list-outside pl-6 leading-loose text-xl italic">
                  <li>6 1-hour module group live web-based training series</li>
                  <li>Weekly group office hours</li>
                  <li>Group collaboration forums</li>
                  <li>Individual video-recorded modules</li>
                  <li>Templates and approaches</li>
                </ul>
            </div>
          </div>
          <div className="flex mx-4 px-4 border border-red-800" >
            <div className="">
              <h2 className="text-2xl mt-4 text-red-800">ONE-ON-ONE</h2>
                <p className="text-xl">Receive private guidance  addressing your need.</p>
                <p className={`text-black ${priceFont.className} text-3xl my-4`}>{`$${liveCoursePrice.toLocaleString()}`}</p>
                <div className="">
                  <Link className="text-center" href={`/register?priceId=${LiveCourseId}`}>
                      <button className="w-full text-red-800 text-2xl font-bold px-8 py-3 border border-red-800 rounded-full hover:text-orange-600 transition-colors" >Enroll Now</button>
                  </Link>
                </div>
                <p className="font-bold italic text-xl mt-4">Includes:</p>
                <ul className="list-disc list-outside pl-6 leading-loose mb-4 text-xl italic">
                  <li>10 1-hour long private coaching sessions</li>
                  <li>6 1-hour module group live web-based training series</li>
                  <li>Weekly group office hours</li>
                  <li>Group collaboration forums</li>
                  <li>Individual video-recorded modules</li>
                  <li>Templates and approaches</li>
                </ul>
            </div>
          </div>
        </div>
     </div>
  );
}


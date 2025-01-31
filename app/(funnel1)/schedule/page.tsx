"use client"

import { InlineWidget } from "react-calendly";

export default function Schedule() {
  return (
    <div className="mb-6">
      <InlineWidget url="https://calendly.com/mike-ab3vn/30min" />
    </div>
  );
}
"use client";

import { useState } from "react";
import PageNav from "@/components/sip/PageNav";

const statuses = [
  {
    label: "Draft",
    description: "Head of Institution is preparing the SIP. Not yet submitted to the system.",
    detail: "The school has started filling in the SIP template but has not yet clicked 'Submit'. Only the Head of Institution can see this SIP.",
    dotColor: "bg-gray-400",
    activeRing: "ring-gray-400",
    cardBg: "bg-gray-50 border-gray-200",
  },
  {
    label: "Submitted",
    description: "SIP has been submitted by the school and is awaiting SCDE review.",
    detail: "The system has assigned a unique reference number and notified the Sub-County Director. The school cannot edit the SIP at this stage.",
    dotColor: "bg-yellow-400",
    activeRing: "ring-yellow-400",
    cardBg: "bg-yellow-50 border-yellow-200",
  },
  {
    label: "SCDE Approved",
    description: "Sub-County Director has reviewed and approved the SIP.",
    detail: "The SCDE found the SIP compliant with Ministry policies. It has been digitally signed and forwarded to the County Director for validation.",
    dotColor: "bg-blue-500",
    activeRing: "ring-blue-500",
    cardBg: "bg-blue-50 border-blue-200",
  },
  {
    label: "CDE Validated",
    description: "County Director has validated the approval. Forwarded to Ministry Finance Unit.",
    detail: "The CDE confirmed alignment with national and county priorities. The SIP now awaits fund authorization from the Ministry Finance Unit.",
    dotColor: "bg-green-500",
    activeRing: "ring-green-500",
    cardBg: "bg-green-50 border-green-200",
  },
  {
    label: "Authorized",
    description: "Ministry Finance Unit has authorized fund release.",
    detail: "Funds have been confirmed available and the Finance Unit has issued authorization. Disbursement to the school account is now in process.",
    dotColor: "bg-purple-500",
    activeRing: "ring-purple-500",
    cardBg: "bg-purple-50 border-purple-200",
  },
  {
    label: "Funds Disbursed",
    description: "Funds have been transferred to the school's bank account.",
    detail: "The school has been notified. Disbursement date, amount, and transaction reference are recorded in the system.",
    dotColor: "bg-orange-500",
    activeRing: "ring-orange-500",
    cardBg: "bg-orange-50 border-orange-200",
  },
  {
    label: "Implementation Ongoing",
    description: "School is implementing approved activities and submitting periodic reports.",
    detail: "The Head of Institution submits progress and financial reports through the system. MoE can monitor utilization in real time.",
    dotColor: "bg-teal-500",
    activeRing: "ring-teal-500",
    cardBg: "bg-teal-50 border-teal-200",
  },
  {
    label: "Completed",
    description: "All activities completed. Final reports submitted. SIP cycle closed.",
    detail: "The SIP is archived. All financial and progress reports are stored in the system for audit and future reference.",
    dotColor: "bg-emerald-600",
    activeRing: "ring-emerald-600",
    cardBg: "bg-emerald-50 border-emerald-200",
  },
];

export default function StatusPage() {
  const [active, setActive] = useState(0);

  return (
    <div className="min-h-screen bg-white px-8 md:px-16 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-10">
          <span className="text-purple-600 font-semibold text-sm tracking-widest uppercase">Transparency</span>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">SIP Status Tracking</h1>
          <p className="text-gray-500 mt-3 max-w-xl">
            Every SIP moves through 8 clearly defined stages. Select a stage to see what it means for each stakeholder.
          </p>
        </div>

        {/* Progress bar */}
        <div className="relative h-2.5 bg-gray-100 rounded-full mb-8 overflow-hidden">
          <div
            className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-yellow-400 via-green-400 to-emerald-600 transition-all duration-500"
            style={{ width: `${((active + 1) / statuses.length) * 100}%` }}
          />
        </div>

        {/* Stage pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {statuses.map((s, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border-2 text-xs font-semibold transition-all duration-200 ${
                active === i
                  ? `${s.cardBg} ring-2 ${s.activeRing} ring-offset-1 shadow`
                  : "bg-white border-gray-200 text-gray-500 hover:border-gray-300"
              }`}
            >
              <span className={`w-2 h-2 rounded-full flex-shrink-0 ${active >= i ? s.dotColor : "bg-gray-200"}`} />
              {s.label}
            </button>
          ))}
        </div>

        {/* Detail card */}
        <div className={`rounded-2xl border-2 p-8 ${statuses[active].cardBg} transition-all duration-300 mb-6`}>
          <div className="flex items-start gap-5">
            <div className={`w-14 h-14 rounded-full ${statuses[active].dotColor} flex items-center justify-center text-white text-xl font-bold flex-shrink-0 shadow-lg`}>
              {active + 1}
            </div>
            <div className="flex-1">
              <div className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">Stage {active + 1} of {statuses.length}</div>
              <h2 className="text-xl font-bold text-gray-800 mb-2">{statuses[active].label}</h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">{statuses[active].description}</p>
              <p className="text-gray-500 text-sm leading-relaxed">{statuses[active].detail}</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center gap-3 mb-10">
          <button
            onClick={() => setActive((p) => Math.max(0, p - 1))}
            disabled={active === 0}
            className="px-5 py-2 rounded-xl bg-gray-100 text-gray-600 font-medium text-sm disabled:opacity-30 hover:bg-gray-200 transition-colors"
          >
            ← Previous Stage
          </button>
          <button
            onClick={() => setActive((p) => Math.min(statuses.length - 1, p + 1))}
            disabled={active === statuses.length - 1}
            className="px-5 py-2 rounded-xl bg-blue-600 text-white font-medium text-sm disabled:opacity-30 hover:bg-blue-700 transition-colors"
          >
            Next Stage →
          </button>
        </div>

        <PageNav current="/status" />
      </div>
    </div>
  );
}

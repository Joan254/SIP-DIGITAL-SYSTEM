"use client";

import { useState } from "react";
import PageNav from "@/components/sip/PageNav";

const actors = [
  { name: "Head of Institution", color: "bg-purple-600", short: "HoI" },
  { name: "SCDE", color: "bg-blue-600", short: "SCDE" },
  { name: "CDE", color: "bg-green-600", short: "CDE" },
  { name: "Project Coordination Unit (PCU) - KPEEL & SEEQIP", color: "bg-red-600", short: "PCU" },
];

const flowItems = [
  { from: 0, action: "Prepare & Submit SIP", bgColor: "bg-purple-50 border-purple-200" },
  { from: 1, action: "Review → Approve / Reject / Return", bgColor: "bg-blue-50 border-blue-200" },
  { from: 2, action: "Validate → Forward / Reject", bgColor: "bg-green-50 border-green-200" },
  { from: 3, action: "Authorize Fund Release", bgColor: "bg-red-50 border-red-200" },
];

const steps = [
  {
    id: 1,
    phase: "SIP Preparation & Submission",
    actor: "Head of Institution",
    actorColor: "bg-purple-600",
    borderColor: "border-purple-300",
    bgColor: "bg-purple-50",
    icon: "📝",
    actions: [
      "Log into the Digital SIP System",
      "Complete SIP template (school profile, priorities, activities, budget, outcomes)",
      "Upload supporting documents including BOM approval",
      "Review and confirm accuracy of all information",
      "BOM ratifies the SIP draft and provides approval documentation",
      "Submit SIP through the system",
    ],
    systemActions: [
      "Generates unique SIP reference number",
      "Records submission date and time",
      "Forwards SIP to SCDE",
      "Sends notification to SCDE",
    ],
  },
  {
    id: 2,
    phase: "Review & Approval by SCDE",
    actor: "Sub-County Director",
    actorColor: "bg-blue-600",
    borderColor: "border-blue-300",
    bgColor: "bg-blue-50",
    icon: "🔎",
    actions: [
      "Receives system notification of submitted SIP",
      "Reviews completeness, policy compliance, budget accuracy",
      "Assesses relevance of activities",
      "Approves, rejects and returns for revision",
    ],
    systemActions: [
      "Records SCDE decision with timestamp",
      "If approved: forwards SIP to CDE",
      "If rejected: notifies school with reasons",
    ],
  },
  {
    id: 3,
    phase: "Validation by County Director",
    actor: "County Director (CDE)",
    actorColor: "bg-green-600",
    borderColor: "border-green-300",
    bgColor: "bg-green-50",
    icon: "✅",
    actions: [
      "Receives notification of SCDE-approved SIP",
      "Reviews compliance with approval process",
      "Confirms proper approval process followed",
      "Validates or rejects the SIP",
    ],
    systemActions: [
      "Records CDE validation with timestamp",
      "If validated: forwards SIP to Project Coordination Unit (PCU) and notifies SCDE and school",
      "If rejected: returns with documented reasons",
    ],
  },
  {
    id: 4,
    phase: "Authorization & Fund Disbursement",
    actor: "Project Coordination Unit (PCU) - KPEEL & SEEQIP",
    actorColor: "bg-red-600",
    borderColor: "border-red-300",
    bgColor: "bg-red-50",
    icon: "💳",
    actions: [
      "Receives validated SIP",
      "Reviews SIP and confirms fund allocation",
      "Authorizes fund release",
    ],
    systemActions: [
      "Records authorization with timestamp",
      "Updates SIP status to 'Authorized'",
      "Notifies all stakeholders",
      "Triggers fund disbursement process",
    ],
  },
  {
    id: 6,
    phase: "Implementation & Reporting",
    actor: "Head of Institution / School",
    actorColor: "bg-teal-600",
    borderColor: "border-teal-300",
    bgColor: "bg-teal-50",
    icon: "📈",
    actions: [
      "Implements SIP activities as approved",
      "Submits periodic progress reports",
      "Submits financial reports",
      "Uploads supporting documentation",
    ],
    systemActions: [
      "Tracks implementation status",
      "Updates SIP status to 'Implementation Ongoing' then 'Completed'",
      "Generates monitoring reports for MoE",
    ],
  },
];

export default function WorkflowPage() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gray-50 px-8 md:px-16 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-10">
          <span className="text-blue-600 font-semibold text-sm tracking-widest uppercase">Step-by-Step Process</span>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">The Digital SIP Workflow</h1>
          <p className="text-gray-500 mt-3 max-w-xl">
            Click any step to reveal the detailed user actions and system responses at that stage.
          </p>
        </div>

        {/* Approval chain visual */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-8">
          <h2 className="font-bold text-gray-700 text-sm uppercase tracking-wide mb-5">Approval Chain</h2>
          <div className="grid grid-cols-4 gap-3 mb-5">
            {actors.map((a) => (
              <div key={a.name} className="flex flex-col items-center gap-2">
                <div className={`w-10 h-10 rounded-full ${a.color} text-white flex items-center justify-center text-xs font-bold shadow`}>
                  {a.short}
                </div>
                <span className="text-xs text-gray-500 font-medium text-center leading-tight">{a.name}</span>
              </div>
            ))}
          </div>
          <div className="space-y-2">
            {flowItems.map((item, i) => (
              <div key={i} className={`rounded-xl border-2 px-4 py-3 ${item.bgColor} flex items-center gap-3`}>
                <div className={`w-7 h-7 rounded-full ${actors[item.from].color} text-white flex items-center justify-center text-xs font-bold flex-shrink-0`}>
                  {actors[item.from].short}
                </div>
                <div className="flex-1 font-medium text-gray-700 text-sm">{item.action}</div>
                {i < flowItems.length - 1 && <div className="text-gray-400">↓</div>}
              </div>
            ))}
          </div>
          {/* Rejection loop */}
          <div className="mt-4 bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start gap-3">
            <span className="text-xl flex-shrink-0">🔄</span>
            <p className="text-sm text-amber-700">
              <span className="font-bold">Rejection Loop:</span> At any stage, a SIP can be rejected with documented reasons. The school revises and resubmits, restarting the process. All exceptions are logged in the audit trail.
            </p>
          </div>
        </div>

        {/* Detailed steps */}
        <h2 className="font-bold text-gray-700 text-sm uppercase tracking-wide mb-4">Detailed Steps</h2>
        <div className="space-y-3 mb-8">
          {steps.map((step) => {
            const isOpen = activeStep === step.id;
            return (
              <button
                key={step.id}
                onClick={() => setActiveStep(isOpen ? null : step.id)}
                className={`w-full text-left rounded-2xl border-2 p-5 transition-all duration-200 ${step.bgColor} ${step.borderColor} hover:shadow-md`}
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{step.icon}</span>
                    <div>
                      <div className="text-xs font-bold text-gray-500 mb-0.5">Step {step.id}</div>
                      <h3 className="font-bold text-gray-800 text-sm md:text-base">{step.phase}</h3>
                      <div className="text-xs text-gray-500 mt-0.5">
                        Actor: <span className="font-medium text-gray-700">{step.actor}</span>
                      </div>
                    </div>
                  </div>
                  <span className={`text-xl text-gray-400 transition-transform duration-200 ${isOpen ? "rotate-45" : ""}`}>+</span>
                </div>

                {isOpen && (
                  <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                    <div>
                      <h4 className="font-bold text-gray-600 text-xs mb-2 uppercase tracking-wide">User Actions</h4>
                      <ul className="space-y-1.5">
                        {step.actions.map((a, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                            <span className="mt-0.5 text-green-500 flex-shrink-0">✓</span>{a}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-600 text-xs mb-2 uppercase tracking-wide">System Responses</h4>
                      <ul className="space-y-1.5">
                        {step.systemActions.map((a, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                            <span className="mt-0.5 text-blue-500 flex-shrink-0">⚡</span>{a}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </button>
            );
          })}
        </div>

        <PageNav current="/workflow" />
      </div>
    </div>
  );
}

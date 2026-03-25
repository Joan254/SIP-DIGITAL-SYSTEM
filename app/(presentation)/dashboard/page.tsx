"use client";

import { useState } from "react";
import PageNav from "@/components/sip/PageNav";

const mockSIPs = [
  { ref: "SIP-2025-001", school: "Nairobi Primary School", county: "Nairobi", amount: 150000, submitted: "10 Mar 2025", status: "CDE Validated", statusColor: "bg-green-100 text-green-700" },
  { ref: "SIP-2025-002", school: "Mombasa Primary School", county: "Mombasa", amount: 200000, submitted: "11 Mar 2025", status: "SCDE Approved", statusColor: "bg-blue-100 text-blue-700" },
  { ref: "SIP-2025-003", school: "Kisumu Girls Primary School", county: "Kisumu", amount: 175000, submitted: "12 Mar 2025", status: "Submitted", statusColor: "bg-yellow-100 text-yellow-700" },
  { ref: "SIP-2025-004", school: "Nakuru Boys Primary School", county: "Nakuru", amount: 180000, submitted: "8 Mar 2025", status: "Funds Disbursed", statusColor: "bg-orange-100 text-orange-700" },
  { ref: "SIP-2025-005", school: "Eldoret Primary School", county: "Uasin Gishu", amount: 120000, submitted: "13 Mar 2025", status: "Draft", statusColor: "bg-gray-100 text-gray-600" },
];

const ministryStats = [
  { label: "Total SIPs", value: "1,284", icon: "📋", color: "bg-blue-600" },
  { label: "Funds Authorized", value: "KES 45.2M", icon: "💰", color: "bg-green-600" },
  { label: "Pending Review", value: "87", icon: "⏳", color: "bg-yellow-500" },
  { label: "Completed", value: "412", icon: "✅", color: "bg-teal-600" },
];

const scdeStats = [
  { label: "Assigned to Me", value: "23", icon: "📥", color: "bg-blue-600" },
  { label: "Reviewed Today", value: "5", icon: "🔎", color: "bg-purple-600" },
  { label: "Pending Action", value: "8", icon: "⏳", color: "bg-yellow-500" },
];

export default function DashboardPage() {
  const [view, setView] = useState<"ministry" | "scde" | "school">("ministry");

  return (
    <div className="min-h-screen bg-gray-900 text-white px-8 md:px-16 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10">
          <span className="text-yellow-400 font-semibold text-sm tracking-widest uppercase">Dashboard Preview</span>
          <h1 className="text-3xl md:text-4xl font-bold text-white mt-2">Real-Time Monitoring Interface</h1>
          <p className="text-gray-400 mt-3 max-w-xl">
            Each stakeholder sees a tailored dashboard. Switch views to see how information is presented at each level.
          </p>
        </div>

        {/* View switcher */}
        <div className="flex gap-2 mb-8 flex-wrap">
          {(
            [
              { key: "ministry", label: "Ministry / Finance Unit" },
              { key: "scde", label: "Sub-County Director" },
              { key: "school", label: "Head of Institution" },
            ] as { key: "ministry" | "scde" | "school"; label: string }[]
          ).map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setView(key)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${view === key ? "bg-blue-600 text-white shadow" : "bg-gray-700 text-gray-300 hover:bg-gray-600"}`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Stats */}
        {view === "ministry" && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {ministryStats.map((stat) => (
              <div key={stat.label} className="bg-gray-800 rounded-2xl p-4 flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl ${stat.color} flex items-center justify-center text-lg flex-shrink-0`}>{stat.icon}</div>
                <div>
                  <div className="text-base font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-gray-400">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        )}

        {view === "scde" && (
          <div className="grid grid-cols-3 gap-4 mb-6">
            {scdeStats.map((stat) => (
              <div key={stat.label} className="bg-gray-800 rounded-2xl p-4 flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl ${stat.color} flex items-center justify-center text-lg flex-shrink-0`}>{stat.icon}</div>
                <div>
                  <div className="text-base font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-gray-400">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        )}

        {view === "school" && (
          <div className="bg-gray-800 rounded-2xl p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="text-xs text-gray-400 mb-0.5 uppercase tracking-wide">My Institution</div>
                <h3 className="font-bold text-white text-base">Nairobi Primary School</h3>
                <p className="text-gray-400 text-xs">SIP Reference: SIP-2025-001</p>
              </div>
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">CDE Validated</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
              {[
                { label: "Budget Approved", value: "KES 150,000" },
                { label: "Submitted", value: "10 Mar 2025" },
                { label: "Last Updated", value: "14 Mar 2025" },
                { label: "Next Step", value: "Fund Authorization" },
              ].map(({ label, value }) => (
                <div key={label} className="bg-gray-700 rounded-xl p-3">
                  <div className="text-xs text-gray-400 mb-1">{label}</div>
                  <div className="text-sm font-bold text-white">{value}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Table */}
        {(() => {
          const mySchoolRef = "SIP-2025-001";
          const visibleSIPs = view === "school"
            ? mockSIPs.filter((s) => s.ref === mySchoolRef)
            : mockSIPs;
          return (
            <div className="bg-gray-800 rounded-2xl overflow-hidden mb-10">
              <div className="px-6 py-4 border-b border-gray-700 flex items-center justify-between">
                <h3 className="font-bold text-white text-sm">
                  {view === "ministry"
                    ? "All SIPs – National Overview"
                    : view === "scde"
                    ? "SIPs Assigned to My Sub-County"
                    : "My School's SIP"}
                </h3>
                <span className="text-xs text-gray-400">{visibleSIPs.length} record{visibleSIPs.length !== 1 ? "s" : ""}</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-left text-gray-400 text-xs uppercase border-b border-gray-700">
                      <th className="px-5 py-3">Reference</th>
                      <th className="px-5 py-3">School</th>
                      <th className="px-5 py-3 hidden md:table-cell">County</th>
                      <th className="px-5 py-3 hidden md:table-cell">Amount (KES)</th>
                      <th className="px-5 py-3">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {visibleSIPs.map((sip) => (
                      <tr key={sip.ref} className="border-b border-gray-700/50 hover:bg-gray-700/40 transition-colors">
                        <td className="px-5 py-3 text-blue-400 font-mono text-xs">{sip.ref}</td>
                        <td className="px-5 py-3 text-white font-medium text-sm">{sip.school}</td>
                        <td className="px-5 py-3 text-gray-400 text-sm hidden md:table-cell">{sip.county}</td>
                        <td className="px-5 py-3 text-gray-300 text-sm hidden md:table-cell">{sip.amount.toLocaleString()}</td>
                        <td className="px-5 py-3">
                          <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${sip.statusColor}`}>{sip.status}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          );
        })()}

        <PageNav current="/dashboard" />
      </div>
    </div>
  );
}

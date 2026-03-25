import PageNav from "@/components/sip/PageNav";

const controls = [
  {
    title: "Role-Based Access Control",
    icon: "🔑",
    gradient: "from-blue-500 to-blue-700",
    points: [
      "Each user type has defined permissions",
      "Secure login authentication",
      "Role-specific dashboards and views",
      "User authorization levels enforced",
    ],
  },
  {
    title: "Complete Audit Trail",
    icon: "📋",
    gradient: "from-purple-500 to-purple-700",
    points: [
      "All submissions recorded",
      "Every approval and validation logged",
      "Full user action history",
      "Timestamps on all events",
    ],
  },
  {
    title: "Automated Notifications",
    icon: "🔔",
    gradient: "from-orange-500 to-orange-700",
    points: [
      "Schools notified of status changes",
      "SCDE alerted on new submissions",
      "CDE notified of SCDE approvals",
      "Finance Unit alerted for authorization",
    ],
  },
  {
    title: "Exception Handling",
    icon: "⚠️",
    gradient: "from-red-500 to-red-700",
    points: [
      "Rejection reasons documented in system",
      "School can revise and resubmit",
      "Approval process restarts on resubmission",
      "All exceptions logged in audit trail",
    ],
  },
  {
    title: "Monitoring & Oversight",
    icon: "📊",
    gradient: "from-green-500 to-green-700",
    points: [
      "SIP submission rate tracking",
      "Approval timeline monitoring",
      "Fund utilization dashboards",
      "Implementation progress reports",
    ],
  },
  {
    title: "Data Security & Integrity",
    icon: "🛡️",
    gradient: "from-teal-500 to-teal-700",
    points: [
      "Encrypted data storage",
      "System administrator oversight",
      "Regular integrity checks",
      "Compliance with Public Finance Management Act",
    ],
  },
];

export default function ControlsPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white px-8 md:px-16 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10">
          <span className="text-yellow-400 font-semibold text-sm tracking-widest uppercase">Safeguards</span>
          <h1 className="text-3xl md:text-4xl font-bold text-white mt-2">System Controls &amp; Safeguards</h1>
          <p className="text-gray-400 mt-3 max-w-xl">
            Built-in controls protect public funds, ensure process integrity, and maintain accountability at every stage of the SIP workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {controls.map((item) => (
            <div
              key={item.title}
              className="bg-gray-800 rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className={`bg-gradient-to-r ${item.gradient} px-5 py-4 flex items-center gap-3`}>
                <span className="text-xl">{item.icon}</span>
                <h3 className="font-bold text-white text-sm">{item.title}</h3>
              </div>
              <ul className="px-5 py-4 space-y-2">
                {item.points.map((p, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                    <span className="mt-0.5 text-green-400 flex-shrink-0">✓</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Compliance note */}
        <div className="bg-gray-800 border border-white/10 rounded-2xl p-6 mb-10">
          <h3 className="font-bold text-yellow-300 mb-3 text-base">Compliance Framework</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              "Ministry of Education Policies",
              "Public Finance Management Act",
              "Applicable Financial Regulations",
              "Audit and Accountability Standards",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-gray-300">
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 flex-shrink-0" />
                {item}
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-gray-500">
            Unauthorized use or misuse of the system shall be subject to disciplinary and legal action in accordance with applicable laws.
          </p>
        </div>

        <PageNav current="/controls" />
      </div>
    </div>
  );
}

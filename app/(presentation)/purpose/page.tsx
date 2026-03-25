import PageNav from "@/components/sip/PageNav";

const purposes = [
  {
    icon: "📋",
    title: "Standardized Workflow",
    description: "Establish a clear, uniform digital process for SIP submission and approval across all schools.",
  },
  {
    icon: "🔐",
    title: "Proper Authorization",
    description: "Ensure every fund utilization is formally authorized before any disbursement takes place.",
  },
  {
    icon: "🔍",
    title: "Accountability & Transparency",
    description: "Strengthen accountability and transparency in the use of public education resources.",
  },
  {
    icon: "⚡",
    title: "Reduce Processing Time",
    description: "Improve efficiency and significantly cut approval processing time through digital automation.",
  },
  {
    icon: "📊",
    title: "Real-time Visibility",
    description: "Provide live monitoring of SIP approvals, fund disbursement, and implementation progress.",
  },
];

export default function PurposePage() {
  return (
    <div className="min-h-screen bg-gray-50 px-8 md:px-16 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-10">
          <span className="text-blue-600 font-semibold text-sm tracking-widest uppercase">Why This System?</span>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Purpose of the Digital SIP System</h1>
          <p className="text-gray-500 mt-3 max-w-xl">
            The system addresses critical gaps in the traditional paper-based SIP approval process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
          {purposes.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="font-bold text-gray-800 text-base mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}

          {/* Scope card */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-6 shadow-sm text-white hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
            <div className="text-3xl mb-3">🏫</div>
            <h3 className="font-bold text-base mb-2">Scope of Application</h3>
            <ul className="text-blue-100 text-sm space-y-1.5">
              <li>• All public primary schools</li>
              <li>• Junior schools</li>
              <li>• Senior schools</li>
              <li>• Sub-County &amp; County Directors of Education</li>
              <li>• MoE HQ &amp; KPEEL Project Implementation Unit</li>
              <li>• All authorized system users</li>
            </ul>
          </div>
        </div>

        <PageNav current="/purpose" />
      </div>
    </div>
  );
}

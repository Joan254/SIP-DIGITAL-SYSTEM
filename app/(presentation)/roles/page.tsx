import PageNav from "@/components/sip/PageNav";

const roles = [
  {
    role: "Head of Institution",
    color: "bg-purple-50 border-purple-300",
    titleColor: "text-purple-800",
    dotColor: "bg-purple-500",
    icon: "🎓",
    responsibilities: [
      "Prepare the School Improvement Plan in the digital system",
      "Ensure accuracy and completeness of submitted information",
      "Upload all required supporting documents",
      "Submit the SIP for approval",
      "Implement approved activities",
      "Submit implementation and financial reports",
    ],
  },
  {
    role: "Board of Management (BOM)",
    color: "bg-yellow-50 border-yellow-300",
    titleColor: "text-yellow-800",
    dotColor: "bg-yellow-500",
    icon: "🏛️",
    responsibilities: [
      "Review the SIP prepared by the school",
      "Ensure proposed activities align with school priorities",
      "Ratify the SIP draft",
      "Provide supporting approval documentation",
    ],
  },
  {
    role: "Sub-County Director (SCDE)",
    color: "bg-blue-50 border-blue-300",
    titleColor: "text-blue-800",
    dotColor: "bg-blue-500",
    icon: "📍",
    responsibilities: [
      "Review SIPs submitted by schools",
      "Verify compliance with Ministry policies and guidelines",
      "Assess appropriateness of proposed activities and budgets",
      "Approve, reject and return SIPs for revision",
    ],
  },
  {
    role: "County Director (CDE)",
    color: "bg-green-50 border-green-300",
    titleColor: "text-green-800",
    dotColor: "bg-green-500",
    icon: "🗺️",
    responsibilities: [
      "Review SIPs approved by SCDE",
      "Validate the approval process",
      "Confirm compliance with the schools priorities",
      "Validate or reject SIP approvals",
    ],
  },
  {
    role: "Project Coordination Unit (PCU) - KPEEL & SEEQIP",
    color: "bg-red-50 border-red-300",
    titleColor: "text-red-800",
    dotColor: "bg-red-500",
    icon: "💰",
    responsibilities: [
      "Review validated SIP approvals",
      "Confirm availability of funds",
      "Authorize release of funds",
      "Ensure funds are disbursed to school accounts",
      "Audit and verify fund utilization reports",
    ],
  },
  {
    role: "System Administrator",
    color: "bg-gray-50 border-gray-300",
    titleColor: "text-gray-800",
    dotColor: "bg-gray-500",
    icon: "⚙️",
    responsibilities: [
      "Manage user access and roles",
      "Maintain system functionality",
      "Ensure data integrity and system security",
      "Provide technical support",
    ],
  },
];

export default function RolesPage() {
  return (
    <div className="min-h-screen bg-white px-8 md:px-16 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10">
          <span className="text-green-600 font-semibold text-sm tracking-widest uppercase">Stakeholders</span>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Roles &amp; Responsibilities</h1>
          <p className="text-gray-500 mt-3 max-w-xl">
            Six key actors collaborate within the digital system to ensure efficient SIP processing and fund utilization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          {roles.map((item) => (
            <div
              key={item.role}
              className={`rounded-2xl border-2 p-5 ${item.color} hover:shadow-md hover:-translate-y-0.5 transition-all duration-200`}
            >
              <div className="flex items-start gap-3 mb-3">
                <span className="text-2xl">{item.icon}</span>
                <h3 className={`font-bold text-sm leading-tight ${item.titleColor}`}>{item.role}</h3>
              </div>
              <ul className="space-y-1.5">
                {item.responsibilities.map((r, i) => (
                  <li key={i} className={`flex items-start gap-2 text-xs ${item.titleColor} opacity-80`}>
                    <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${item.dotColor}`} />
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <PageNav current="/roles" />
      </div>
    </div>
  );
}

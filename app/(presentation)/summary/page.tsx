import PageNav from "@/components/sip/PageNav";
import Link from "next/link";

const benefits = [
  { icon: "⏱️", title: "Faster Approvals", desc: "Automated routing eliminates manual handoffs, cutting processing time from weeks to days." },
  { icon: "🔍", title: "Full Transparency", desc: "Every action is logged with timestamps, making the entire approval chain visible and auditable." },
  { icon: "📱", title: "Accessible Anywhere", desc: "Web-based platform accessible from any device — schools, sub-county, county, and ministry offices." },
  { icon: "📊", title: "Data-Driven Decisions", desc: "Real-time dashboards and reports empower the Ministry to monitor fund utilization nationwide." },
];

const sections = [
  { href: "/overview", label: "Overview", icon: "🏠" },
  { href: "/purpose", label: "Purpose", icon: "🎯" },
  { href: "/roles", label: "Roles", icon: "👥" },
  { href: "/workflow", label: "Workflow", icon: "🔄" },
  { href: "/status", label: "Status Tracking", icon: "📍" },
  { href: "/demo", label: "SIP Form Demo", icon: "📝" },
  { href: "/dashboard", label: "Dashboard", icon: "📊" },
  { href: "/controls", label: "Controls", icon: "🛡️" },
];

export default function SummaryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-green-800 text-white px-8 md:px-16 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-10">
          <span className="text-yellow-400 font-semibold text-sm tracking-widest uppercase">Summary</span>
          <h1 className="text-3xl md:text-4xl font-bold text-white mt-2">Why This System Matters</h1>
          <p className="text-blue-100 mt-3 max-w-xl">
            The Digital SIP System transforms how Kenya manages school improvement funding — from an opaque paper process to a transparent, accountable digital workflow.
          </p>
        </div>

        {/* Key benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
          {benefits.map((item) => (
            <div
              key={item.title}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-colors"
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl flex-shrink-0">{item.icon}</span>
                <div>
                  <h3 className="font-bold text-white text-base mb-1">{item.title}</h3>
                  <p className="text-blue-100 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Compliance */}
        <div className="bg-white/10 border border-white/20 rounded-2xl p-6 mb-10">
          <h3 className="font-bold text-yellow-300 mb-3 text-base">Compliance Framework</h3>
          <div className="flex flex-wrap gap-3">
            {["Ministry of Education Policies", "Public Finance Management Act", "Financial Regulations", "Audit & Accountability Standards"].map((item) => (
              <span key={item} className="flex items-center gap-1.5 text-sm text-blue-100">
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 flex-shrink-0" />
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Quick links back through sections */}
        <div className="bg-white/10 border border-white/20 rounded-2xl p-6 mb-10">
          <h3 className="font-bold text-white mb-4 text-base">Review Any Section</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {sections.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="flex flex-col items-center gap-1.5 bg-white/10 hover:bg-white/20 border border-white/10 rounded-xl p-3 text-center transition-colors"
              >
                <span className="text-xl">{s.icon}</span>
                <span className="text-xs text-blue-100 font-medium">{s.label}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Footer note */}
        <div className="border-t border-white/20 pt-6 text-center">
          <p className="text-blue-200 text-sm">Ministry of Education, Kenya &nbsp;|&nbsp; KPEEL Project Implementation Unit</p>
          <p className="text-blue-300/50 text-xs mt-1">Digital SIP System — Effective upon official approval and deployment</p>
        </div>

        <div className="mt-8">
          <PageNav current="/summary" />
        </div>
      </div>
    </div>
  );
}

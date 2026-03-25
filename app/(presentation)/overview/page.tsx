import PageNav from "@/components/sip/PageNav";

export default function OverviewPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-900 via-blue-800 to-green-700 text-white relative overflow-hidden">
      {/* Background decorative circles */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full translate-x-1/4 translate-y-1/4 pointer-events-none" />

      <div className="relative z-10 flex-1 flex flex-col justify-center px-8 md:px-16 py-12 max-w-4xl mx-auto w-full">
        {/* Ministry badge */}
        <div className="inline-flex items-center gap-2 bg-white/15 border border-white/30 rounded-full px-5 py-2 mb-8 text-sm font-medium tracking-wide backdrop-blur-sm w-fit">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse-slow" />
          Ministry of Education – Kenya
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
          Digital Workflow for
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-green-300">
            School Improvement Plan
          </span>
          Approval &amp; Fund Utilization
        </h1>

        <p className="text-lg md:text-xl text-blue-100 max-w-2xl mb-10 leading-relaxed">
          A standardized digital platform to streamline SIP submission, multi-level approval,
          fund authorization, and real-time monitoring across all public primary schools.
        </p>

        <div className="flex flex-wrap gap-3 text-sm mb-12">
          {["Transparency", "Accountability", "Efficiency", "Real-time Monitoring"].map((tag) => (
            <span
              key={tag}
              className="bg-white/20 border border-white/30 rounded-full px-4 py-2 backdrop-blur-sm font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            { value: "47 Counties", label: "Coverage" },
            { value: "8 Stages", label: "Workflow Steps" },
            { value: "6 Roles", label: "Stakeholders" },
            { value: "Real-time", label: "Monitoring" },
          ].map(({ value, label }) => (
            <div key={label} className="bg-white/10 border border-white/20 rounded-2xl p-4 backdrop-blur-sm">
              <div className="text-xl font-bold text-yellow-300">{value}</div>
              <div className="text-xs text-blue-200 mt-1">{label}</div>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-white/20 pt-6">
          <PageNav current="/overview" />
        </div>
      </div>
    </div>
  );
}

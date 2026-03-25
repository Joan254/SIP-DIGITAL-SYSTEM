import Link from "next/link";

const pages = [
  { href: "/overview",  label: "Overview" },
  { href: "/purpose",   label: "Purpose" },
  { href: "/roles",     label: "Roles" },
  { href: "/workflow",  label: "Workflow" },
  { href: "/status",    label: "Status Tracking" },
  { href: "/demo",      label: "SIP Form Demo" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/controls",  label: "Controls" },
  { href: "/summary",   label: "Summary" },
];

export default function PageNav({ current }: { current: string }) {
  const idx = pages.findIndex((p) => p.href === current);
  const prev = idx > 0 ? pages[idx - 1] : null;
  const next = idx < pages.length - 1 ? pages[idx + 1] : null;

  return (
    <div className="flex items-center justify-between mt-12 pt-6 border-t border-gray-200">
      {prev ? (
        <Link
          href={prev.href}
          className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-blue-700 transition-colors"
        >
          <span>←</span>
          <span>{prev.label}</span>
        </Link>
      ) : (
        <div />
      )}
      <div className="text-xs text-gray-400 font-medium">
        {idx + 1} / {pages.length}
      </div>
      {next ? (
        <Link
          href={next.href}
          className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white transition-all shadow-md hover:shadow-lg"
        >
          <span>{next.label}</span>
          <span>→</span>
        </Link>
      ) : (
        <div />
      )}
    </div>
  );
}

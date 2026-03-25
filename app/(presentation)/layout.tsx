import PresentationShell from "@/components/sip/PresentationShell";

export default function PresentationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PresentationShell>{children}</PresentationShell>;
}

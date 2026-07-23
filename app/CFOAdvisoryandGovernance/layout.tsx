import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://aaliconsulting.ca/cfoadvisoryandgovernance", // Hardcoded exact lowercase URL
  },
};

export default function CFOAdvisoryandGovernanceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

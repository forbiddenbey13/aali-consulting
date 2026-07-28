import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/cfo-advisory-and-governance", // Hardcoded exact lowercase URL
  },
};

export default function cfoadvisoryandgovernanceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

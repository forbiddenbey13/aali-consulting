import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/tax-service", // Hardcoded exact lowercase URL
  },
};

export default function taxserviceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

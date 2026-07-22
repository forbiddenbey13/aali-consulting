import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://aaliconsulting.ca/taxservice", // Hardcoded exact lowercase URL
  },
};

export default function TaxServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

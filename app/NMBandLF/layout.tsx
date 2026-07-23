import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://aaliconsulting.ca/nmbandlf", // Hardcoded exact lowercase URL
  },
};

export default function NMBandLFLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

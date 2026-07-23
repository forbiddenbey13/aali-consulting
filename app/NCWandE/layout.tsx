import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://aaliconsulting.ca/ncwande", // Hardcoded exact lowercase URL
  },
};

export default function NCWandELayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

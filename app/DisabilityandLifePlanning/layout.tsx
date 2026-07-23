import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://aaliconsulting.ca/disabilityandlifeplanning", // Hardcoded exact lowercase URL
  },
};

export default function DisabilityandLifePlanningLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

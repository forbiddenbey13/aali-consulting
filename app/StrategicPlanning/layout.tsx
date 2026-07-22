import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://aaliconsulting.ca/strategicplanning",
  },
};

export default function StrategicPlanningLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

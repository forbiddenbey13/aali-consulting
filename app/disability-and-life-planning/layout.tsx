import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/disability-and-life-planning", // Hardcoded exact lowercase URL
  },
};

export default function disabilityandlifeplanningLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

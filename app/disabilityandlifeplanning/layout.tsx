import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/disabilityandlifeplanning", // Hardcoded exact lowercase URL
  },
};

export default function disabilityandlifeplanningLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

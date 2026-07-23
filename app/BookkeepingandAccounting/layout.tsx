import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://aaliconsulting.ca/bookkeepingandaccounting", // Hardcoded exact lowercase URL
  },
};

export default function BookkeepingandAccountingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

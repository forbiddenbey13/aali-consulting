import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/bookkeeping-and-accounting", // Hardcoded exact lowercase URL
  },
};

export default function bookkeepingandaccountingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

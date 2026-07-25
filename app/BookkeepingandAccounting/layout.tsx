import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/bookkeepingandaccounting", // Hardcoded exact lowercase URL
  },
};

export default function bookkeepingandaccountingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

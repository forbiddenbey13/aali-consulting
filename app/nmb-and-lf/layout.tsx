import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/nmb-and-lf", // Hardcoded exact lowercase URL
  },
};

export default function nmbandlfLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

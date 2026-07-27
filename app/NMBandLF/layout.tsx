import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/nmbandlf", // Hardcoded exact lowercase URL
  },
};

export default function nmbandlfLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

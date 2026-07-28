import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/life-and-estate-tax-planning",
  },
};

export default function lifeandestatetaxplanningLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

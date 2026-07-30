import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/systems-and-technology-implementation", // Hardcoded exact lowercase URL
  },
};

export default function systemsandtechnologyimplementationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

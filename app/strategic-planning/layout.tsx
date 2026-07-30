import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/strategic-planning",
  },
};

export default function strategicplanningLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

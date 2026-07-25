import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/taxservice", // Hardcoded exact lowercase URL
  },
};

export default function taxserviceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

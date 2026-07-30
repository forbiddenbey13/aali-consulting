import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/ncw-and-e", // Hardcoded exact lowercase URL
  },
};

export default function ncwandeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/personal-tax",
  },
};

export default function personaltaxLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

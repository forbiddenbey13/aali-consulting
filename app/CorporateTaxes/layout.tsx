import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/corporatetaxes",
  },
};

export default function corporatetaxesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

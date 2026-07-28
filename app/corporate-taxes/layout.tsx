import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/corporate-taxes",
  },
};

export default function corporatetaxesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

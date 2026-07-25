import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/aboutus",
  },
};

export default function aboutusLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

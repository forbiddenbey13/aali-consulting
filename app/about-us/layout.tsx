import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/about-us",
  },
};

export default function aboutusLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

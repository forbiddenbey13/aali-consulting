import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://aaliconsulting.ca/systemsandtechnologyimplementation", // Hardcoded exact lowercase URL
  },
};

export default function systemsandtechnologyimplementationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

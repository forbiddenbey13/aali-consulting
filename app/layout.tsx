import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: "AALI - Consulting",
//   description: "Financial Planning",
//   metadataBase: new URL("https://aaliconsulting.ca/"),
//   alternates: {
//     canonical: "./",
//   },
// };

export const metadata = {
  metadataBase: new URL("https://aaliconsulting.ca"),
  other: { "msvalidate.01": "12810C7D817BF9850B312F0022451336" },
  title: "Aali Consulting & Associates | Business & Strategic Planning",
  description:
    "Professional consulting services including strategic planning, accounting, and tax solutions.",
  // ... other global metadata
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

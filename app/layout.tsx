import type { Metadata } from "next";
import { urbanist } from "./fonts";
import "./globals.css";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  title: "Sherrisa's Portfolio",
  description:
    "Projects in videography, UX design, instructional design, and app development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

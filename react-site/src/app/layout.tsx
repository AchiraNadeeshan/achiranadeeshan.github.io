import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import "~/styles/globals.css";
import { TRPCReactProvider } from "~/trpc/react";
import { Navbar } from "~/components/Navbar";
import { Footer } from "~/components/Footer";

export const metadata: Metadata = {
  title: "Achira Nadeeshan",
  description: "My Personal Portfolio Website",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <body className="bg-mocha-crust text-mocha-text flex min-h-screen flex-col font-sans">
        <TRPCReactProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </TRPCReactProvider>
      </body>
    </html>
  );
}

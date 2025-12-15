import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import "~/styles/globals.css";
import { TRPCReactProvider } from "~/trpc/react";
import { Navbar } from "~/components/Navbar";

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
      <body className="flex min-h-screen flex-col bg-mocha-crust font-sans text-mocha-text">
        <TRPCReactProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
        </TRPCReactProvider>
      </body>
    </html>
  );
}

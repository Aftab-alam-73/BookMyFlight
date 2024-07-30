
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ReduxProvider from "@/components/ReduxProvider";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BookMyFlight",
  description: "flight booking and real time  updates application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>

       {children}
        </ReduxProvider>
      </body>
    </html>
  );
}

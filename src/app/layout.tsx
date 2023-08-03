import { Header } from "@/components/header";
import "./globals.css";
import type { Metadata } from "next";
import { Vollkorn } from "next/font/google";
import { socialNetwork } from "@/data";

const inter = Vollkorn({
  subsets: ["latin"],
  weight: ["400", "700", "500", "600", "800", "800"],
});

export const metadata: Metadata = {
  title: "Chakib Benchinoun",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Header className="container mx-auto px-8 py-6" />
        <main>
          <div className="relative isolate overflow-hidden bg-gradient-to-b from-gray-900/90">
            {children}
            <div
              className="hidden md:block absolute inset-y-0 xl:left-[17%] -z-10 -mr-10 w-[200%] skew-x-[-21deg] bg-gray-900 shadow-xl shadow-indigo-600/10 ring-1 ring-black md:-mr-20 lg:-mr-36"
              aria-hidden="true"
            />
          </div>
        </main>
        <footer className="bg-gray-900 border-t border-gray-500">
          <div className="container mx-auto px-8 py-10 w-full flex items-center">
            <p className="text-sm leading-5 text-gray-500">
              &copy; 2023 Chakib Benchinoun,
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}

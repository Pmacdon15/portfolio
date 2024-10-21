import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavBar from "@/components/ui/nav-bar";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Patrick McDonald",
  description: "Created and maintained by me personally Patrick MacDonald",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main className="bg-gradient-to-r from-cyan-500 to-blue-500 min-h-svh flex flex-col items-center p-4 md:p-8 gap-4 md:gap-8">
          <Header />
          <NavBar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Cookie, PT_Mono } from "next/font/google";
import "./globals.css";

const ptMono = PT_Mono({
  subsets: ["latin"],
  weight:["400"],
  variable: "--font-pt-mono"
});

export const cookie = Cookie({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-cookie"
})


export const metadata: Metadata = {
  title: "Timeline",
  description: "For remember moments",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cookie.variable} ${ptMono.variable} bg-white`}>{children}</body>
    </html>
  );
}


import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css"

import ClientLayout from "@/components/ClientLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Afonso Gesualdi - Portfolio",
  description: "Afonso Gesualdi's developer website Portfolio",
  keywords: "Web Develoment, Front-End, Back-End, React, Next.js, Vue.js, UX/UI, SEO, JavaScript, TypeScript, HTML, CSS, UIKit, TailwindCss, PHP, Node.js, Brand Management, Digital Marketing",
  authors: [
    {
      name: "Afonso Gesualdi",
      url:"https://portfolio-afonso.vercel.app"
    }
  ],
  openGraph: {
    title: "Afonso Gesualdi Dev | Full-stack Engineer & Design",
    description: "Web developer and design, specializing in Front-End, Back-End, UX/UI, Brand development and planning, Digital Marketing and SEO. Building modern and high-performance applications.",
    url: "https://portfolio-afonso.vercel.app",
    siteName: "Afonso Gesualdi Dev",
    images: [
        {
          url: "https://portfolio-afonso.vercel.app/og-image.jpg", 
          alt: "Afonso Gesualdi - Full-stack Engineer",
        }
    ],
  },
  metadataBase: new URL("https://portfolio-afonso.vercel.app"),
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  }
}


export default function RootLayout({ children}: { children: React.ReactNode }){
  return(
    <html lang="pt-br">
      <body className={`${geistMono.variable} ${geistSans.variable} antialiased text-white`}>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  )
}

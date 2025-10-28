
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

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
  title: "Afonso Gesualdi",
  description: "Afonso Gesualdi's developer website",
}


export default function RootLayout({ children}: { children: React.ReactNode }){
  return(
    <html lang="pt-br">
      <body className={`${geistMono.variable} ${geistSans.variable} antialiased`}>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  )
}

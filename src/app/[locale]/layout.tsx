import { i18n, Locale } from "@/lib/i18n"
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import ClientLayout from "@/app/ClientLayout";

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

export async function generateStaticParams(){
  return i18n.locales.map(locale => ({ locale }))
}

export default function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: { locale: Locale }
}>) {
  const locale = params.locale;
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClientLayout locale={locale}>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}

// src/app/ClientLayout.tsx
'use client';
import Header from "./Header";
import Provider from "./ui/providers";
import { useLocaleStore } from "@/store/use-locale-store";
import { useEffect } from "react";

export default function ClientLayout({ children }: { children: React.ReactNode }){
  const { locale } = useLocaleStore()

  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale]);

  return(
    <Provider>
      <Header/>
      {children}
    </Provider>
  )
}
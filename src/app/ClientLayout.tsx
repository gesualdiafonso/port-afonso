// src/app/ClientLayout.tsx
'use client';

import { useEffect } from 'react';
import Header from '@/components/Header';

export default function ClientLayout({
  children,
  locale,
}: {
  children: React.ReactNode;
  locale: string;
}) {
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return (
    <>
      <Header locale={locale} />
      <main>
        {children}
      </main>
    </>
  );
}

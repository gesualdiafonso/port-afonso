// src/components/Header.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const locales = ['en', 'es', 'pt-br'];

export default function Header({ locale }: { locale: string }) {
  const pathname = usePathname();

  const pathWithoutLocale = pathname
    .split('/')
    .slice(2)
    .join('/'); // remove o locale da rota

  return (
    <header className="flex justify-between items-center p-4 border-b">
      <h1 className="font-semibold text-lg">🌐 MySite</h1>
      <div className="flex gap-2">
        {locales.map(loc => (
          <Link
            key={loc}
            href={`/${loc}/${pathWithoutLocale}`}
            className={`px-3 py-1 rounded ${
              loc === locale ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
          >
            {loc.toUpperCase()}
          </Link>
        ))}
      </div>
    </header>
  );
}

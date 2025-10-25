import { getDictionary } from '@/lib/getDictionary';
import { Locale } from '@/lib/i18n';

export default async function HomePage({
  params,
}: {
  params: { locale: Locale };
}) {
  const dict = await getDictionary(params.locale);

  return (
    <section className="p-10 text-center">
      <h1 className="text-3xl font-bold">{dict['welcome_message']}</h1>
      <p className="text-gray-600 mt-2">{dict['subtitle']}</p>
    </section>
  );
}

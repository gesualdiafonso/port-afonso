import 'server-only';
import { Locale } from './i18n';

export const getDictionary = async (locale: Locale) => {
    const dictionaries = {
        en: () => import('@/locales/en/common.json').then(m => m.default),
        es: () => import('@/locales/es/common.json').then(m => m.default),
        'pt-br': () => import('@/locales/pt-br/common.json').then(m => m.default),
    };

    return dictionaries[locale]();
};


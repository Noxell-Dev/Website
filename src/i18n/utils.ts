import { getRelativeLocaleUrl } from 'astro:i18n';
import { dictionaries, type DictKey, type Lang } from './ui';

export function useTranslations(lang: Lang) {
  const dict = dictionaries[lang];
  return (key: DictKey): string => dict[key];
}

export type { DictKey, Lang };

/**
 * Locale-aware URL for an optional page path.
 * Default locale (es) stays unprefixed: `/`, `/terms`.
 * English is prefixed: `/en/`, `/en/terms`.
 */
export function localeUrl(lang: Lang, path?: string): string {
  const url = getRelativeLocaleUrl(lang, path);
  return url === '' ? '/' : url;
}

/**
 * Slugs that are translated per locale (ES page name ≠ EN page name).
 * `localeUrl(lang, 'terms')` would point Spanish users at `/terms`, which
 * does not exist — always go through here for these pages.
 */
const LOCALIZED_SLUGS = {
  terms: { es: 'terminos', en: 'terms' },
  privacy: { es: 'privacidad', en: 'privacy' },
} as const;

export type LocalizedSlug = keyof typeof LOCALIZED_SLUGS;

export function localizedUrl(lang: Lang, slug: LocalizedSlug): string {
  return localeUrl(lang, LOCALIZED_SLUGS[slug][lang]);
}

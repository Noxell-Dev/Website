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

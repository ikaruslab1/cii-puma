import { getRelativeLocaleUrl } from "astro:i18n";

export const languages = {
  es: 'Español',
  en: 'English',
};

export const defaultLang = 'es';

export const ui = {
  es: {
    'nav.home': 'Inicio',
    'nav.register': 'Registro',
    'nav.program': 'Programa',
    'nav.comite': 'Comite',
    'nav.language': 'Español', 
  },
  en: {
    'nav.home': 'Home',
    'nav.register': 'Register',
    'nav.program': 'Program',
    'nav.comite': 'Comite',
    'nav.language': 'English',
  },
} as const;


export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}

export function getLocalizedPath(lang: string, path: string): string {
  const url = getRelativeLocaleUrl(lang, path);

  if (!path || path === '/') {
    return url.endsWith('/') ? `${url}index.html` : `${url}/index.html`;
  }
  
  const cleanUrl = url.replace(/\/$/, '');
  return `${cleanUrl}.html`;
}
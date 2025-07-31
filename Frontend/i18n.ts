// src/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// import en from './locales/en.json';
// import fr from './locales/fr.json'; // Example: French

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    resources: {
    //   en: { translation: en },
    //   fr: { translation: fr },
    },
    interpolation: {
      escapeValue: false, // React already escapes by default
    },
  });

export default i18n;
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-xhr-backend"; // Подключаем Backend для загрузки переводов

// // Імпортуємо файли локалізації
// import translationEN from "./locales/english.json";
// import translationES from "./locales/español.json";
// import translationFR from "./locales/français.json";
// import translationCAT from "./locales/català.json";
// import translationDE from "./locales/deutsch.json";
// import translationIT from "./locales/italiano.json";

// const resources = {
//   english: { translation: translationEN },
//   español: { translation: translationES },
//   français: { translation: translationFR },
//   català: { translation: translationCAT },
//   deutsch: { translation: translationDE },
//   italiano: { translation: translationIT },
// };

i18n
  .use(initReactI18next)
  .use(Backend) // Загрузка переводов с сервера
  .use(LanguageDetector)
  .init({
    backend: {
      loadPath: "/locales/{{lng}}/translation.json", // Путь к файлам перевода
    },
    fallbackLng: "en",
    interpolation: { escapeValue: false },
    react: {
      useSuspense: false, // Для React 18 и выше
    },
  });

export default i18n;

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend"; // Подключаем Backend для загрузки переводов

i18n
  .use(Backend) // Загрузка переводов с сервера
  .use(initReactI18next)
  .init({
    fallbackLng: "en", // Язык по умолчанию
    debug: true, // Включите отладку при необходимости
    interpolation: {
      escapeValue: false, // Отключаем экранирование HTML
    },
    supportedLngs: ["en", "ua"], // Список поддерживаемых языков
    backend: {
      loadPath: "/locales/{{lng}}/translation.json", // Указываем путь к файлам перевода
    },
    detection: {
      order: ["querystring", "localStorage", "navigator"], // Определение языка
      caches: ["localStorage"], // Кэширование выбора языка
    },
  });

export default i18n;

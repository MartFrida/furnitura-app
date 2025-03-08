import { useTranslation } from "react-i18next";

const MapComponent = () => {
  const { t } = useTranslation();
  return (
    <section className="bg-[#090c24] text-white py-12 px-6 md:px-12">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4"> {t("contacts.location")}</h2>
        <p className="text-gray-400 mb-2  ">
          {t("contacts.description")}
        </p>
        <p className="text-gray-400 mb-6">
          {t("contacts.open")}
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <iframe
            className="w-full h-[400px] md:h-[500px]"
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.2854869729144!2d2.1714774751635013!3d41.3896060712996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a370b3054a75%3A0xc3919ce2d7a6cf1b!2sSmoke%20Point!5e0!3m2!1sen!2ses!4v1738848179294!5m2!1sen!2ses"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default MapComponent;
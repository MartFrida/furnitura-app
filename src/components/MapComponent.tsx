import { useTranslation } from "react-i18next";

const MapComponent = () => {
  const { t } = useTranslation();
  return (
    <section className="bg-slate-950/50 text-white py-12 px-6 md:px-12 rounded-lg">
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10164.32367766653!2d30.64529975659159!3d50.4395933969529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4c530c3e6c829%3A0x54b7cf233f77fa80!2sAlmatynska%20St%2C%208%2C%20Kyiv%2C%20Ukraine%2C%2002000!5e0!3m2!1sen!2ses!4v1742286646560!5m2!1sen!2ses"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default MapComponent;
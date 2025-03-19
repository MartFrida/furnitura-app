import { useTranslation } from "react-i18next";
import { FaPhone } from "react-icons/fa";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-slate-950 text-white py-6 w-full">
      <div className="container mx-auto flex flex-col items-center text-center gap-4 sm:flex-row sm:justify-between sm:text-left">
        <p className="text-gray-400">&copy; {new Date().getFullYear()} {t("footer")}</p>
        <div className="flex items-center gap-2">
          <FaPhone className="text-orange-400 text-xl" />
          <a href="tel:+380677747431" className="text-gray-300 hover:text-white transition">
            +38 067-774-74-31
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
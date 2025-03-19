import { useTranslation } from "react-i18next";
import { FaPhone } from "react-icons/fa";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-slate-950 text-white py-6 w-full">
      <div className="container mx-auto text-center w-full">
        <p>&copy; {t("footer")} </p> <div className="flex items-center gap-4">
          <FaPhone className="text-orange-400 text-2xl" />
          <a href="tel:+380677747431" className="text-gray-300">+38 067-774-74-31</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
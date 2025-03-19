import { FaPhone, FaEnvelope, FaClock } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import Container from "../components/Container";
import MapComponent from "../components/MapComponent";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="h-20"></div>
      <Container >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-orange-500">📍 {t("contacts.title")}</h2>
        </div>

        {/* Contact Info */}
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <MapComponent />

          {/* Business Hours */}
          <div className="bg-slate-950/50 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-orange-400 mb-4 flex items-center gap-2">
              <FaClock className="text-orange-400" /> {t("contacts.hours-title")}
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex justify-between">
                <span>{t("contacts.week.monday")}</span> <span>9:00 - 19:00</span>
              </li>
              <li className="flex justify-between">
                <span>{t("contacts.week.tuesday")}</span> <span>9:00 - 19:00</span>
              </li>
              <li className="flex justify-between">
                <span>{t("contacts.week.wednesday")}</span> <span>9:00 - 19:00</span>
              </li>
              <li className="flex justify-between">
                <span>{t("contacts.week.thursday")}</span> <span>9:00 - 19:00</span>
              </li>
              <li className="flex justify-between">
                <span>{t("contacts.week.friday")}</span> <span>9:00 - 19:00</span>
              </li>
              <li className="flex justify-between">
                <span>{t("contacts.week.saturday")}</span> <span>9:00 - 19:00</span>
              </li>
              <li className="flex justify-between">
                <span>{t("contacts.week.sunday")}</span> <span>Вихідний</span>
              </li>
            </ul>
            <div className="flex items-center gap-4">
              <FaPhone className="text-orange-400 text-2xl" />
              <a href="tel:+380677747431" className="text-gray-300">+38 067-774-74-31</a>
            </div>
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-orange-400 text-2xl" />
              <a href="mailto:ahmadbutt.sclub@gmail.com" className="text-gray-300">ahmadbutt.sclub@gmail.com
              </a>
            </div>
          </div>

        </div>
      </Container>
    </>
  )
}

export default Contact
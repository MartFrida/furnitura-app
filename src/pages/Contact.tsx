import { FaClock } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import Container from "../components/Container";
import MapComponent from "../components/MapComponent";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="h-20"></div>
      <Container >
        <h2 className="text-4xl mx-auto text-center font-bold mb-6 text-amber-400">📍 {t("contacts.title")}</h2>

        {/* Contact Info */}
        <div className=" mx-auto flex flex-col md:flex-row  gap-8">
          <MapComponent />

          {/* Business Hours */}
          <div className="bg-slate-950/50 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold  mb-4 flex items-center gap-2">
              <FaClock /> {t("contacts.hours-title")}
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

          </div>

        </div>
      </Container>
    </>
  )
}

export default Contact
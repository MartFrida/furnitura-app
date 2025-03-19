import { useTranslation } from "react-i18next";
// import { useState } from "react";
// import RegisterModal from "./RegisterModal";
import Container from "./Container";

const About: React.FC = () => {
  const { t } = useTranslation();
  // const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  return (
    <>
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-amber-400 animate-fadeIn">
            🔥 {t("about.title")}
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            {t("about.introduse")}
          </p>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            {t("about.description")}
          </p>
        </div>
      </Container>
      <Container>

        <h3 className="text-2xl font-semibold text-orange-400">{t("about.why")}</h3>
        <ul className="mt-4 space-y-3 text-gray-300">
          <li>✅ {t("about.list.first")}</li>
          <li>✅ {t("about.list.second")}</li>
          <li>✅ {t("about.list.third")}</li>
          <li>✅ {t("about.list.forth")}</li>
        </ul>

      </Container>
      <Container>
        <div className="text-center mt-8">
          <p className="text-lg text-gray-300 mb-4">
            {t("about.join")} ✨
          </p>
          {/* <button
            onClick={() => setIsModalOpen(true)}

            className="bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105 hover:brightness-110"
          >
            {t("hero.become")}
          </button> */}
        </div>

      </Container >
    </>


  )
}

export default About
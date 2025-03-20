import { useTranslation } from "react-i18next";
// import { useState } from "react";
// import RegisterModal from "./RegisterModal";
import Container from "./Container";

interface AboutItem {
  title: string;
  introduse: string;
  description: string;
  why: string;
  list: string[];
  join: string;
}

const About: React.FC = () => {
  const { t } = useTranslation();
  const abouts = t('about', { returnObjects: true }) as AboutItem;


  return (
    <>
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-amber-400 animate-fadeIn">
            {t("about.title")}
          </h2>
          <p className="text-lg leading-relaxed mb-6">
            {t("about.introduse")}
          </p>
          <p className="text-lg leading-relaxed mb-6">
            {t("about.description")}
          </p>
        </div>
      </Container>
      <Container>
        <h3 className="text-2xl font-semibold text-amber-400 text-center">{t("about.why")}</h3>
        <ul className="mt-4 space-y-3">
          {abouts.list.map((index, item) => (
            <li key={index}>✅ {t(`about.list.${item}`)}</li>
          ))}                </ul>

      </Container>
      <Container>
        <div className="text-center mt-8">
          <h2 className="text-2xl text-gray-300 mb-4">
            {t("about.join")} ✨
          </h2>
        </div>

      </Container >
    </>


  )
}

export default About
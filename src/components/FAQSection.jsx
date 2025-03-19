import { useState } from "react";
import { useTranslation } from "react-i18next";
import Container from "./Container";

const FAQSection = () => {
  const { t } = useTranslation();
  const faqs = [
    {
      question: t("faq.first-title"),
      answer:
        t('faq.first-description'),
      list: ["one", "two", "three", "fore", "five"]
    },
    {
      question: t("faq.second-title"),
      answer: t('faq.second-description'),
    },
    {
      question: t("faq.third-title"),
      answer: t('faq.third-description'),
    },
    {
      question: t("faq.forth-title"),
      answer: t('faq.forth-description'),
    },
  ];
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Container>
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6"> {t("faq.title")}</h2>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-lg">
            <button
              className="w-full flex justify-between items-center text-left font-semibold text-lg"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span className="text-gray-400">
                {openIndex === index ? "▲" : "▼"}
              </span>
            </button>
            {openIndex === index && (
              <p className="mt-2 text-gray-300">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </Container>
  );
};

export default FAQSection;

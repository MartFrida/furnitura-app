import { useState } from "react";
import { useTranslation } from "react-i18next";
import Container from "./Container";

const FAQSection = () => {
  const { t } = useTranslation();
  const faqs = t('faq.questions', { returnObjects: true });

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Container>
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">{t("faq.title")}</h2>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-slate-950 p-4 rounded-lg shadow-lg">
            <button
              className="w-full flex justify-between items-center text-left font-semibold text-lg"
              onClick={() => toggleFAQ(index)}
            >
              {faq.title}
              <span className="text-gray-400">
                {openIndex === index ? "▲" : "▼"}
              </span>
            </button>

            {openIndex === index && (
              <div className="mt-2">
                <p className="text-gray-300">{faq.description}</p>
                {faq.list && faq.list.length > 0 && (
                  <ul className="list-disc ml-6 mt-2 text-gray-300">
                    {faq.list.map((item, i) => (
                      <li key={i}>{t(`${item}`)}</li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </Container>
  );
};

export default FAQSection;

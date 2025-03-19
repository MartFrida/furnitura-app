import heroImg from '/images/main.jpg'
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative w-full h-screen flex items-center justify-center text-white mt-10">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center  overflow-hidden bg-gray-950/80"
      >
        <div className=" absolute top-0 left-0 h-64 md:h-full inset-0 bg-gray-950/20 rounded-lg"></div>
        <img className='w-full h-full object-cover' src={heroImg} alt='/hero-mebli' loading="lazy" />
      </div>

      {/* Content Container */}
      <div className="flex flex-col-reverse md:flex-row items-center">
        <div className="relative text-center px-6 max-w-3xl">
          <h1 className=" tracking-widest text-5xl md:text-8xl font-bold leading-relaxed text-center text-white"
            style={{ textShadow: "4px 4px 10px rgba(0, 0, 0, 0.9)" }}>
            {t("welcome")}
          </h1>
          <p className="text-2xl md:text-3xl leading-relaxed tracking-wide text-center text-white"
            style={{ textShadow: "4px 4px 10px rgba(0, 0, 0, 0.9)" }}>
            {t("description")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;

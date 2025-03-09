import heroImg from '/images/main.jpg'
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative w-full h-screen flex items-center justify-center text-white mt-10">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40 overflow-hidden"
      >
        <img className='w-full h-full object-cover' src={heroImg} alt='/hero-mebli' loading="lazy" />
      </div>

      {/* Content Container */}
      <div className="flex flex-col-reverse md:flex-row items-center">
        <div className="relative text-center px-6 max-w-3xl">
          <h1 className=" tracking-widest text-5xl md:text-7xl font-bold leading-relaxed text-center text-white"
            style={{ textShadow: "4px 4px 10px rgba(0, 0, 0, 0.9)" }}>
            {t("hero.welcome")}
          </h1>
          <p className="text-2xl md:text-3xl leading-relaxed tracking-wide text-center text-white"
            style={{ textShadow: "4px 4px 10px rgba(0, 0, 0, 0.9)" }}>
            {t("hero.introduse")}
          </p>
          <button
            className="bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105 hover:brightness-110"
          >
            {t("hero.become")}
          </button>
        </div>
        <div className='h-auto p-8'>
          {/* <img className='' src={heroPicture} alt='/fire-smoke' loading="lazy" /> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;

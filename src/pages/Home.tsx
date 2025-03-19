// import ContactForm from "../components/ContactForm"
import Hero from "../components/Hero"
// import MapComponent from "../components/MapComponent"
import About from "../components/About"
import FAQSection from "../components/FAQSection"


const Home = () => {
  return (
    <div className="gap-y-4">
      <Hero />
      <About />
      <FAQSection />
      {/* <MapComponent />
      <ContactForm /> */}
    </div>
  )
}

export default Home
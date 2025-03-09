import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Products from "./pages/Products";

// function Home() {
//   return <div className="p-4 text-center text-xl">Добро пожаловать на сайт производителя мебельной фурнитуры!</div>;
// }

// function About() {
//   return <div className="p-4 text-center text-xl">О нас: Мы производим качественную мебельную фурнитуру.</div>;
// }

// function Products() {
//   return <div className="p-4 text-center text-xl">Наши товары: петли, ручки, направляющие и многое другое.</div>;
// }

// function Contact() {
//   return <div className="p-4 text-center text-xl">Контакты: Свяжитесь с нами для сотрудничества.</div>;
// }

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen min-w-screen overflow-hidden box-border">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;

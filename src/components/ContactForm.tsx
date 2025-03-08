import { useState } from "react";
import emailjs from "@emailjs/browser";
// import { useTranslation } from "react-i18next";

export default function ContactForm() {
  // const { t } = useTranslation();

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
  const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // const credentialsEmailJS = {
  //   serviceId,
  //   templateID,
  //   publicKey
  // }

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await emailjs.send(
        serviceId,
        templateID,
        formData,
        publicKey
      );

      if (response.status === 200) {
        setStatus("Your message has been sent!");
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      setStatus("Error sending. Try again.");
      console.error("EmailJS Error:", error);
    }
  };

  return (
    <div className="flex items-center justify-center  p-4">
      <div className="max-w-md mx-auto backdrop-blur-sm bg-slate-900 text-white p-8 rounded-2xl shadow-xl w-full max-w-md transform transition-all scale-100 ">
        {/* <h2 className="text-xl font-semibold mb-4">Contact us</h2> */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
          <textarea
            name="message"
            placeholder="Your message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105 hover:brightness-110"
          >
            Send
          </button>
        </form>
        {status && <p className="mt-4 text-center text-sm">{status}</p>}
      </div>
    </div>

  );
}

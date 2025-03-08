import { useEffect } from 'react'
import ContactForm from './ContactForm';

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RegisterModal: React.FC<RegisterModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden"); // Блокируем скролл
    } else {
      document.body.classList.remove("overflow-hidden"); // Разрешаем скролл
    }

    return () => {
      document.body.classList.remove("overflow-hidden"); // Очистка при размонтировании
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if ((event.target as HTMLDivElement).id === "modal-overlay") {
      onClose(); // Закрываем модалку
    }
  };

  return (
    <div id="modal-overlay" onClick={handleOverlayClick} className="fixed inset-0 flex items-center justify-center backdrop-blur-sm z-50">
      <div className="bg-slate-950 text-white p-8 rounded-2xl shadow-xl w-full max-w-md transform transition-all scale-100 ">
        {/* Modal Header */}
        {/* <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">{t("register")}</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-200 text-xl">&times;</button>
        </div> */}
        {/* <RegisterForm /> */}
        <ContactForm />
      </div>
    </div>
  );
};

export default RegisterModal;

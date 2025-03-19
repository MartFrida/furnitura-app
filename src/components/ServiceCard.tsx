import React, { useState } from "react";

interface ServiceCardProps {
  image: string;
  title: string;
  description: {
    workList: string[];
    unit: string;
    price: string;
    currency: string;
  };
}

const ServiceCard: React.FC<ServiceCardProps> = ({ image, title, description }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        className="max-w-xs bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="p-4 text-center">
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-xl font-bold mb-4">{title}</h2>
            <ul className="mb-4">
              {description.workList.map((work, index) => (
                <li key={index} className="text-gray-700">- {work}</li>
              ))}
            </ul>
            <p className="text-gray-700">Одиниці вимірювання: {description.unit}</p>
            <p className="text-gray-700">Ціна: {description.price} {description.currency}</p>
            <button
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
              onClick={() => setIsModalOpen(false)}
            >
              Закрити
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ServiceCard;

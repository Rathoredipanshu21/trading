import React from "react";
import { FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Modal = ({ isOpen, onClose, title, content,  }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg max-w-lg w-full shadow-lg transition-transform transform scale-95 duration-300 ease-out hover:scale-100">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl text-black hover:text-gray-800 focus:outline-none"
        >
          <FaTimes />
        </button>

        <div className="text-center mb-6">
          <h2 className="text-3xl font-semibold text-gray-800">{title}</h2>
          <p className="text-lg text-gray-600 mt-4">{content}</p>
        </div>

       
      </div>
    </div>
  );
};

export default Modal;

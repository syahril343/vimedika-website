import { FaWhatsapp } from "react-icons/fa";

const WhatsAppFloatingButton = () => {
  return (
    <a
      href="https://wa.me/6281234567890" // ganti dengan nomor WA kamu
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-black text-white p-4 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center"
      title="Hubungi via WhatsApp"
    >
      <FaWhatsapp className="w-7 h-7" />
    </a>
  );
};

export default WhatsAppFloatingButton;

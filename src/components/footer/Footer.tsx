import {
  FaEnvelope,
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router-dom";

// images
import Logo from "../../assets/images/Logo.png";

export default function Footer() {
  return (
    <footer className="bg-white pt-24 relative">
      {/* CTA Box */}
      <div className="absolute left-1/2 -translate-x-1/2 bg-primary text-white rounded-full shadow-lg px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-12 w-[90%] max-w-4xl">
        <span className="text-base sm:text-lg font-semibold text-center md:text-left">
          Siap untuk mulai?
        </span>
        <button className="bg-white text-primary font-semibold px-8 py-2 rounded-full shadow hover:bg-green-100 transition text-sm sm:text-base">
          Mulai
        </button>
      </div>

      {/* Main Footer Content */}
      <div className="container bg-primary/10 rounded-t-3xl mt-20 md:mt-10 px-6 py-12 md:py-16">
        <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-sm text-gray-700">
          {/* Logo & Perusahaan */}
          <div className="flex flex-col items-start">
            <img className="w-36" src={Logo} alt="Logo-Vimedika" />
            <p className="text-lg font-semibold text-black mt-5">
              PT Visi Media Komputama
            </p>
          </div>

          {/* Menu Navigasi */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Menu</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-primary transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/tentang" className="hover:text-primary transition">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link to="/layanan" className="hover:text-primary transition">
                  Layanan
                </Link>
              </li>
              <li>
                <Link to="/kontak" className="hover:text-primary transition">
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          {/* Layanan */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Layanan</h4>
            <ul className="space-y-2">
              <li>Custom Software</li>
              <li>Web Company</li>
              <li>Logo Design</li>
              <li>UI/UX Design</li>
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Kontak</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-[#F59E0B]" /> Email
              </li>
              <li className="flex items-center gap-2">
                <FaInstagram className="text-[#F59E0B]" /> Instagram
              </li>
              <li className="flex items-center gap-2">
                <FaTwitter className="text-[#F59E0B]" /> Twitter
              </li>
              <li className="flex items-center gap-2">
                <FaFacebook className="text-[#F59E0B]" /> Facebook
              </li>
              <li className="flex items-center gap-2">
                <FaWhatsapp className="text-[#F59E0B]" /> WhatsApp
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

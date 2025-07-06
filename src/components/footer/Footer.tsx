import { FaEnvelope, FaInstagram, FaTwitter, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white pt-24 relative">
      {/* CTA Box */}
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-[#F59E0B] text-white rounded-xl shadow-lg px-6 py-4 flex flex-col md:flex-row items-center gap-4 w-[90%] md:w-auto max-w-4xl">
        <span className="text-lg font-semibold">Siap untuk mulai?</span>
        <button className="bg-white text-[#F59E0B] font-semibold px-5 py-2 rounded shadow hover:bg-gray-100 transition">
          Mulai
        </button>
      </div>

      {/* Main Footer Content */}
      <div className="bg-[#FFF8ED] rounded-t-3xl mt-10 px-6 py-12 md:py-16">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm text-gray-700">
          {/* Logo & Perusahaan */}
          <div className="flex flex-col items-start">
            {/* Ganti logo di bawah ini dengan <img /> jika pakai gambar */}
            <div className="text-xl font-bold text-primary flex items-center gap-2">
              <div className="w-6 h-6 bg-green-500 rounded-sm"></div>
              <span className="text-black">Vimedika</span>
            </div>
            <p className="text-xs text-gray-500 mt-1">Smart Web & App Solutions</p>
            <p className="mt-4 font-semibold text-black">PT Visi Media Digital Komputama</p>
          </div>

          {/* Menu Navigasi */}
          <div>
            <h4 className="font-semibold mb-2">Menu</h4>
            <ul className="space-y-1">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/tentang">Tentang Kami</Link></li>
              <li><Link to="/layanan">Layanan</Link></li>
              <li><Link to="/kontak">Kontak</Link></li>
            </ul>
          </div>

          {/* Layanan */}
          <div>
            <h4 className="font-semibold mb-2">Layanan</h4>
            <ul className="space-y-1">
              <li>Custom Software</li>
              <li>Web Company</li>
              <li>Logo Design</li>
              <li>UI/UX Design</li>
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h4 className="font-semibold mb-2">Kontak</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2"><FaEnvelope className="text-[#F59E0B]" /> Email</li>
              <li className="flex items-center gap-2"><FaInstagram className="text-[#F59E0B]" /> Instagram</li>
              <li className="flex items-center gap-2"><FaTwitter className="text-[#F59E0B]" /> Twitter</li>
              <li className="flex items-center gap-2"><FaFacebook className="text-[#F59E0B]" /> Facebook</li>
              <li className="flex items-center gap-2"><FaWhatsapp className="text-[#F59E0B]" /> WhatsApp</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

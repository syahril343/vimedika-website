import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/button/Mybutton";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="w-full bg-white shadow-md fixed top-0 left-0 z-50 rounded-3xl sticky px-4">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold text-primary">
          <Link to="/">Vimedika</Link>
        </div>

        {/* Navigasi Desktop */}
        <nav className="space-x-6 hidden md:flex">
          <Link to="/" className="text-gray-700 hover:text-primary transition">
            Home
          </Link>
          <Link to="/tentang" className="text-gray-700 hover:text-primary transition">
            Tentang Kami
          </Link>
          <Link to="/layanan" className="text-gray-700 hover:text-primary transition">
            Layanan
          </Link>
          <Link to="/kontak" className="text-gray-700 hover:text-primary transition">
            Kontak
          </Link>
        </nav>

        {/* Tombol Aksi (Desktop) */}
        <div className="hidden md:block">
          <Button variant="primary" size="md" className="hover:bg-hoverBtn">
            Konsultasi
          </Button>
        </div>

        {/* Toggle Icon (Mobile) */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700">
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 pb-4">
          <nav className="flex flex-col space-y-2 pt-2">
            <Link to="/" onClick={toggleMenu} className="text-gray-700 hover:text-primary">
              Home
            </Link>
            <Link to="/tentang" onClick={toggleMenu} className="text-gray-700 hover:text-primary">
              Tentang Kami
            </Link>
            <Link to="/layanan" onClick={toggleMenu} className="text-gray-700 hover:text-primary">
              Layanan
            </Link>
            <Link to="/kontak" onClick={toggleMenu} className="text-gray-700 hover:text-primary">
              Kontak
            </Link>
            <Button
              variant="primary"
              size="md"
              className="mt-3 hover:bg-hoverBtn"
              onClick={toggleMenu}
            >
              Konsultasi
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

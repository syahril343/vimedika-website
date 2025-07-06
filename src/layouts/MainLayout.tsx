// src/layouts/MainLayout.jsx
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

export default function MainLayout({ children }) {
  return (
    <div className="container">
      <Header />
      <main className="f">
        {children}
      </main>
      <Footer />
    </div>
  );
}

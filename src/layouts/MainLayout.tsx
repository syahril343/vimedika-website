import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";


const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;

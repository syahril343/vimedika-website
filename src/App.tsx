import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from './layouts/MainLayout';
// pages
import HomePage from "./pages/Home";
import AboutPage from "./pages/Tentang";

const App = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tentang" element={<AboutPage />} />
        </Routes>
      </MainLayout>
    </Router>
  )
}

export default App
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from './layouts/MainLayout';
// pages
import HomePage from "./pages/Home";
import LayananPage from "./pages/Layanan";


const App = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/layanan" element={<LayananPage />} />
        </Routes>
      </MainLayout>
    </Router>
  )
}

export default App
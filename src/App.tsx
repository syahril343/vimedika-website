import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
// pages
import HomePage from "../src/pages/Home";

const App = () => {
  return (
    <Routes>
       <Route path="/" element={<MainLayout><HomePage /></MainLayout>} />
    </Routes>
  )
}

export default App
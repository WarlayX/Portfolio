import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ScrollToTop from './components/ScrollToTop';
import MainLayout from './layouts/Mainlayout';
import DesignsLayout from './layouts/DesignsLayout';
import Home from './Pages/Home';
import Designs from './Pages/Designs';

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    })
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={
          <MainLayout>
            <Home />
          </MainLayout>
        } />
        <Route path="/designs" element={
          <DesignsLayout>
            <Designs />
          </DesignsLayout>
        } />
      </Routes>
    </BrowserRouter>
  );
}
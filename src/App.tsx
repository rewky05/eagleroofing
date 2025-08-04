import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import NewRoofsPage from './pages/services/NewRoofsPage';
import FlatRoofPage from './pages/services/FlatRoofPage';
import SyntheticSlatsPage from './pages/services/SyntheticSlatsPage';
import MetalRoofPage from './pages/services/MetalRoofPage';
import SkylightsPage from './pages/services/SkylightsPage';
import EmergencyPage from './pages/services/EmergencyPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/services/new-roofs" element={<NewRoofsPage />} />
            <Route path="/services/flat-roof" element={<FlatRoofPage />} />
            <Route path="/services/synthetic-slats" element={<SyntheticSlatsPage />} />
            <Route path="/services/metal-roof" element={<MetalRoofPage />} />
            <Route path="/services/skylights" element={<SkylightsPage />} />
            <Route path="/services/emergency" element={<EmergencyPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
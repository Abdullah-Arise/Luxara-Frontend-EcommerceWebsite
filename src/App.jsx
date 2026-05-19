import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import ScrollToTop from './components/ScrollToTop';
import Chatbot from './components/Chatbot';

const Home = lazy(() => import('./pages/Home'));
const ShopAll = lazy(() => import('./pages/ShopAll'));
const NewArrivals = lazy(() => import('./pages/NewArrivals'));
const GiftSets = lazy(() => import('./pages/GiftSets'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const Contact = lazy(() => import('./pages/Contact'));
const FAQPage = lazy(() => import('./pages/FAQPage'));
const JewelryCare = lazy(() => import('./pages/JewelryCare'));
const TrackOrder = lazy(() => import('./pages/TrackOrder'));
const BrandLegacy = lazy(() => import('./pages/BrandLegacy'));

import './App.css';

function App() {
  return (
    <CartProvider>
      <Router>
        <ScrollToTop />
        <Chatbot />
        <Suspense fallback={<div className="min-h-screen bg-black" />}>
          <Routes>
            <Route path="/"              element={<Home />} />
            <Route path="/shop"          element={<ShopAll />} />
            <Route path="/new-arrivals"  element={<NewArrivals />} />
            <Route path="/gift-sets"     element={<GiftSets />} />
            <Route path="/about"         element={<AboutUs />} />
            <Route path="/contact"       element={<Contact />} />
            <Route path="/faqs"          element={<FAQPage />} />
            <Route path="/jewelry-care"  element={<JewelryCare />} />
            <Route path="/track-order"   element={<TrackOrder />} />
            <Route path="/our-story"     element={<BrandLegacy />} />

            <Route path="*" element={<Home />} />
          </Routes>
        </Suspense>
      </Router>
    </CartProvider>
  );
}

export default App;

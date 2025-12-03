import React from "react";
import Navbar from "./components/GlobalComponents/Navbar";
import About from "./components/AboutComponents/About";
import Hero from "./components/HomePageComponents/Hero";
import Invest from "./components/InvestComponents/Invest";
import ImageGallery from "./components/ImageGalleryComponents/ImageGallery";
import NearByLocations from "./components/NearByLocations/NearByLocations";
import Footer from "./components/GlobalComponents/Footer";
import ThankYou from "./pages/ThankYou";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div>
            <Navbar />
            <Hero />
            <About />
            <Invest />
            <ImageGallery />
            <NearByLocations />
            <Footer />
          </div>
        }
      />
      <Route path="/thank-you" element={<ThankYou />} />
    </Routes>
  );
};

export default App;

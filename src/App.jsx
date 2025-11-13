
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar  from "../components/Navbar/Navbar";
import About from "../pages/About/About";
import Contact from "../pages/contact/contact";
import Footer from "../components/Footer/Footer";
import Resources from "../pages/Resources/Resources";
import AdminPanel from "../components/Admin/AdminPanel";
import ReachUs from "../pages/ReachUs/ReachUs";
import Service from "../pages/Service/Service";
import Websitemobile from "../pages/Service/websitemobile";
import Ecom from "../pages/Service/Ecom";
import DigitalMarketingDetails from "../pages/Service/Marketing";
import ITSupportDetails from "../pages/Service/It";
import DigitalDesign from "../pages/Service/digitaldesign";


function App() { 
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<About/>}></Route>
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/reach" element={<ReachUs />} />
        <Route path="/websitemobile" element={<Websitemobile/>} />
        <Route path="/Ecom" element={<Ecom />} />
        <Route path="/marketing" element={<DigitalMarketingDetails />} />
        <Route path="/it" element={<ITSupportDetails />} />
        <Route path="/digitaldesign" element={<DigitalDesign/>} />
        
        
        
        
      </Routes>
      <Footer />
    </>
  );
}

export default App;

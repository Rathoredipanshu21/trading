import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Enquiry from "./Components/Enquiry/Enquiry";
import Trading from "./Components/Trading/Trading";
import Mainservice from "./Components/Services/Mainservice";
import MainHome from "./Components/Home/MainHome";
import MainAbout from "./Components/About/MainAbout";
import LearnPage from "./pages/LearnPage";
import Blogs from "./pages/Blogs";
import BlogDetails from "./pages/BlogDetails";
import Admin from "./pages/Admin";
import Dashboard from "./Components/Admin/Dashboard";
import TradeGrid from "./Components/TradeGrid";
import TradeForm from "./Components/TradeForm";
import LearnAdmin from "./pages/LearnAdmin";
import DashMain from "./Components/Admin/DashMain";

function MainLayout() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainHome />} />
        <Route path="/about" element={<MainAbout />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/enquiry" element={<Enquiry />} />
        <Route path="/trading" element={<Trading />} />
        <Route path="/services" element={<Mainservice />} />
        <Route path="/learn-page" element={<LearnPage />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/trades" element={<TradeGrid />} />

        
        

      </Routes>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>


        <Route path="/*" element={<MainLayout />} />
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/tradeAdd" element={<TradeForm />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/learn-admin" element={<LearnAdmin/>} />
        <Route path="/dashAdm" element={<DashMain/>} />

        
      </Routes>
    </Router>
  );
}

export default App;



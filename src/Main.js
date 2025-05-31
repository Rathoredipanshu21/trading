import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Enquiry from './Components/Enquiry/Enquiry';
import Trading from './Components/Trading/Trading';
import Mainservice from './Components/Services/Mainservice';
import MainHome from './Components/Home/MainHome';
import MainAbout from './Components/About/MainAbout';
import Learn from './Components/Learn/Learn';
import Dashboard from './Components/Admin/Dashboard';
import Admin from './pages/Admin';
import Blogs from './pages/Blogs';
import LearnAdmin from './pages/LearnAdmin';
import LearnPage from './pages/LearnPage';
import BlogDetails from './pages/BlogDetails';


function Main() {
    return (
        <Router>
            <div>
                <Navbar />
              
                <Routes>
                    <Route path="/" element={<MainHome />} />
                    <Route path="/about" element={<MainAbout />} />
                    <Route path="/blogs" element={<Blogs />} />
                    <Route path="/enquiry" element={<Enquiry />} />
                    <Route path="/trading" element={<Trading />} />
                    <Route path="/services" element={<Mainservice />} />
                    <Route path="/admin" element={<Admin />} />
                    <Route path="/learn-page" element={<LearnPage />} />
                    <Route path="/learn-admin" element={<LearnAdmin />} />
                    <Route path="/blog/:id" element={<BlogDetails />} />

                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default Main;

import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home.jsx'
import Footer from './Components/Footer/Footer'
import Blog from './Components/Blog/index'
import Enquiry from './Components/Enquiry/Enquiry.jsx'
import Trading from './Components/Trading/Trading.jsx'

const App = () => {
  return (
    <Router>
      <div>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/enquiry" element={<Enquiry/>} />
          <Route path="/trading" element={<Trading/>} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  )
}

export default App
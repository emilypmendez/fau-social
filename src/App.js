
import './App.css';

import React from "react"
import MouseParticles from "react-mouse-particles"
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from "./components/Home"
import Authors from "./components/Authors"
import Navbar from "./components/Navbar"
import Activities from "./components/Activities"
import SuggestionBox from "./components/SuggestionBox"
import Footer from "./components/Footer"

function App() {

  return (
    <>
    <Router>
    <div className=''>
      <MouseParticles g={2} color="random" cull="col,image-wrapper"/>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/authors" element={<Authors/>}/>
        <Route path="/activities" element={<Activities />}/>
        <Route path="/suggestions" element={<SuggestionBox/>}/>
      </Routes>

      <div className="footer">
        <Footer />
      </div>

    </div>
    </Router>

    </>
  );
}

export default App;

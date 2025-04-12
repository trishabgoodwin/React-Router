import { useState } from 'react'
import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import Blue from './Components/Blue';
import Red from './Components/Red';
import Home from './Components/Home';
import Green from './Components/Green';
import Purple from './Components/Purple';
import Footer from './Components/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div id="container">
      <div id="navbar">
        <nav>
          <Link to="/">Home  </Link>
          <Link to="/blue">Blue  </Link>
          <Link to="/red">Red  </Link>
          <Link to="/green">Green  </Link>
          <Link to="/purple">Purple  </Link>
        </nav>
      </div>
      <div id="main-section">
        <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/blue" element={<Blue />} />
         <Route path="/red" element={<Red />} />
         <Route path="/green" element={<Green />} />
         <Route path="/purple" element={<Purple />} />
        </Routes>
      </div>
      <div>
        <Footer />
      </div>
    </div>
    </>
  )
}

export default App

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  return (
    <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Hero/>} />
      {/* <Route path="/about" element= {<About/>}/> */}
      {/* <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} /> */}
    </Routes>
  </Router>
  );
}

export default App;

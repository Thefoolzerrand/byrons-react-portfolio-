import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer.jsx';
import AboutMe from './Pages/About_Me.jsx';
import Portfolio from './Pages/portfolio.jsx';
import Contact from './Pages/Contacts.jsx';
import NavBar from './components/NavBar.jsx';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App

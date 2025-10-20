import './App.css'
import "./styles/settings.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home/Home"
import Footer from './components/Footer/Footer'
import Contact from "./pages/Contact/Contact"
import Gallery from './pages/Gallery/Gallery'
import Team from './pages/Team/Team'

function App() {


  return (
    <>
      <Router>
      <div className="flex flex-col min-h-screen bg-[#0E0E0E] text-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/our-team" element={<Team />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
    </>
  )
}

export default App

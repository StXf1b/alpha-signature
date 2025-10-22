import './App.css'
import "./styles/settings.css"
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home/Home"
import Footer from './components/Footer/Footer'
import Contact from "./pages/Contact/Contact"
import Gallery from './pages/Gallery/Gallery'
import Team from './pages/Team/Team'
import Services from "./pages/Services/Services"
import Academy from './pages/Academy/Academy';
import Careers from './pages/Careers/Careers';


function App() {
  const location = useLocation();

  return (
    <>
      <div className="flex flex-col min-h-screen bg-[#0E0E0E] text-white">
        <Navbar />
        <AnimatePresence mode="wait">
        <main className="flex-grow">
          <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/our-team" element={<Team />} />
              <Route path='/services' element={<Services />} />
              <Route path='/academy' element={<Academy />} />
              <Route path='/careers' element={<Careers />} />
          </Routes>
        </main>
        </AnimatePresence>
        <Footer />
      </div>
    </>
  )
}

export default App

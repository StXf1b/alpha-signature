import './App.css'
import "./styles/settings.css"
import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Review from "./pages/Review"
import OurValues from './pages/OurValues'
import Footer from './pages/Footer'
import FeaturedServices from "./pages/FeaturedServices"
function App() {


  return (
    <>
      <Navbar />
      <Home />
      <About />
      <OurValues />
      <FeaturedServices />
      <Review />
      <Footer />
    </>
  )
}

export default App

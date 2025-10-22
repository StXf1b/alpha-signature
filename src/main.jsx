import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"
import { BrowserRouter as Router, } from "react-router-dom";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
        <App />
      <Analytics />
      <SpeedInsights />
    </Router>
  </StrictMode>,
)


import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home.jsx'
import About from './components/pages/About.jsx'
import Services from './components/pages/Services.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/Services" element={<Services />} />
      </Routes>
    </BrowserRouter>
  )
}

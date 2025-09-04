import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Home from './pages/Home'
import Information from './pages/Information'
import Technologies from './pages/Technologies'

function App()  {
  return (
    <div className="min-h-screen bg-gray-50">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/information" element={<Information />} />
        <Route path="/technologies" element={<Technologies />} />
      </Routes>
    </div>
  )
}

export default App

import { Routes, Route } from 'react-router-dom'
import { CountryProvider } from './context/CountryProvider'
import LandingPage from './pages/LandingPage'
import Home from './pages/Home'
import Technologies from './pages/Technologies'
import Activities from './pages/Activities'
import ProtectedRoute from './components/ProtectedRoute'
import Information from './pages/Information'

function App() {
  return (
    <CountryProvider>
      <Routes>
        {/* Ruta pública - Landing Page */}
        <Route path="/" element={<LandingPage />} />
        
        {/* Rutas protegidas - Requieren país seleccionado */}
        <Route path="/home" element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        } />
        <Route path="/technologies" element={
          <ProtectedRoute>
            <Technologies />
          </ProtectedRoute>
        } />
        <Route path="/activities" element={
          <ProtectedRoute>
            <Activities />
          </ProtectedRoute>
        } />
        <Route path="/information" element={
          <ProtectedRoute>
            <Information />
          </ProtectedRoute>
        } />
      </Routes>
    </CountryProvider>
  )
}

export default App

import { CountryProvider } from './context/CountryProvider'
import LandingPage from './pages/LandingPage'

function App() {
  return (
    <CountryProvider>
        <LandingPage />
    </CountryProvider>
  )
}

export default App

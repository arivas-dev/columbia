import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCountry } from '../hooks/useCountry'

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate()
  const { selectedCountry } = useCountry()

  useEffect(() => {
    if (!selectedCountry) {
      navigate('/')
    }
  }, [selectedCountry, navigate])

  // Si no hay país seleccionado, no renderizar nada (se redirige)
  if (!selectedCountry) {
    return null
  }

  return children
}

export default ProtectedRoute 
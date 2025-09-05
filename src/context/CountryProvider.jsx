import { useState } from 'react'
import { CountryContext } from './CountryContext'

export const CountryProvider = ({ children }) => {
  const [selectedCountry, setSelectedCountry] = useState(null)

  const selectCountry = (country) => {
    setSelectedCountry(country)
  }

  const clearCountry = () => {
    setSelectedCountry(null)
  }

  return (
    <CountryContext.Provider value={{
      selectedCountry,
      selectCountry,
      clearCountry
    }}>
      {children}
    </CountryContext.Provider>
  )
}
import { createContext, useContext, useState } from 'react'

const BrandContext = createContext()

export const BrandProvider = ({ children }) => {
  const [selectedBrand, setSelectedBrand] = useState(null)

  const selectBrand = (brandName) => {
    setSelectedBrand(brandName)
    // Clear selection after 5 seconds to show all brands again
    setTimeout(() => {
      setSelectedBrand(null)
    }, 5000)
  }

  const clearBrand = () => {
    setSelectedBrand(null)
  }

  return (
    <BrandContext.Provider value={{ selectedBrand, selectBrand, clearBrand }}>
      {children}
    </BrandContext.Provider>
  )
}

export const useBrand = () => {
  const context = useContext(BrandContext)
  if (!context) {
    throw new Error('useBrand must be used within a BrandProvider')
  }
  return context
}

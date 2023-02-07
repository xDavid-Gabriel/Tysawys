import React, { useState, useContext } from 'react'
import { SEOContext } from './'

const SEO_INITIAL_STATE = {
  seo: true,
}

export const SEOProvider = ({ children }) => {
  const [seo, setSeo] = useState(SEO_INITIAL_STATE)

  return (
    <SEOContext.Provider
      value={{
        ...seo,
      }}
    >
      {children}
    </SEOContext.Provider>
  )
}

export const useStateSeoContext = () => useContext(SEOContext)

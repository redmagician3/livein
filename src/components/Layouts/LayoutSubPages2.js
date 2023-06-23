import React from 'react'
import Header from '../Header'
import FooterSubPages2 from '../FooterSubPages2'

function LayoutSubPages({ children }) {
  return (
    <>
      <Header />
      <div>{children}</div>
      <FooterSubPages2 />
    </>
  )
}

export default LayoutSubPages

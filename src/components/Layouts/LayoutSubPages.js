import React from 'react'
import Header from '../Header'
import FooterSubPages from '../FooterSubPages'
function LayoutSubPages({ children }) {
  return (
    <>
      <Header />
      <div>{children}</div>
      <FooterSubPages />
    </>
  )
}

export default LayoutSubPages

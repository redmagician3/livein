import React from 'react'
import { useState } from 'react'
import classes from './Header.module.css'

import Link from 'next/link'

function Header() {
  const [isHovered, setIsHovered] = useState(false)

  const mouseEnterHandler = (e) => {
    setIsHovered(true)
  }

  const mouseLeaveHandler = (e) => {
    setIsHovered(false)
  }
  return (
    <nav className={classes.headerContainer}>
      <Link href='/projekti'>projekti</Link>
      <p
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        className={classes.pointer}
      >
        storitve{' '}
        {isHovered && (
          <div className={classes.subNavigation}>
            <Link href='/storitve/projektiranje'>projektiranje</Link>
            <Link href='/storitve/notranje-opremljanje'>
              notranje opremljanje
            </Link>
          </div>
        )}
      </p>
      <Link href='/'>
        <img src='/liveinLogo.svg'></img>
      </Link>
      <Link href='/zgodba'>zgodba</Link>
      <Link href='/kontakt'>kontakt</Link>
    </nav>
  )
}

export default Header

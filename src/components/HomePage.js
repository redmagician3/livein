import React from 'react'
import classes from './HomePage.module.css'
import { useState } from 'react'

import Link from 'next/link'

function HomePage() {
  const [isHovered, setIsHovered] = useState(false)
  const mouseEnterHandler = (e) => {
    setIsHovered(true)
  }

  const mouseLeaveHandler = (e) => {
    setIsHovered(false)
  }

  return (
    <div className={classes.homePageContainer}>
      <div className={classes.contentContainer}>
        <div>
          <Link href='#'>
            <img src='/liveinLogo.svg'></img>
          </Link>
        </div>
        <div className={classes.linksContainer}>
          <Link href='/projekti'>projekti</Link>
          <p
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className={classes.pointer}
          >
            storitve{' '}
            {isHovered && (
              <div className={classes.subNavigation}>
                <Link href='storitve/projektiranje'>projektiranje</Link>
                <Link href='storitve/notranje-opremljanje'>
                  notranje opremljanje
                </Link>
              </div>
            )}
          </p>
          <Link href='/zgodba'>zgodba</Link>
          <Link href='/kontakt'>kontakt</Link>
        </div>
      </div>
    </div>
  )
}

export default HomePage

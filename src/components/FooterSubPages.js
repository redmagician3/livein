import React from 'react'
import classes from './FooterSubPages.module.css'

import Link from 'next/link'

function FooterSubPages() {
  return (
    <footer className={classes.footerContainer}>
      <Link href='#'>
        <img src='/instagram.svg'></img>
      </Link>

      <Link href='#'>
        <img src='/facebook.svg'></img>
      </Link>

      <Link href='#'>
        <img src='/pinterest.svg'></img>
      </Link>

      <Link href='#'>
        <img src='/mail.svg'></img>
      </Link>
    </footer>
  )
}

export default FooterSubPages

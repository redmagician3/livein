import React from 'react'
import LayoutSubPages from '@/components/Layouts/LayoutSubPages'
import classes from './index.module.css'

import Link from 'next/link'
import { useState } from 'react'

import images from './images'

function index() {
  const [isCategoryHisaActive, setIsCategoryHisaActive] = useState(true)
  const [isCategoryStanovanjeActive, setIsCategoryStanovanjeActive] =
    useState(false)
  const [isCategoryOstaloActive, setIsCategoryOstaloActive] = useState(false)

  const [projectId, setProjectId] = useState(0)

  const hisaClickHandler = (e) => {
    setIsCategoryHisaActive(true)
    setIsCategoryStanovanjeActive(false)
    setIsCategoryOstaloActive(false)
  }

  const stanovanjaClickHandler = (e) => {
    setIsCategoryStanovanjeActive(true)
    setIsCategoryHisaActive(false)
    setIsCategoryOstaloActive(false)
  }

  const ostaloClickHandler = (e) => {
    setIsCategoryOstaloActive(true)
    setIsCategoryHisaActive(false)
    setIsCategoryStanovanjeActive(false)
  }

  const clickedHisa = isCategoryHisaActive ? classes.clickedHisa : ''
  const clickedStanovanje = isCategoryStanovanjeActive
    ? classes.clickedHisa
    : ''
  const clickedOstalo = isCategoryOstaloActive ? classes.clickedHisa : ''

  const hoverHandler = (e) => {
    if (typeof window !== 'undefined') {
      const projectsContainer = document.querySelector('.projectsContainerr')
      projectsContainer.style.backgroundImage = `url(${images[e.target.id]})`
      projectsContainer.style.backgroundSize = 'cover'
    }
  }

  const clickHandler = (e) => {
    // e.target.id
    setProjectId(e.target.id)
    localStorage.setItem('projectId', e.target.id)
  }

  return (
    <LayoutSubPages>
      <div className={`${classes.projectsContainer} projectsContainerr`}>
        <div className={classes.categoryContainer}>
          <div className={classes.categoryHise} onClick={hisaClickHandler}>
            <img
              className={`${classes.hisa} ${clickedHisa}`}
              src='/hisa.svg'
            ></img>
            <p style={{ opacity: isCategoryHisaActive ? '1' : '0' }}>HIŠE</p>
          </div>

          <div
            className={classes.categoryHise}
            onClick={stanovanjaClickHandler}
          >
            <img
              className={`${classes.hisa} ${clickedStanovanje}`}
              src='/stanovanja.svg'
            ></img>
            <p style={{ opacity: isCategoryStanovanjeActive ? '1' : '0' }}>
              STANOVANJA
            </p>
          </div>

          <div className={classes.categoryHise} onClick={ostaloClickHandler}>
            <img
              className={`${classes.hisa} ${clickedOstalo}`}
              src='/ostalo.svg'
            ></img>
            <p style={{ opacity: isCategoryOstaloActive ? '1' : '0' }}>
              OSTALO
            </p>
          </div>
        </div>

        <div className={classes.projektiHeading}>
          {/* <h1>
            PRO-<br></br>JEKT
          </h1> */}
          <div>
            <h1>P</h1>
            <h1>R</h1>
            <h1>O</h1>
            <h1>-</h1>
          </div>
          <div>
            <h1>J</h1>
            <h1>E</h1>
            <h1>K</h1>
            <h1>T</h1>
          </div>
        </div>

        <div className={classes.numbersContainer}>
          {isCategoryHisaActive && (
            <div className={classes.hisaNumbers}>
              <Link
                href='/projekti/06'
                id='0'
                onMouseEnter={hoverHandler}
                onClick={clickHandler}
              >
                06
              </Link>
              <Link
                href='/projekti/14'
                id='1'
                onMouseEnter={hoverHandler}
                onClick={clickHandler}
              >
                15
              </Link>
              <Link
                href='/projekti/25'
                id='2'
                onMouseEnter={hoverHandler}
                onClick={clickHandler}
              >
                32
              </Link>
              <Link
                href='/projekti/32'
                id='3'
                onMouseEnter={hoverHandler}
                onClick={clickHandler}
              >
                37
              </Link>
              <Link
                href='/projekti/45'
                id='4'
                onMouseEnter={hoverHandler}
                onClick={clickHandler}
              >
                40
              </Link>
              <Link
                href='/projekti/51'
                id='5'
                onMouseEnter={hoverHandler}
                onClick={clickHandler}
              >
                53
              </Link>
            </div>
          )}

          {isCategoryStanovanjeActive && (
            <div className={classes.stanovanjaNumbers}>
              <Link
                href='#'
                id='6'
                onMouseEnter={hoverHandler}
                onClick={clickHandler}
              >
                17
              </Link>
              <Link
                href='#'
                id='7'
                onMouseEnter={hoverHandler}
                onClick={clickHandler}
              >
                18
              </Link>
              <Link
                href='#'
                id='8'
                onMouseEnter={hoverHandler}
                onClick={clickHandler}
              >
                34
              </Link>
              <Link
                href='#'
                id='9'
                onMouseEnter={hoverHandler}
                onClick={clickHandler}
              >
                35
              </Link>
              <Link
                href='#'
                id='10'
                onMouseEnter={hoverHandler}
                onClick={clickHandler}
              >
                42
              </Link>
              <Link
                href='#'
                id='11'
                onMouseEnter={hoverHandler}
                onClick={clickHandler}
              >
                52
              </Link>
            </div>
          )}

          {isCategoryOstaloActive && (
            <div className={classes.ostaloNumbers}>
              <Link
                href='#'
                id='12'
                onMouseEnter={hoverHandler}
                onClick={clickHandler}
              >
                11
              </Link>
              <Link
                href='#'
                id='13'
                onMouseEnter={hoverHandler}
                onClick={clickHandler}
              >
                13
              </Link>
              <Link
                href='#'
                id='14'
                onMouseEnter={hoverHandler}
                onClick={clickHandler}
              >
                14
              </Link>
              <Link
                href='#'
                id='15'
                onMouseEnter={hoverHandler}
                onClick={clickHandler}
              >
                27
              </Link>
              <Link
                href='#'
                id='16'
                onMouseEnter={hoverHandler}
                onClick={clickHandler}
              >
                38
              </Link>
              <Link
                href='#'
                id='17'
                onMouseEnter={hoverHandler}
                onClick={clickHandler}
              >
                51
              </Link>
            </div>
          )}
        </div>
      </div>
    </LayoutSubPages>
  )
}

export default index

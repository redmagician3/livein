import React, { useEffect, useState } from 'react'
import classes from './Project.module.css'

import Image from 'next/image'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

import HomePage from './HomePage'
import FooterSubPages from './FooterSubPages'
import Header from './Header'
import Projekti from '../pages/projekti/index'

function Project({ id, pathname, data }) {
  const [projectId, setProjectId] = useState(0)

  const images = data[projectId].attributes.projectImages.data.map(
    (image, i) => (
      <Image
        src={`https://www.liveinbackend.testslusalke.si${image.attributes.url}`}
        height={2000}
        width={2000}
        alt='images'
      />
    )
  )

  useEffect(() => {
    const projectId = localStorage.getItem('projectId')
    setProjectId(projectId)
  }, [])

  console.log(projectId)

  return (
    <>
      <div className={classes.homePageContainer}>
        <Projekti />
      </div>

      <div className={`${classes.container} ${inter.className}`}>
        <div className={classes.infoContainer}>
          <div className={classes.text}>
            <h1>
              PRO- <br></br> JEKT
            </h1>
            <h1>{data[0].attributes.projectNumber}</h1>
          </div>
          <div className={classes.streetContainer}>
            <p>{data[0].attributes.street}</p>
          </div>

          <div className={classes.projectAddresContainer}>
            <p>{data[0].attributes.m2}</p>
            <p>{data[0].attributes.town}</p>
          </div>
        </div>
        <div className={classes.projectContainer}>{images}</div>
        <div className={classes.transparentContainer}></div>
      </div>
    </>
  )
}

export default Project

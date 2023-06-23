import React from 'react'
import classes from './NasvetiBox.module.css'

import Image from 'next/image'

function NasvetiBox() {
  return (
    <div>
      <div className={classes.nasvetiBox}>
        <div className={classes.imageContainer}>
          <Image src='/project6.webp' width={300} height={300} />
        </div>
        <div className={classes.nasvetiInformationContainer}>
          <p className={classes.nasvetiTtitle}>
            ashdbahs ajsdnaskddn asdnask sad asd adasd
          </p>
          <p className={classes.nasvetiDescription}>
            ashdbahs ajsdnaskddn asdnask sad asd adasd adasda asd ad
            asdasdsdsadsa
          </p>
        </div>
      </div>
    </div>
  )
}

export default NasvetiBox

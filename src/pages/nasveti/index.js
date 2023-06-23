import React from 'react'
import classes from './index.module.css'
import LayoutSubPages2 from '@/components/Layouts/LayoutSubPages2'
import Image from 'next/image'

import NasvetiBox from '@/components/NasvetiBox'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

function projektiranje() {
  const [sliderRef] = useKeenSlider({
    loop: true,
    rtl: true,
    // slides: {
    //   perView: 3,
    //   spacing: 100,
    // },
    breakpoints: {
      '(min-width: 600px)': {
        slides: { perView: 1, spacing: 5 },
      },
      '(min-width: 1000px)': {
        slides: { perView: 3, spacing: 20 },
      },
    },
  })

  return (
    <LayoutSubPages2>
      <div className={`${classes.zgodbaContainer} ${inter.className}`}>
        <div className={classes.zgodbaBackgroundImage}>
          <div className={classes.titleIconContainer}>
            <img src='/nasveti.svg'></img>
            <h1>NASVETI</h1>
          </div>
          <h1 className={classes.subHeading}>KO STENA NI SAMO STENA</h1>
        </div>

        <div className={classes.textContainer}>
          <p>
            Ko se sprašujemo kaj bi v našem stanovanju lahko še spremenili
            velikokrat pozabimo na stene. Te nam omogočajo, da v sebi zbudimo
            svojo umetniško plat. Ne glede na to ali bomo stene le prepleskali
            ali jih bomo kako drugače popestrili, bo izbira materialov in stila
            popestrila celo sobo ter dala dodano vrednost vašemu stanovanju.
            Seveda moramo biti pozorni na to, da ima vsaka soba svoj namen, zato
            bodimo tu še toliko bolj pozorni, da bo izbrani stil sovpadal s
            funkcijo.
          </p>
        </div>

        <div className={classes.projektiranjeContainer}>
          <div ref={sliderRef} className='keen-slider'>
            <div className='keen-slider__slide number-slide11'>
              <NasvetiBox />
            </div>
            <div className='keen-slider__slide number-slide22'>
              <NasvetiBox />
            </div>
            <div className='keen-slider__slide number-slide33'>
              <NasvetiBox />
            </div>
            <div className='keen-slider__slide number-slide4'>4</div>
            <div className='keen-slider__slide number-slide5'>5</div>
            <div className='keen-slider__slide number-slide6'>6</div>
          </div>
        </div>
      </div>
    </LayoutSubPages2>
  )
}

export default projektiranje

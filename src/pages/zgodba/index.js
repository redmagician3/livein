import React from 'react'
import classes from './index.module.css'
import LayoutSubPages from '@/components/Layouts/LayoutSubPages'
import Image from 'next/image'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

function index() {
  return (
    <LayoutSubPages>
      <div className={`${classes.zgodbaContainer} ${inter.className}`}>
        <div className={classes.zgodbaBackgroundImage}>
          <div className={classes.titleIconContainer}>
            <img src='/zgodbai.svg'></img>
            <h1>ZGODBA</h1>
          </div>
        </div>

        <div className={classes.textContainer}>
          <p>
            Dizajn studio Live In sta leta 2010 ustanovila notranja in
            industrijska oblikovalca Adam Adamič in David More.
          </p>
          <p>
            “Spoznala sva se ob vstopu na Fakulteto za arhitekturo v Ljubljani,
            kjer sva bila tudi sošolca. Takoj sva se povezala in začela
            ustvarjati najine prve projekte kar na podstrešju Adamove hiše.
            Kmalu sva dobila tudi prve stranke. V delu sva neizmerno uživala,
            tako da sva na študij za nekaj trenutkov malce pozabila. Študij sva
            seveda kasneje nadaljevala in zaključila…”
          </p>
        </div>
        <div className={classes.ekipaContainer}>
          <h1>EKIPA</h1>
          <p>
            Smo ekipa notranjih oblikovalcev in arhitektov, ki se prilagajamo
            trenutnim potrebam trga ter sledimo trendom na področju inovacij in
            sodobne notranje opreme, predvsem pa smo ponosni, da se znamo
            prilagoditi še tako zahtevnim željam naših strank.
          </p>
          <Image src='/ekipa.webp' width={2000} height={1000} />
        </div>
      </div>
    </LayoutSubPages>
  )
}

export default index

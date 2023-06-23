import React from 'react'
import classes from './index.module.css'
import LayoutSubPages2 from '@/components/Layouts/LayoutSubPages2'
import Image from 'next/image'
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
        slides: { perView: 3, spacing: 100 },
      },
    },
  })

  return (
    <LayoutSubPages2>
      <div className={`${classes.zgodbaContainer} ${inter.className}`}>
        <div className={classes.zgodbaBackgroundImage}>
          <div className={classes.titleIconContainer}>
            <img src='/storitve.svg'></img>
            <h1>STORITVE</h1>
          </div>
          <h1 className={classes.subHeading}>PROJEKTIRANJE</h1>
        </div>

        <div className={classes.textContainer}>
          <p>
            Projektiranje je postopek, ki zahteva kar nekaj organiziranosti,
            lotimo pa se ga po korakih. Najpomembneje je, da se s stranko dobro
            spoznamo, poznamo njene želje in ideje, življenjski stil in slog,
            saj se bomo na ta način najlažje lotili dela v pravo smer. Mi pa vam
            naš način dela in postopek tudi podrobno predstavimo. Sledi pregled
            prostora, prve idejne zasnove, 3D izris, izbira barv in materialov,
            ter na koncu pripravimo idejno mapo. Seveda smo ves čas v kontaktu
            stranko, da se kar čim bolj približamo njenim željam oziroma ji
            predstavimo optimalne rešitve z naše strani.
          </p>
        </div>

        <div className={classes.projektiranjeContainer}>
          <div ref={sliderRef} className='keen-slider'>
            <div className='keen-slider__slide number-slide1'>
              <div className={classes.sliderBox}>
                <div className={classes.slideTitle}>
                  <p>01</p>
                  <p>Prvi sestanek</p>
                </div>
                <div className={classes.sliderDescription}>
                  To bo priložnost, da vam natančneje predstavimo naš način dela
                  in možnosti sodelovanja. Od vas bomo pridobili vitalne
                  informacije, ki jih potrebujemo za natančno sestavo ponudbe za
                  projektiranje.
                </div>
              </div>
            </div>
            <div className='keen-slider__slide number-slide2'>
              <div className={classes.sliderBox}>
                <div className={classes.slideTitle}>
                  <p>02</p>
                  <p>Pregled prostora</p>
                </div>
                <div className={classes.sliderDescription}>
                  V tej fazi pregledamo vašo dokumentacijo, če je ta na voljo. V
                  kolikor se zgodi, da ni na voljo, se lotimo ogleda skic,
                  idejnih predlogov, pregleda obstoječega stanja, posnetkov
                  tlorisa, obstoječih prostorov in vam nato podamo okvirno ceno.
                  Pri bolj kompleksnih projektih se odločimo za ogled samega
                  objekta.
                </div>
              </div>
            </div>
            <div className='keen-slider__slide number-slide3'>
              {' '}
              <div className={classes.sliderBox}>
                <div className={classes.slideTitle}>
                  <p>03</p>
                  <p>Idejne zasnove</p>
                </div>
                <div className={classes.sliderDescription}>
                  Na podlagi tlorisa in posnetka obstoječega stanja ali načrta
                  za vas pripravimo kar največ opcij postavitev pohištvenih
                  elementov in pregradnih sten v merilu 1:50 ali 1:25. To
                  pomeni, da ob ogledu idejne zasnove vidite dizajn v prostoru v
                  pravi velikosti.
                </div>
              </div>
            </div>
            <div className='keen-slider__slide number-slide4'>4</div>
            <div className='keen-slider__slide number-slide5'>5</div>
            <div className='keen-slider__slide number-slide6'>6</div>
          </div>
        </div>

        <div className={classes.textContainerAfterSlide}>
          <p>
            Kvalitetno izvedeno projektiranje = prenova & vključevanje vaših
            želja v končno podobo interierja
          </p>
        </div>

        <div className={classes.karakteristikeContainer}>
          <div className={classes.iskusenjaContainer}>
            <p>12</p>
            <p>Let izkušenj</p>
          </div>

          <div className={classes.iskusenjaContainer}>
            <p>250</p>
            <p>Končanih projektov</p>
          </div>

          <div className={classes.iskusenjaContainer}>
            <p>8</p>
            <p>Končanih projektov</p>
          </div>
        </div>
      </div>
    </LayoutSubPages2>
  )
}

export default projektiranje

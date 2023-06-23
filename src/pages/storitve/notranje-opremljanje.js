import React from 'react'
import classes from './index.module.css'
import LayoutSubPages2 from '@/components/Layouts/LayoutSubPages2'
import Image from 'next/image'

import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

function notranjeOpremljanje() {
  return (
    <LayoutSubPages2>
      <div className={`${classes.zgodbaContainer} ${inter.className}`}>
        <div className={classes.zgodbaBackgroundImage}>
          <div className={classes.titleIconContainer}>
            <img src='/storitve.svg'></img>
            <h1>STORITVE</h1>
          </div>
          <h1 className={classes.subHeading}>NOTRANJE OPREMLJANJE</h1>
        </div>

        <div className={classes.textContainer}>
          <p>
            Notranje opremljanje na ključ poteka z izvajalci, s katerimi
            sodelujemo že dolga leta in z opremljanjem pohištva, ki jo s stranko
            skupaj izberemo glede na budžet, želje. Glede na vaše potrebe in
            kompleksnost projekta izberemo izvajalce, ki jim imamo v našem
            repertoarju ali pa izbiro le teh prepustimo vam. Nato se ustvari
            okvirna časovnica po kateri se začne izvajati projekt v naši režiji.
          </p>
        </div>
        <div className={classes.boxesContainer}>
          <div className={classes.box}>
            <h3>
              Individualen<br></br> pristop
            </h3>
            <p>
              Vsak projekt je zgodba zase in vsak projekt ima svojo zgodbo. V
              LiveIn studiu ste na prvem mestu vi in vaše želje. Naš cilj je
              zaključiti projekt, ki vam je pisan na kožo in ki na sebi nosi
              podobo vaših prioritet. Zakaj poudarjamo individualni pristop? Ker
              poskrbimo, da ste slišani na vsakem koraku projekta in da se pri
              ustvarjanju zgodbe vašega projekta počutite kar najbolje.
            </p>
          </div>
          <div className={classes.box}>
            <h3>
              {' '}
              Kakovostna <br></br>oprema
            </h3>
            <p>
              Izbira prave barve in kosov pohištva ter ključnih podrobnosti se
              velikokrat pokaže bolj zahtevna, kot ste sprva mislili. Zato smo
              tu mi, saj vam z našim dolgoletnim znanjem in vami kot našo
              prioriteto lahko svetujemo točno kje je najbolje da prihranite in
              za katere zadeve sem vam bo izplačalo, da za njih odštejete višji
              znesek. Končna odločitev pa je vsekakor vaša. V kolikor si želite
              le svetovanja ali pa vse od svetovanja do opremljanja, smo za vas
              na voljo v LiveIn studiu.
            </p>
          </div>
          <div className={classes.box}>
            <h3>
              {' '}
              Od ideje <br></br>do izvedbe
            </h3>
            <p>
              Po prejemu vašega povpraševanja, z vami izvedemo informativni
              sestanek, na katerem vas seznanimo z vsemi možnostmi sodelovanja.
              Ta se deli na samo projektiranje in na izvedbeno fazo, ki pa jo
              sestavlja več opcij. Izvedbeno fazo smo pripravljeni izvesti z
              našimi izvajalci ali z izvajalci po vaši želji. Vemo, da je v
              Sloveniji ogromno strokovnjakov na tem področju in z veseljem se
              lotimo sodelovanja z njimi ali pa vodenja le teh, da skupaj
              dosežemo kakovosten rezultat.
            </p>
          </div>
        </div>
        <div className={classes.lastTextNotranje}>
          <p>UČINKOVIT IN ENOSTAVEN NAČIN ZA PRENOVLJENO STANOVANJE</p>
        </div>
      </div>
    </LayoutSubPages2>
  )
}

export default notranjeOpremljanje

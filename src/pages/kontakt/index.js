import React from 'react'
import classes from './index.module.css'
import LayoutSubPages2 from '@/components/Layouts/LayoutSubPages2'
import Image from 'next/image'

import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'

import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

function kontakt() {
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [propertyType, setpropertyType] = useState('')
  const [m2, setM2] = useState('')
  const [message, setMessage] = useState('')

  const nameHandler = (e) => {
    setName(e.target.value)
  }
  const surnameHandler = (e) => {
    setSurname(e.target.value)
  }

  const phoneHandler = (e) => {
    setPhone(e.target.value)
  }

  const emailHandler = (e) => {
    setEmail(e.target.value)
  }

  const propertyTypeHandler = (e) => {
    setpropertyType(e.target.value)
  }
  const m2Handler = (e) => {
    setM2(e.target.value)
  }

  const messageHandler = (e) => {
    setMessage(e.target.value)
  }

  const sendHandler = async (e) => {
    e.preventDefault()
    const sendMessage = {
      name: name,
      email: email,
      phone: phone,
      surname: surname,
      propertyType: propertyType,
      m2: m2,
      message: message,
    }

    if (
      sendMessage.name !== '' &&
      sendMessage.email !== '' &&
      sendMessage.phone !== '' &&
      sendMessage.surname !== '' &&
      sendMessage.propertyType !== '' &&
      sendMessage.m2 !== '' &&
      sendMessage.message !== ''
    ) {
      const req = await fetch('/api/contact', {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'post',
        body: JSON.stringify(sendMessage),
      })

      const res = await req.json()

      console.log(res.status)

      if (res) {
        toast.success('Sporočilo je uspešno poslano!')
        setEmail('')
        setPhone('')
        setName('')
        setSurname('')
        setpropertyType('')
        setM2('')
        setMessage('')
      } else {
        toast.error('Prišlo je do napake.')
      }
    } else {
      // if (
      //   (sendMessage.website !== '' && sendMessage.mail !== '',
      //   sendMessage.tel !== '')
      // ) {
      //   toast.error('Soglasanje je obvezno')
      // } else {
      toast.error('Prazna polja!')
      // }
    }
  }

  return (
    <LayoutSubPages2>
      <Toaster />

      <div className={`${classes.konaktContainer} ${inter.className}`}>
        <div className={classes.konaktBackgroundImage}>
          <div className={classes.titleIconContainer}>
            <img src='/kontakt.svg'></img>
            <h1>KONTAKT</h1>
          </div>
          <h1 className={classes.subHeading}> STOPITE V STIK</h1>
        </div>

        <div className={classes.contactInfoContainer}>
          <div className={classes.infoContainer}>
            <div className={classes.naslovContainer}>
              <p className={classes.box}>NASLOV</p>
              <p>info@livein.si</p>
              <p>
                Celovška cesta 32,<br></br> 1000 Ljubljana, Slovenija
              </p>
            </div>
            <div className={classes.phoneContainer}>
              <p className={classes.box}>TELEFON</p>
              <p>
                ADAM ADAMIČ dipl. diz.<br></br> +386 (0)51 416 493
              </p>
              <p>
                DAVID MORE dipl. diz.<br></br> +386 (0)40 619 665
              </p>
            </div>
          </div>

          <form onSubmit={sendHandler} className={classes.formContainer}>
            <div className={classes.imePriimekContainer}>
              <input
                type='text'
                placeholder='IME'
                onChange={nameHandler}
                value={name}
              ></input>
              <input
                type='text'
                placeholder='PRIIMEK'
                onChange={surnameHandler}
                value={surname}
              ></input>
            </div>
            <div className={classes.phoneEmailContainer}>
              <input
                type='text'
                placeholder='TELEFON'
                onChange={phoneHandler}
                value={phone}
              ></input>
              <input
                type='e-mail'
                placeholder='EMAIL'
                onChange={emailHandler}
                value={email}
              ></input>
            </div>
            <div className={classes.tipProstora}>
              <input
                type='text'
                placeholder='TIP PROSTORA'
                onChange={propertyTypeHandler}
                value={propertyType}
              ></input>
            </div>
            <div className={classes.tipProstora}>
              <input
                type='text'
                placeholder='KVADRATURA'
                onChange={m2Handler}
                value={m2}
              ></input>
            </div>
            <div className={classes.textarea}>
              <textarea
                placeholder='SPOROČILO'
                onChange={messageHandler}
                value={message}
              ></textarea>
            </div>
            <button>POŠLJI</button>
          </form>
        </div>

        <div style={{ width: '100%' }}>
          <iframe
            width='100%'
            height='600'
            frameBorder='0'
            scrolling='no'
            marginHeight='0'
            marginWidth='0'
            src='https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Celov%C5%A1ka%20cesta%2032,%201000%20Ljubljana,%20Slovenija+(My%20Business%20Name)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'
          ></iframe>
        </div>
      </div>
    </LayoutSubPages2>
  )
}

export default kontakt

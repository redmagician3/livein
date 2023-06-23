const nodemailer = require('nodemailer')

const main = async (message) => {
  const htmlMessage = `<h2>IME: ${message.name}</h2><br>
                         <h2>PRIIMEK: ${message.surname}</h2>
                         <h2>TELEFON: ${message.phone}</h2>
                         <h2>EMAIL: ${message.email}</h2>
                         <h2>TIP PROSTORA: ${message.propertyType}</h2>
                         <h2>KVADRATURA: ${message.m2}</h2>
                         <h2>SPOROČILO: ${message.message}</h2>`

  const transporter = nodemailer.createTransport({
    host: 'mail.dig-it.si',
    port: 465,
    secure: true,
    auth: {
      user: 'david@dig-it.si',
      pass: 'pO=KW{=8KX6)',
    },
  })

  const info = await transporter.sendMail({
    from: 'LiveIn Spletna Stran <niksa@dig-it.si>',
    to: 'niksa@dig-it.si',
    subject: 'Novo sporočilo',
    html: htmlMessage,
  })

  return info.messageId
}

export default async function mailSend(req, res) {
  const id = await main(req.body).catch((e) => console.log(e))
  if (id) {
    res.status(200).json(id)
  } else {
    res.status(404).json(err)
  }
}

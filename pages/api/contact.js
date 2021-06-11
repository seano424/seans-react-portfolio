const express = require('express')
const nodemailer = require('nodemailer')
const cors = require('cors')
const app = express()
require('dotenv').config()

app.use(express.json())
app.use(cors())

export default function (req, res) {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: process.env.NEXT_PUBLIC_VERCEL_ENV_EMAIL,
      pass: process.env.NEXT_PUBLIC_VERCEL_ENV_WORD,
      clientId: process.env.NEXT_PUBLIC_VERCEL_ENV_OAUTH_CLIENTID,
      clientSecret: process.env.NEXT_PUBLIC_VERCEL_ENV_OAUTH_CLIENT_SECRET,
      refreshToken: process.env.NEXT_PUBLIC_VERCEL_ENV_OAUTH_REFRESH_TOKEN,
    },
  })

  transporter.verify((err, success) => {
    err
      ? console.log(err)
      : console.log(`=== Server is ready to take messages: ${success} ===`)
  })

  let mailOptions = {
    from: `${req.body.mailerState.email}`,
    to: process.env.NEXT_PUBLIC_VERCEL_ENV_EMAIL,
    subject: `Message from: ${req.body.mailerState.email}`,
    text: `${req.body.mailerState.message}`,
  }

  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      res.json({
        status: 'fail',
      })
    } else {
      console.log('== Message Sent ==')
      res.json({
        status: 'success',
      })
    }
  })

  res.status(200)
}

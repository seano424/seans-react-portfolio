import { useState } from 'react'
import Head from 'next/head'

export default function Home() {
  const [mailerState, setMailerState] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleStateChange = (e) => {
    setMailerState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const submitEmail = (e) => {
    e.preventDefault()
    console.log('Sending')
    console.log(mailerState)
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ mailerState }),
    })
      .then((res) => res.json())
      .then(async (res) => {
        const resData = await res
        console.log(resData)
        if (resData.status === 'success') {
          alert('Message Sent')
        } else if (resData.status === 'fail') {
          alert('Message failed to send')
        }
      })
      .then(() => {
        setMailerState({
          email: '',
          name: '',
          message: '',
        })
      })
  }

  return (
    <main>
      <Head>
        <title>Nodemailer Trial</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <form
        onSubmit={submitEmail}
        style={{
          display: 'flex',
          height: '100vh',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <fieldset
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            width: '50%',
          }}
        >
          <legend>React NodeMailer Contact Form</legend>
          <input
            placeholder="Name"
            onChange={handleStateChange}
            name="name"
            value={mailerState.name}
          />
          <input
            placeholder="Email"
            onChange={handleStateChange}
            name="email"
            value={mailerState.email}
          />
          <textarea
            style={{ minHeight: '200px' }}
            placeholder="Message"
            onChange={handleStateChange}
            name="message"
            value={mailerState.message}
          />
          <button>Send Message</button>
        </fieldset>
      </form>
    </main>
  )
}

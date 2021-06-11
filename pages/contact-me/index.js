import { useState } from 'react'
import Head from 'next/head'
import Layout from '../../components/Layout'

export default function Home() {
  const [statusMessage, setStatusMessage] = useState(
    'Sweet! Your message has been sent successfully.'
  )
  const [isNotified, setIsNotified] = useState(false)
  const [isError, setIsError] = useState(false)

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
          setStatusMessage('Sweet! Your message has been sent successfully.')
          setIsNotified(true)
          setTimeout(() => {
            setIsNotified(false)
          }, 3000)
        } else if (resData.status === 'fail') {
          setStatusMessage('Hmm something seems to have gone wrong 🤔 🦭')
          setIsNotified(true)
          setIsError(true)
          setTimeout(() => {
            setIsError(false)
            setIsNotified(false)
          }, 3000)
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

  const inputStyles =
    'border-2 border-gray-100 dark:border-white rounded dark:text-white py-1 px-2 w-full focus:outline-none focus:border-gray-200 dark:bg-dark'

  return (
    <>
      <Head>
        <title>Contact Sean!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <section className=" w-5/12">
          <article className="flex flex-col justify-center h-20 mt-8 mb-2">
            <h1
              className={`text-5xl dark:text-white font-bold transition-all duration-200 ease-linear ${
                isNotified && 'opacity-0'
              }`}
            >
              Get in touch!
            </h1>
            <p
              className={`text-5xl relative -top-8 font-bold opacity-0 transition-all duration-200 ease-linear ${
                isNotified ? 'opacity-100 block' : 'hidden'
              } ${isError && 'bg-red-600 text-white'}`}
            >
              {statusMessage}
            </p>
          </article>
          <article>
            <form
              className="flex w-full flex-col bg-white dark:bg-dark p-10 rounded shadow-xl"
              onSubmit={submitEmail}
            >
              <fieldset>
                <aside className="flex flex-wrap gap-4 mb-5">
                  <div className="w-full">
                    {/* <h2 className={titleStyles}>Name</h2> */}
                    <input
                      required
                      className={inputStyles}
                      placeholder="Name"
                      onChange={handleStateChange}
                      name="name"
                      value={mailerState.name}
                    />
                  </div>
                  <div className="w-full">
                    {/* <h2 className={titleStyles}>Email</h2> */}
                    <input
                      required
                      className={inputStyles}
                      placeholder="Email"
                      onChange={handleStateChange}
                      name="email"
                      value={mailerState.email}
                    />
                  </div>
                </aside>
                {/* <h2 className={titleStyles}>Message</h2> */}
                <textarea
                  className="h-48 border-2 border-gray-100 dark:border-white dark:text-white rounded dark:bg-dark px-2 py-1 focus:outline-none focus:border-gray-200 w-full"
                  placeholder="Message"
                  onChange={handleStateChange}
                  name="message"
                  value={mailerState.message}
                />
                <button className="py-2 px-3 mt-4 flex m-auto bg-gray-100 dark:bg-green-300 dark:text-gray-900 font-bold rounded tracking-widest cursor-pointer transform transition-all duration-200 ease-linear hover:scale-125 hover:text-gray-500 focus:outline-none">
                  Send Message
                </button>
              </fieldset>
            </form>
          </article>
        </section>
      </Layout>
    </>
  )
}

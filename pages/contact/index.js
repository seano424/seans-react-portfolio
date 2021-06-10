import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Layout from '../../components/Layout'

export default function Contact() {
  const [statusMessage, setStatusMessage] = useState('Message')
  const [isNotified, setIsNotified] = useState(false)
  const [isError, setIsError] = useState(false)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    const form = document.querySelector('#contact-form')

    const { sendForm, init } = (await import('emailjs-com')).default

    init('user_RZe3wfpwRqUFxAV07nmSv')
    sendForm('default_service', 'template_cauvbxi', '#contact-form').then(
      function (response) {
        console.log('SUCCESS!', response.status, response.text)
        form.reset()
        setStatusMessage('Sweet! Your message has been sent successfully.')
        setIsNotified(true)
        setTimeout(() => {
          setIsNotified(false)
        }, 3000)
      },
      function (error) {
        console.log('FAILED...', error)
        form.reset()
        setStatusMessage('Hmm something seems to have gone wrong 🤔 🦭')
        setIsNotified(true)
        setIsError(true)
        setTimeout(() => {
          setIsError(false)
          setIsNotified(false)
        }, 3000)
      }
    )
  }

  const message = watch('message') || ''
  const messageCharsLeft = 250 - message.length
  const warning = 'bg-red-500 text-white'
  const inputStyles =
    'border-4 border-green-200 dark:text-gray-900 py-1 px-2 w-full focus:outline-none focus:border-gray-600 dark:bg-white'
  const titleStyles =
    'mb-2 uppercase dark:text-gray-900 font-bold opacity-70 tracking-wider'

  return (
    <Layout>
      <section className=" w-8/12 mt-8">
        <h1
          className={`text-5xl font-bold transition-all duration-200 ease-linear ${
            isNotified && 'opacity-0'
          }`}
        >
          Get in contact
        </h1>
        <p
          className={`text-5xl relative -top-12 font-bold opacity-0 transition-all duration-200 ease-linear ${
            isNotified && 'opacity-100'
          } ${isError && 'bg-red-600 text-white'}`}
        >
          {statusMessage}
        </p>
        <form
          className="flex w-full flex-col bg-white p-10 rounded shadow"
          id="contact-form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <article className="flex flex-wrap gap-4 mb-5">
            <div className="w-full">
              <h2 className={titleStyles}>Name</h2>
              <input
                className={inputStyles}
                type="text"
                name="userName"
                {...register('userName', { required: true })}
              />
              {errors.userName && (
                <span className={warning}>This field is required</span>
              )}
            </div>
            <div className="w-full">
              <h2 className={titleStyles}>Email</h2>
              <input
                className={inputStyles}
                type="email"
                name="userEmail"
                {...register('userEmail', { required: true })}
              />
              {errors.userEmail && errors.userEmail.type === 'required' && (
                <span className={warning}>This field is required</span>
              )}
            </div>
          </article>
          <h2 className={titleStyles}>Message</h2>
          <textarea
            className="h-40 border-4 border-green-200 dark:bg-white px-2 py-1 focus:outline-none focus:border-gray-600"
            name="message"
            {...register('message', { required: true, maxLength: 250 })}
          />
          {errors.message && errors.message.type === 'required' && (
            <span className={`${warning}`}>This field is required</span>
          )}
          {errors.message && errors.message.type === 'maxLength' && (
            <span className={`${warning}`}>Max length exceeded</span>
          )}
          <p className="my-4">{messageCharsLeft} characters remaining</p>
          <input
            className="py-2 dark:bg-green-200 dark:text-gray-900 font-bold rounded tracking-widest cursor-pointer transform transition-all duration-200 ease-linear hover:scale-105 hover:text-gray-500"
            type="submit"
            value="Send"
          />
        </form>
      </section>
    </Layout>
  )
}

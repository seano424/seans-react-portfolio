import React from 'react'

function Form() {
  return (
    <form
      className="flex flex-col"
      action="https://formspree.io/f/xbjqgqjj"
      method="POST"
    >
      <input type="email" placeholder="Your email" />
      <textarea
        placeholder="Your message..."
        name="message"
        cols="30"
        rows="10"
      ></textarea>
      <button type="submit">Send</button>
    </form>
  )
}

export default Form

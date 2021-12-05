import '../styles/globals.css'
import 'react-notion/src/styles.css'
import 'prismjs/themes/prism-tomorrow.css'
import { ThemeProvider } from 'next-themes'
import { AnimatePresence } from 'framer-motion'

function MyApp({ Component, pageProps }) {
  return (
    <AnimatePresence exitBeforeEnter>
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </AnimatePresence>
  )
}

export default MyApp

import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AnimatePresence, motion } from "framer-motion"
import Layout from '../Components/Layout'
import { NextUIProvider } from '@nextui-org/react';
import Head from 'next/head';


function MyApp({ Component, pageProps, router }: AppProps) {
  const variants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
  }
  return (
    <>

      <AnimatePresence exitBeforeEnter
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}>
        <motion.div initial="initial" animate="animate" exit="exit" transition={{ duration: 0.5, ease: [0.01, 0.54, 0.4, 0.81] }} variants={variants} >
          <NextUIProvider>
            <Head>
              <link rel="shortcut icon" href="/favicon-white.png" />
            </Head>
            <Component  {...pageProps} key={router.pathname} />
          </NextUIProvider>
        </motion.div>
      </AnimatePresence>

    </>
  )
}

export default MyApp

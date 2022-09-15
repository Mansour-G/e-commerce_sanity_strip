import React from 'react'
import '../styles/globals.css'
import { Layout } from '../components'
import { Toaster } from 'react-hot-toast'

import { StateContext } from '../context/StateContext'

function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout >
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  )
}

export default MyApp

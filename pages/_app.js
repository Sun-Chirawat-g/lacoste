import * as React from 'react';
import '@/styles/globals.css'
import Layout from "../compo/layout"

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

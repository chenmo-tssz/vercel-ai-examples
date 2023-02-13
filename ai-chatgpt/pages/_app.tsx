import type { AppProps } from 'next/app'
import { Analytics } from '@vercel/analytics/react'

import type { LayoutProps }  from '../components/Layout'
import Layout, { getLayout } from '../components/Layout'

import '@vercel/examples-ui/globals.css'

function App({ Component, pageProps }: AppProps) {
  // const Layout = getLayout<LayoutProps>(Component)

  return (
    <Layout
      title="ai-chatgpt"
      path="ai-chatgpt"
      description="ai-chatgpt"
    >
      <Component {...pageProps} />
      <Analytics />
    </Layout>
  )
}

export default App

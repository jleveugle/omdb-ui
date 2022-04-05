import '../styles/globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return <div>
    <Header />
    <div className="bg-white">
      <Component {...pageProps} />
    </div>
    <Footer />
    <Head>
        <body className="bg-gray-50" />
    </Head>
  </div>
}

export default MyApp

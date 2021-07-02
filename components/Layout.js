import NavBar from './Navbar'
import Head from 'next/head'
import Script from 'next/script'

const layout = ({ children }) => {
  return (
    <>
      <Head>
        <link
          href='https://fonts.googleapis.com/icon?family=Material+Icons'
          rel='stylesheet'
        ></link>
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css'
        />
        {/* eslint-disable-next-line @next/next/no-css-tags */}
        <link rel='stylesheet' href='/style.css'></link>
      </Head>
      <NavBar />
      {children}
      <Script src='https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js'></Script>
    </>
  )
}

export default layout

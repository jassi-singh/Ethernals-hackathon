import React from 'react'
import Navbar from '../Navbar/Navbar'
import Head from 'next/head'

const Layout = (props:any) => {
  return (
    <>
      <Head>
        <title>D-App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      {props?.children}
    </>
  )
}

export default Layout

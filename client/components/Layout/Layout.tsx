import React from 'react'
import Navbar from '../Navbar/Navbar'
import Head from 'next/head'

const styles = {
  main: `h-screen overflow-auto pt-20`,
}

const Layout = (props: any) => {
  return (
    <>
      <Head>
        <title>D-App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className={styles.main}>{props?.children}</div>
    </>
  )
}

export default Layout

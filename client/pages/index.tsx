import type { NextPage } from 'next'
import Head from 'next/head'
import Grid from '../components/Grid'
import Layout from '../components/Layout/Layout'

const Home: NextPage = () => {
  return (
    <Layout>
      <Grid />
    </Layout>
  )
}

export default Home

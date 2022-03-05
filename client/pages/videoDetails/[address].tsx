import React from 'react'
import { useRouter } from 'next/router'
import Layout from '../../components/Layout/Layout'
const VideoDetails = () => {
  const router = useRouter()
  return (
    <Layout>
      {router.query.address}
    </Layout>
  )
}

export default VideoDetails

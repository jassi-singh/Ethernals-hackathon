import React from 'react'
import { useRouter } from 'next/router'
const VideoDetails = () => {
  const router = useRouter()
  return <div>video details page {router.query.address}</div>
}

export default VideoDetails

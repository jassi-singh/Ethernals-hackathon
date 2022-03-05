import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const styles = {
  wrapper: `w-80 h-96 hover:drop-shadow-xl bg-white rounded-lg ring-1 ring-gray-200 m-5 flex flex-col items-center justify-items-center`,
  img: `h-48 rounded-t-lg`,
  title: `font-bold pt-2`,
  creator: `text-blue-500`,
  description: `text-center p-4 text-gray-500 text-sm`,
}

const Thumbnail = (props: any) => {
  const { video } = props
  return (
    <Link href={`/videoDetails/${video.id}`}>
      <div className={styles.wrapper}>
        <img width="100%" src={video.imgUrl} className={styles.img} />
        <div className={styles.title}>{video.title}</div>
        <div>
          by <span className={styles.creator}>{video.creator}</span>
        </div>
        <div className={styles.description}>{video.description}</div>
      </div>
    </Link>
  )
}

export default Thumbnail

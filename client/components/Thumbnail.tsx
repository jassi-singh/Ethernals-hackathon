import Image from 'next/image'
import React from 'react'
import img from '../assets/images/unnamed.jpeg'

const styles = {
  wrapper: `w-96 hover:drop-shadow-xl bg-white rounded-lg ring-2 ring-gray-100 p-4 m-5 flex flex-col items-center justify-items-center`,
  title: `font-bold`,
  creator: `text-blue-500`,
  description: `text-center p-4 text-gray-500 text-sm`,
}

const Thumbnail = () => {
  return (
    <div className={styles.wrapper}>
      <Image src={img} height={200} />
      <div className={styles.title}>MaviaLand</div>
      <div>
        by <span className={styles.creator}>Heros of mavia</span>
      </div>
      <div className={styles.description}>
        Mavia Land by Heroes_of_Mavia Heroes of Mavia is a play-to-earn MMO
        Strategy game developed by Skrice Studios. The game takes place.
      </div>
    </div>
  )
}

export default Thumbnail

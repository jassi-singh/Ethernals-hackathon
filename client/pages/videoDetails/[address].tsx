import React from 'react'
import { useRouter } from 'next/router'
import Layout from '../../components/Layout/Layout'
import { AiFillPlayCircle } from 'react-icons/ai'
import { RiAccountBoxLine } from 'react-icons/ri'

const deatils = {
  id: 0,
  imgUrl:
    'https://lh3.googleusercontent.com/YhFNM3GpVLCmhT_aVdzEcDfJSjaoqV8-gwrG56ukc9zJqIHqEuw05o_jwf-_cZ8yEAa645GJTtKN7XovzEUNisk_8wuK6X3ae23B3Q=h200',
  title: 'Mavia Land',
  creator: 'Heroes_of_mavia',
  description:
    'Heroes of Mavia is a play-to-earn MMO Strategy game developed by Skrice Studios. The game takes places',
}

const style = {
  wrapper: `px-20`,
  imgBox: 'flex flex-row py-2 items-center justify-center',
  img: 'h-96 rounded-lg',
  playIcon: 'absolute h-20 w-20 text-white/70 backdrop-blur-sm rounded-full',
  bottomLayout: 'flex flex-row py-2',
  firstCol: 'w-3/4',
  secondCol: `w-1/4`,
  box: 'flex w-min items-center rounded-lg bg-blue-600/90 px-4 py-2 text-white font-bold',
  accountIcon: 'h-8 w-10',
  title: 'text-[48px] font-bold',
  h2: 'text-2xl font-bold',
}

const VideoDetails = () => {
  const router = useRouter()
  return (
    <Layout>
      <div className={style.wrapper}>
        <div className={style.imgBox}>
          <img width="100%" src={deatils.imgUrl} className={style.img} />
          <AiFillPlayCircle className={style.playIcon} />
        </div>
        <div className={style.bottomLayout}>
          <div className={style.firstCol}>
            <div className={style.box}>
              <RiAccountBoxLine className={style.accountIcon} />
              <span> {deatils.creator}</span>
            </div>
            <h1 className={style.title}>{deatils.title}</h1>
            <p>{deatils.description}</p>
          </div>
          <div className={style.secondCol}>
            <h1 className={style.h2}>Minted On: 28/02/2022</h1>
            <p>Current Price: 2 MATICs</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default VideoDetails

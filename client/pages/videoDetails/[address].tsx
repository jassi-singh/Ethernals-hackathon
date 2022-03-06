import React from 'react'
import { useRouter } from 'next/router'
import Layout from '../../components/Layout/Layout'
import { AiFillPlayCircle } from 'react-icons/ai'
import { RiAccountBoxLine } from 'react-icons/ri'

const deatils = {
  id: 0,
  imgUrl:
    'https://lh3.googleusercontent.com/5XTTw5Dsh82PagbFVovKcGuMdC_DLnn9PYt47r01U6MENZHI_ZFgg10bWhau3yngo3E3TaihVZ_Fvrth6KcLtGMKf9uMbJCd-gXG=h200',
  title: 'Mavia Land',
  creator: 'Heroes_of_mavia',
  description:
    'Heroes of Mavia is a play-to-earn MMO Strategy game developed by Skrice Studios. The game takes places',
}

const VideoDetails = () => {
  const router = useRouter()
  return (
    <Layout>
      <div className="px-20">
        <div className="flex flex-row py-2">
          <img width="100%" src={deatils.imgUrl} className="rounded-lg" />
          <AiFillPlayCircle
            className="absolute h-20 w-20"
            style={{ top: '35%', left: '46%' }}
          />
        </div>
        <div className="flex flex-row py-2">
          <div className="w-4/5">
            <div className="flex h-[48px] w-48 flex-row items-center justify-between rounded-lg bg-[#22222345] px-2">
              <RiAccountBoxLine className="h-8 w-10" />
              <span className="font-bold"> {deatils.creator}</span>
            </div>
            <h1 className='font-bold text-[48px]'>{deatils.title}</h1>
            <p>{deatils.description}</p>
          </div>
          <div className="w-1/5">
            <h1 className='font-bold text-2xl'>Minted On: 28/02/2022</h1>
            <p>Current Price: 2 MATICs</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default VideoDetails

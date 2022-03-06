import React from 'react'
import Thumbnail from './Thumbnail'

const styles = {
  grid: `flex-wrap flex`,
}
const videos: any = [
  {
    id: 0,
    imgUrl:
      'https://lh3.googleusercontent.com/5XTTw5Dsh82PagbFVovKcGuMdC_DLnn9PYt47r01U6MENZHI_ZFgg10bWhau3yngo3E3TaihVZ_Fvrth6KcLtGMKf9uMbJCd-gXG=h200',
    title: 'Mavia Land',
    creator: 'Heroes_of_mavia',
    description:
      'Heroes of Mavia is a play-to-earn MMO Strategy game developed by Skrice Studios. The game takes places',
  },
  {
    id: 1,
    imgUrl:
      'https://lh3.googleusercontent.com/YhFNM3GpVLCmhT_aVdzEcDfJSjaoqV8-gwrG56ukc9zJqIHqEuw05o_jwf-_cZ8yEAa645GJTtKN7XovzEUNisk_8wuK6X3ae23B3Q=h200',
    title: 'SuperRare',
    creator: 'Heroes_of_mavia',
    description:
      "SuperRare makes it easy to create, sell, and collect rare digital art. SuperRare's smart contract places",
  },
  {
    id: 2,
    imgUrl:
      'https://lh3.googleusercontent.com/5XTTw5Dsh82PagbFVovKcGuMdC_DLnn9PYt47r01U6MENZHI_ZFgg10bWhau3yngo3E3TaihVZ_Fvrth6KcLtGMKf9uMbJCd-gXG=h200',
    title: 'Mavia Land',
    creator: 'Heroes_of_mavia',
    description:
      'Heroes of Mavia is a play-to-earn MMO Strategy game developed by Skrice Studios. The game takes places',
  },
  {
    id: 3,
    imgUrl:
      'https://lh3.googleusercontent.com/5XTTw5Dsh82PagbFVovKcGuMdC_DLnn9PYt47r01U6MENZHI_ZFgg10bWhau3yngo3E3TaihVZ_Fvrth6KcLtGMKf9uMbJCd-gXG=h200',
    title: 'Mavia Land',
    creator: 'Heroes_of_mavia',
    description:
      'Heroes of Mavia is a play-to-earn MMO Strategy game developed by Skrice Studios. The game takes places',
  },
  {
    id: 4,
    imgUrl:
      'https://lh3.googleusercontent.com/5XTTw5Dsh82PagbFVovKcGuMdC_DLnn9PYt47r01U6MENZHI_ZFgg10bWhau3yngo3E3TaihVZ_Fvrth6KcLtGMKf9uMbJCd-gXG=h200',
    title: 'Mavia Land',
    creator: 'Heroes_of_mavia',
    description:
      'Heroes of Mavia is a play-to-earn MMO Strategy game developed by Skrice Studios. The game takes places',
  },
]
const Grid = () => {
  return (
    <div className={styles.grid} onClick={() => {}}>
      {videos.map((video: any, index: number) => (
        <Thumbnail key={index} video={video} />
      ))}
    </div>
  )
}

export default Grid

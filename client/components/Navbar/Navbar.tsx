import { useState } from 'react'
import { RoboAvatar, ChavronDown } from '../SVG/SVG'
import { AiFillFastForward } from 'react-icons/ai'
const Navbar = () => {
  const style = {
    navwrapper:
      'w-full flex bg-blue-600/90 text-white flex-row items-center justify-between shadow-sm absolute z-50 backdrop-blur-sm px-8 py-4',
    logo: 'flex flex-row items-center text-3xl font-semibold',
    joinButton: 'rounded-full bg-white text-blue-500 px-4 py-2',
    userInfo:
      'flex flex-row align-middle my-auto mx-2 rounded-full bg-[#ffffff36] px-2 py-1',
  }

  const [joined, setJoined] = useState(false)
  const [infoOpen, setInfoOpen] = useState(false)
  return (
    <div className={style.navwrapper}>
      <a href="/">
        <div className={style.logo}>
          <AiFillFastForward />
          <span>DPlay</span>
        </div>
      </a>
      {joined ? (
        <div className={style.userInfo} onClick={() => setInfoOpen(!infoOpen)}>
          <RoboAvatar />
          <span className="h-4 px-1">0x8.......D431</span>
          <ChavronDown />
        </div>
      ) : (
        <button className={style.joinButton} onClick={() => setJoined(true)}>
          Connect Wallet
        </button>
      )}
      {infoOpen && (
        <div className="absolute right-2 top-12 flex h-48 w-48 flex-col items-center justify-evenly bg-gradient-to-r from-cyan-500 to-blue-500 p-2 text-[#fff]">
          <RoboAvatar />
          <span className="h-4">0x8.......D431</span>
          <span className="h-4">Credits: 25 MATICS</span>
          <span
            className="justify-self-end"
            onClick={() => {
              setJoined(false)
              setInfoOpen(false)
            }}
          >
            Logout
          </span>
        </div>
      )}
    </div>
  )
}
export default Navbar

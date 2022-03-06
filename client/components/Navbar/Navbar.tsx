import { useContext } from 'react'
import { AiFillFastForward } from 'react-icons/ai'
import { MetamaskContext } from '../../context/metamaskContext'

const Navbar = () => {
  const style = {
    navwrapper:
      'w-full flex bg-blue-600/90 text-white flex-row items-center justify-between shadow-sm absolute z-50 backdrop-blur-sm px-8 py-4',
    logo: 'flex flex-row items-center text-3xl font-semibold',
    joinButton: 'rounded-full bg-white text-blue-500 px-4 py-2 mx-2',
    row: 'flex',
  }

  const { connectWallet, currentAddress, currency, balance }: any =
    useContext(MetamaskContext)
  return (
    <div className={style.navwrapper}>
      <a href="/">
        <div className={style.logo}>
          <AiFillFastForward />
          <span>DPlay</span>
        </div>
      </a>
      <div className={style.row}>
        <button className={style.joinButton} onClick={connectWallet}>
          {currentAddress === undefined
            ? 'Connect Wallet'
            : `${currentAddress?.substr(0, 4)}...${currentAddress?.substr(37)}`}
        </button>
        {currentAddress && (
          <div className={style.joinButton}>
            {balance} {currency}
          </div>
        )}
      </div>
    </div>
  )
}
export default Navbar

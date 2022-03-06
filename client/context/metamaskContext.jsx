import React, { useState, useEffect } from 'react'
import { ethers } from 'ethers'

export const MetamaskContext = React.createContext({})

let eth
if (typeof window != 'undefined') {
  eth = window.etherium
}

export const MetamaskProvider = ({ children }) => {
  const [currentSigner, setCurrentSigner] = useState()
  const [currentAddress, setCurrentAddress] = useState()
  const [currency, setCurrency] = useState()
  const [balance, setBalance] = useState()

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on('accountsChanged', () => {
        window.location.reload()
      })
      window.ethereum.on('chainChanged', () => {
        window.location.reload()
      })
    }
  })
  useEffect(() => {
    checkMetamaskConnected()
  }, [])

  const connectWallet = async (metamask = eth) => {
    try {
      if (!metamask) return alert('Please install Metamask')
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      await provider.send('eth_requestAccounts', [])
    } catch (err) {
      console.log(err)
    }
  }

  const checkMetamaskConnected = async () => {
    try {
      console.log('Checking metamask connected ...')
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const signer = provider.getSigner()
      const address = await signer.getAddress()
      const balance = await signer.getBalance()
      checkChain()
      if (address) {
        console.log(address)
        setCurrentSigner(signer)
        setBalance(ethers.utils.formatEther(balance))
        setCurrentAddress(address)
      }
    } catch (err) {
      console.log(err)
    }
  }

  const checkChain = async () => {
    switch (window.ethereum.networkVersion) {
      case '1':
        setCurrency('ETH')
        break
      case '80001':
        setCurrency('MATIC')
        break
      default:
        setCurrency('ETH')
    }
  }

  return (
    <MetamaskContext.Provider
      value={{
        connectWallet,
        currentAddress,
        currentSigner,
        currency,
        balance,
      }}
    >
      {children}
    </MetamaskContext.Provider>
  )
}

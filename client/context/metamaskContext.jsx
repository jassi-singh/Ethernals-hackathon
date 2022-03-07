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
      await switchToPolygonChain()
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

  const switchToPolygonChain = async () => {
    try {
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: '0x13881' }],
      })
    } catch (switchError) {
      // This error code indicates that the chain has not been added to MetaMask.
      if (switchError.code === 4902) {
        try {
          await ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [
              {
                chainId: '0x13881',
                chainName: 'Polygon Testnet',
                nativeCurrency: {
                  name: 'MATIC',
                  symbol: 'MATIC',
                  decimals: 18,
                },
                rpcUrls: ['https://matic-mumbai.chainstacklabs.com'],
                blockExplorerUrls: ['https://mumbai.polygonscan.com/'],
                iconUrls: [
                  'https://cdn.freelogovectors.net/wp-content/uploads/2021/10/polygon-token-logo-freelogovectors.net_.png',
                ],
              },
            ],
          })
        } catch (addError) {
          console.log(addError)
        }
      }
      console.log(switchError)
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

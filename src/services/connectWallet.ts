import { InjectedConnector } from '@web3-react/injected-connector'
import { injected } from '../components/Wallet/Connectors'

const ethereum = (window as any).ethereum

const handleConnection = async (
  active: boolean,
  activate: (arg: InjectedConnector) => void,
  deactivate: () => void
) => {
  if (active) {
    try {
      deactivate()
    } catch (ex) {
      console.log(ex)
    }
  } else {
    try {
      await activate(injected)
    } catch (ex) {
      console.log(ex)
    }
  }
}

const addEthereumChain = async () => {
  try {
    const chainData = [
      {
        chainId: '0x13881',
        chainName: 'Mumbai Testnet',
        nativeCurrency: {
          name: 'MATIC',
          symbol: 'MATIC',
          decimals: 18,
        },
        rpcUrls: ['https://rpc-mumbai.matic.today'],
        blockExplorerUrls: ['https://explorer-mumbai.maticvigil.com/'],
      },
    ]
    await ethereum.request({
      method: 'wallet_addEthereumChain',
      params: chainData,
    })
  } catch (addError) {
    console.log('An error occured when adding a new chain', addError)
  }
}

const switchEthereumChain = async () => {
  try {
    await ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: '0x13881' }],
    })
    window.location.reload()
  } catch (switchError: any) {
    if (switchError.code === 4902) {
      addEthereumChain()
      alert("You don't have the required network added")
    } else {
      console.log('something went wrong')
    }
  }
}

export const checkNetwork = async (
  active: boolean,
  activate: (arg: InjectedConnector) => void,
  deactivate: () => void
) => {
  const chainId = await ethereum.request({ method: 'eth_chainId' })
  if (chainId !== '0x13881') {
    alert('You need to connect to the Mumbai network from MetaMask to use this app.')
    switchEthereumChain()
  } else handleConnection(active, activate, deactivate)
}

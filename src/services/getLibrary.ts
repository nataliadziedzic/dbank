import { ethers } from 'ethers'

export const getLibrary = (provider: any) => {
  const library = new ethers.providers.Web3Provider(provider)
  library.pollingInterval = 4000
  return library
}

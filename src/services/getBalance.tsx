import { ethers } from 'ethers'

export const getBalance = (
  account: string | null | undefined,
  library: any,
  setBalance: (arg: string) => void,
) => {
  if (account && library) {
    const checkBalance: () => void = async () => {
      const weiBalance = await library.getBalance(account)
      setBalance(ethers.utils.formatEther(weiBalance).slice(0, 4))
    }
    checkBalance()
  }
}

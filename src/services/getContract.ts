import { ethers } from 'ethers'
import abi from '../data/bank-abi.json'
// import address from '../data/contract-address.json'

export const getContract = (library: any, account: string | null | undefined) => {
  const contract = new ethers.Contract('0x76619bBF5bA9144A95599c2060D658d9D97be4B5', abi, library).connect(library.getSigner(account))
  return contract
}

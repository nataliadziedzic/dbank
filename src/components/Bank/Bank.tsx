import { useEffect, useMemo, useState } from 'react'
import { ethers } from 'ethers'
import { useWeb3React } from '@web3-react/core'

import { getContract } from '../../services/getContract'

import { BankWrapper, InputWrapper } from './Bank.style'
import ConfirmButton from './ConfirmButton/ConfirmButton'

const Bank = () => {
  const { account, library } = useWeb3React()
  const [amountToDeposit, setAmountToDeposit] = useState('')
  const [amountToWithdraw, setAmountToWithdraw] = useState('')
  const [totalAsssets, setTotalAssets] = useState('')
  const contract = useMemo(() => library && account && getContract(library, account), [account, library])

  useEffect(() => {
    if (contract) {
      setTotalAssets(ethers.utils.formatEther(contract.totalAssets()))
    }
  }, [contract])

  const deposit = async () => {
    if (contract) {
      const transaction = await contract.deposit({ value: ethers.utils.parseEther(amountToDeposit).toString() })
      await transaction.wait()
      setAmountToDeposit('')
    }
  }
  const withdraw = async () => {
    if (contract && +contract.accounts(account) >= +amountToWithdraw) {
      const transaction = await contract.withdraw({ value: ethers.utils.parseEther(amountToWithdraw).toString() })
      await transaction.wait()
      setAmountToWithdraw('')
    }
  }

  return (
    <BankWrapper>
      <h1>Welcome to the DBank!</h1>
      <h2>We are currently storing: {totalAsssets} MATIC</h2>
      <InputWrapper>
        <h3 className='fundsHeader'>Manage your funds </h3>
        <div className='labelWrapper'>
          <label htmlFor='deposit'>Deposit</label>
          <input
            type='text'
            id='deposit'
            inputMode='decimal'
            pattern='^[0-9]*[.,]?[0-9]*$'
            onKeyPress={event => {
              if (!/[0-9]/.test(event.key)) {
                event.preventDefault()
              }
            }}
            value={amountToDeposit}
            onChange={event => setAmountToDeposit(event.target.value)}
            placeholder='Amount To Deposit'
          />
          <ConfirmButton confirmedFunction={deposit} />
        </div>
        <div className='labelWrapper'>
          <label className='withdraw' htmlFor='withdraw'>
            Withdraw
          </label>
          <input
            type='text'
            id='withdraw'
            inputMode='decimal'
            pattern='^[0-9]*[.,]?[0-9]*$'
            onKeyPress={event => {
              if (!/[0-9]/.test(event.key)) {
                event.preventDefault()
              }
            }}
            value={amountToWithdraw}
            onChange={event => setAmountToWithdraw(event.target.value)}
            placeholder='Amount To Withdraw'
          />
          <ConfirmButton confirmedFunction={withdraw} />
        </div>
      </InputWrapper>
    </BankWrapper>
  )
}

export default Bank

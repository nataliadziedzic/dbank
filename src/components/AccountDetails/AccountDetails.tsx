import React, { useState, useEffect } from 'react'
import { useWeb3React } from '@web3-react/core'

import { Account, Address } from './AccountDetails.style'
import { getBalance } from '../../services/getBalance'
import { checkNetwork } from '../../services/connectWallet'

export const AccountDetails = () => {
  const { active, activate, deactivate, account, library } = useWeb3React()
  const [balance, setBalance] = useState<string>('0')

  useEffect(() => getBalance(account, library, setBalance), [account, library])

  return (
          <Account className='button' pointer={!account}>
            <span className='balance'>{balance} MATIC</span>
            <Address className='button' onClick={!account ? () => checkNetwork(active, activate, deactivate) : undefined}>
              {account ? `${account.slice(0, 6)}...${account.slice(account.length - 4, account.length)}` : "Connect wallet"}
            </Address>
          </Account>
  )
}

export default AccountDetails

import * as React from 'react'
import { useWeb3React } from '@web3-react/core'
import { checkNetwork } from '../../../services/connectWallet'

const ConfirmButton: React.FC<{ confirmedFunction: () => void }> = ({ confirmedFunction }) => {
  const { active, activate, deactivate } = useWeb3React()

  return (
    <button onClick={active ? confirmedFunction : () => checkNetwork(active, activate, deactivate)}>
      {active ? 'confirm' : 'connect wallet'}
    </button>
  )
}

export default ConfirmButton

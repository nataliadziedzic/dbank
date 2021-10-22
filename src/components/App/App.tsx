import React, { useEffect } from 'react'
import { Web3ReactProvider } from '@web3-react/core'

import { getLibrary } from '../../services/getLibrary'
import { ethereumOnChanges } from '../../services/ethereumOnChanges'

import Bank from '../Bank/Bank'

const App = () => {
  const ethereum = (window as any).ethereum

  useEffect(ethereumOnChanges, [ethereum])

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <div className='App'>
        <header className='header'>DBank</header>
        <Bank />
      </div>
    </Web3ReactProvider>
  )
}

export default App

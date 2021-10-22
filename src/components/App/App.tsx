import React, { useEffect } from 'react'
import Bank from '../Bank/Bank'

const App = () => {
  const ethereum = (window as any).ethereum;
  useEffect(() => {
      if (ethereum) {
        ethereum.on('accountsChanged', () => {
          window.location.reload()
        })
        ethereum.on('chainChanged', () => {
          window.location.reload()
        })
      }
  }, [ethereum])

  return (
    <div className='App'>
      <header className='header'>DBank</header>
      <Bank />
    </div>
  )
}

export default App

const ethereum = (window as any).ethereum

export const ethereumOnChanges = () => {
  if (ethereum) {
    ethereum.on('accountsChanged', () => {
      window.location.reload()
    })
    ethereum.on('chainChanged', () => {
      window.location.reload()
    })
  }
}

import { useState } from 'react'
import { BankWrapper, InputWrapper } from './Bank.style'

const Bank = () => {
  const [amountToDeposit, setAmountToDeposit] = useState('')
  const [amountToWithdraw, setAmountToWithdraw] = useState('')
  const totalAsssets = 10

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
        </div>
        <div className='labelWrapper'>
          <label className='withdraw' htmlFor='withdraw'>Withdraw</label>
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
        </div>
      </InputWrapper>
    </BankWrapper>
  )
}

export default Bank

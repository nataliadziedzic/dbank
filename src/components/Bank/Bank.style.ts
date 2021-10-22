import styled from 'styled-components'

export const BankWrapper = styled.div`
  color: #fff;
  text-align: center;
  padding: 2rem;
  width: 100%;
  height: calc(100vh - 62px); 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    margin: 1rem 0 2rem;
  }
`
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 2rem;
  width: 80vw;
  height: 80%;
  max-width: 700px;
  max-height: 400px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 10px;
  background-color: #0000006b;
  input {
    padding: 12px 16px;
    border: none;
    border-radius: 10px;
    margin: 1rem 0;
    text-align: left;
  }
  .withdraw {
    margin-top: 1rem;
  }
  label {
    font-size: 1.5rem;
    display: block;max-
  }
  .fundsHeader {
    font-size: 1.6rem;
    margin-bottom: 1rem;
  }
  button {
    height: 40px;
    min-width: 120px;
    margin-left: 1rem;  
    background-color: #ce9c069e;
    transition: .3s;
    &:hover {
      background-color: #ce9c06c4;
    }
  }
`

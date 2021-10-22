import styled from 'styled-components'

interface Props {
  pointer?: boolean
}
export const Account = styled.div<Props>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 1rem;
  padding: 0.8rem 1rem;
  background-color: #e1e1e1;
  color: #000;
  text-shadow: none;
  overflow: hidden;
  border-radius: 10px;
  cursor: ${props => props.pointer ? 'pointer' : 'default'};
  .balance {
    margin-right: 0.5rem;
    font-size: 0.9rem;
  }
`
export const Address = styled.span`
  padding-right: 0.8rem;
  padding-left: 0.8rem;
  margin-right: 0;
  font-size: 0.9rem;
`

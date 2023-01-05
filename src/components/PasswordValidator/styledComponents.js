// Style your elements here
import styled from 'styled-components'

export const ValidatorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #24263c;
`

export const ValidatorCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #383a4e;
  height: 50%;
  width: 50%;
  border-radius: 5px;
`

export const Heading = styled.h1`
  color: #f8fafc;
  font-size: 20px;
  font-family: 'Roboto';
  font-weight: 600;
`

export const Details = styled.p`
  color: #ffffff;
  font-size: 15px;
  font-family: 'Roboto';
  font-weight: 400;
`

export const ErrorMessage = styled.p`
  color: #ef4444;
  font-size: 10px;
  font-family: 'Roboto';
  font-weight: 400;
`

export const InputText = styled.input`
  height: 10%;
  width: 50%;
`

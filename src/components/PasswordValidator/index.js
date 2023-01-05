import {useState} from 'react'
import {
  ValidatorContainer,
  ValidatorCard,
  Heading,
  Details,
  ErrorMessage,
  InputText,
} from './styledComponents'

const PasswordValidator = () => {
  const [passwordLength, setPassword] = useState('')

  const onEnteredPassword = event => {
    setPassword(event.target.value)
  }

  const isLength = passwordLength.length

  return (
    <ValidatorContainer>
      <ValidatorCard>
        <Heading>Password Validator</Heading>
        <Details>Check how strong and secure is your password</Details>
        <InputText type="password" onChange={onEnteredPassword} />
        {isLength > 8 ? (
          ''
        ) : (
          <ErrorMessage>
            Your password must be at least 8 characters
          </ErrorMessage>
        )}
      </ValidatorCard>
    </ValidatorContainer>
  )
}

export default PasswordValidator

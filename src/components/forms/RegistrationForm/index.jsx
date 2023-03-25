import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { register } from '../../../slices/authSlice'
import { EmailField, PasswordField } from '../../form-fields'
import LoadingButton from '../../LoadingButton'
import BaseForm from '../BaseForm'

const RegistrationForm = ({ setServerError }) => {
  const dispatch = useDispatch()
  const loading = useSelector((state) => state.auth.loading)
  const navigate = useNavigate()

  const onSubmit = async (user, setError) => {
    try {
      await dispatch(register(user)).unwrap()
      navigate('/')
    } catch (error) {
      if (error.detail) {
        setError('email', { type: 'custom', message: error.detail })
      } else {
        setServerError('Непредвиденная ошибка')
      }
    }
  }

  return (
    <BaseForm onSubmit={onSubmit}>
      <EmailField name='email' placeholder='Электронная почта' required />
      <PasswordField name='password' placeholder='Пароль' required />
      <LoadingButton type='submit' loading={loading}>
        Зарегистрироваться
      </LoadingButton>
    </BaseForm>
  )
}

RegistrationForm.propTypes = {
  setServerError: PropTypes.func,
}

export default RegistrationForm

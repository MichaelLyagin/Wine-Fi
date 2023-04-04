import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { login } from '../../../slices/authSlice'
import { EmailField, PasswordField } from '../../form-fields'
import LoadingButton from '../../LoadingButton'
import BaseForm from '../BaseForm'

const LoginForm = ({ setServerError }) => {
  const dispatch = useDispatch()
  const loading = useSelector((state) => state.auth.loading)
  const navigate = useNavigate()

  const onSubmit = async (user, setError) => {
    try {
      await dispatch(login(user)).unwrap()
      navigate('/')
    } catch (error) {
      if (error.field) {
        setError(error.field, { type: 'custom', message: error.detail })
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
        Войти
      </LoadingButton>
    </BaseForm>
  )
}

LoginForm.propTypes = {
  setServerError: PropTypes.func,
}

export default LoginForm

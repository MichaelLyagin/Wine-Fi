import { LoginForm } from '../../components/forms'
import AuthTemplate from '../templates/AuthTemplate'

const LoginPage = () => {
  return (
    <AuthTemplate
      title='Вход'
      linkLabel='Зарегистрироваться'
      linkTo='/registration'
    >
      <LoginForm />
    </AuthTemplate>
  )
}

export default LoginPage

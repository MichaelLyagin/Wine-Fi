import { Link } from 'react-router-dom'

import logo from './logo.svg'

import './style.scss'

const Logo = () => {
  return (
    <Link className='logo' to='/'>
      <img className='logo__img' src={logo} alt='Логотип' />
    </Link>
  )
}

export default Logo

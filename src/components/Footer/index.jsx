import Logo from '../Logo'
import './style.scss'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer__logo'>
        <Logo color1='#808080' color2='#808080' />
      </div>
      <div className='footer__time'>
        <b className='footer__bold'>Режим работы:</b>
        <br />
        8:00 - 22:00 Без выходных.
      </div>
      <div className='footer__address'>
        <b className='footer__bold'>Адрес магазина:</b>
        <br />
        г. Томск ул. Пушкина 146
      </div>
      <div className='footer__contact'>
        <b className='footer__bold'>Контакты:</b>
        <br />
        +7 800 555 35 35
        <br />
        wine_fi@mail.ru
      </div>
    </div>
  )
}

export default Footer

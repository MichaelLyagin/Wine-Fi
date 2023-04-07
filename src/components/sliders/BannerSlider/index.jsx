import classNames from 'classnames'
import PropTypes from 'prop-types'
import { Navigation, Pagination, Autoplay } from 'swiper'

import slides from './img.json'
import Slider from '../Slider'

import './style.scss'

const BannerSlider = ({ className }) => {
  const config = {
    modules: [Navigation, Pagination, Autoplay],
    loop: true,
    speed: 900,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    slidesPerView: 1,
    navigation: true,
    pagination: { clickable: true },
  }

  return (
    <Slider
      className={classNames('banner-slider', className)}
      items={slides}
      config={config}
    >
      {(item) => (
        <img
          className='banner-slider__img'
          src={item.image}
          alt='Рекламный баннер'
        />
      )}
    </Slider>
  )
}

BannerSlider.propTypes = {
  className: PropTypes.string,
}

export default BannerSlider

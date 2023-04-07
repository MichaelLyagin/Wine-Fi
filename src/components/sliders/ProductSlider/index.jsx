import classNames from 'classnames'
import PropTypes from 'prop-types'
import { Navigation } from 'swiper'

import products from './products.json'
import ProductCard from '../../../components/ProductCard'
import Slider from '../Slider'

import './style.scss'

const ProductSlider = ({ topic, className }) => {
  const config = {
    modules: [Navigation],
    navigation: true,
    slidesPerView: 1,
    slidesPerGroup: 1,
    speed: 800,
    breakpoints: {
      420: {
        slidesPerGroup: 1,
        slidesPerView: 1.5,
      },
      537: {
        slidesPerGroup: 2,
        slidesPerView: 2,
      },
      780: {
        slidesPerGroup: 3,
        slidesPerView: 3,
      },
      1035: {
        speed: 1000,
        slidesPerGroup: 4,
        slidesPerView: 4,
      },
    },
  }

  return (
    <div className={classNames('product-slider', className)}>
      <div className='product-slider__topic'>{topic}</div>
      <Slider items={products} config={config}>
        {(product) => <ProductCard {...product} />}
      </Slider>
    </div>
  )
}

ProductSlider.propTypes = {
  topic: PropTypes.string,
  className: PropTypes.string,
}

export default ProductSlider

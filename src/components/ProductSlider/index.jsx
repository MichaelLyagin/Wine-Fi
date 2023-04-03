import { useMediaQuery } from 'react-responsive'
import { Navigation, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import products from './products.json'
import ProductCard from '../../components/ProductCard'

// Import Swiper styles
import './style.scss'
import 'swiper/css'
import 'swiper/scss/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

const ProductSlider = ({ topic }) => {
  const Small = useMediaQuery({ query: '(max-width: 525px)' })
  const Mid = useMediaQuery({ query: '(max-width: 780px)' })
  const Large = useMediaQuery({ query: '(max-width: 1035px)' })

  return (
    <div className='product-slider'>
      <div className='product-slider__topic'>{topic}</div>
      <Swiper
        className='product-slider_swiper'
        modules={[Navigation, A11y]}
        rewind={true}
        spaceBetween={0}
        slidesPerView={Small ? 1 : Mid ? 2 : Large ? 3 : 4} //Количество отображаемых карточек
        navigation
      >
        {products.map((prod) => (
          <SwiperSlide key={prod.id} alt=''>
            <ProductCard
              imgSrc={prod.imgSrc}
              type={prod.type}
              name={prod.name}
              color={prod.color}
              sweetness={prod.sweetness}
              country={prod.country}
              volume={prod.volume}
              price={prod.price}
              like={prod.like}
              added={prod.added}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default ProductSlider

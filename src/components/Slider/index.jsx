import { Navigation, Pagination, A11y, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import slides from './img.json'

// Import Swiper styles
import './style.scss'
import 'swiper/css'
import 'swiper/scss/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

const Slider = () => {
  return (
    <div className='slider'>
      <Swiper
        className='slider_swiper'
        modules={[Navigation, Pagination, A11y, Autoplay]}
        rewind={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.image} alt=''>
            <img className='slider__img' src={slide.image} alt='Слайд' />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
console.log(slides) // eslint-disable-line no-console
export default Slider

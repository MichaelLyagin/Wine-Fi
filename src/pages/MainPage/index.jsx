import Container from '../../components/Container'
import Search from '../../components/Search'
import { BannerSlider, ProductSlider } from '../../components/sliders'

import './style.scss'

const MainPage = () => {
  return (
    <div className='main-page'>
      <Container className='main-page__container'>
        <Search className='main-page__search' />
        <BannerSlider className='main-page__banner-slider' />
        <ProductSlider
          className='main-page__product-slider'
          topic='Рекомендуем приобрести'
        />
        <ProductSlider
          className='main-page__product-slider'
          topic='Популярное'
        />
      </Container>
    </div>
  )
}

export default MainPage

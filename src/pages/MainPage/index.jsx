import Container from '../../components/Container'
import Search from '../../components/Search'
import {
  BannerSlider,
  PopularProductsSlider,
  DiscountedProductsSlider,
} from '../../components/sliders'

import './style.scss'

const MainPage = () => {
  return (
    <div className='main-page'>
      <Container className='main-page__container'>
        <Search className='main-page__search' />
        <BannerSlider className='main-page__banner-slider' />
        <PopularProductsSlider className='main-page__product-slider' />
        <DiscountedProductsSlider className='main-page__product-slider' />
      </Container>
    </div>
  )
}

export default MainPage

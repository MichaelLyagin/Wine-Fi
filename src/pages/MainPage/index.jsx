import Container from '../../components/Container'
import Footer from '../../components/Footer'
import ProductSlider from '../../components/ProductSlider'
import Search from '../../components/Search'
import Slider from '../../components/Slider'

import './style.scss'

const MainPage = () => {
  return (
    <div className='main-page'>
      <Container>
        <Search />
        <Slider />
        <ProductSlider topic='Рекомендуем приобрести' />
        <ProductSlider topic='Популярное' />
        <Footer />
      </Container>
    </div>
  )
}

export default MainPage

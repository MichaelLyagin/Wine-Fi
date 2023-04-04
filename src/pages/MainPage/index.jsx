import Container from '../../components/Container'
import ProductSlider from '../../components/ProductSlider'
import Search from '../../components/Search'
import Slider from '../../components/Slider'

const MainPage = () => {
  return (
    <div className='main-page'>
      <Container>
        <Search />
        <Slider />
        <ProductSlider topic='Рекомендуем приобрести' />
        <ProductSlider topic='Популярное' />
      </Container>
    </div>
  )
}

export default MainPage

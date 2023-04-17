import Container from '../../components/Container'
import Filter from '../../components/Filter'
import Pagination from '../../components/Pagination'
import Search from '../../components/Search'
import Sort from '../../components/Sort'

import './style.scss'

const CatalogPage = () => {
  return (
    <div className='catalog-page'>
      <Container className='catalog-page__container'>
        <Search className='catalog-page__search' />
        <div className='catalog-page__text'>Каталог</div>
        <div className='catalog-page__content'>
          <Filter className='catalog-page__content__filter' />
          <div className='catalog-page__content__sort-and-pages'>
            <Sort className='catalog-page__content__sort' />
            <Pagination itemsPerPage={6} />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default CatalogPage

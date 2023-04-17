import { useState } from 'react'

import ReactPaginate from 'react-paginate'

import products from './products.json'
import ArrowIcon from '../icons/ArrowIcon'
import ProductCard from '../ProductCard'

import './style.scss'

function Items({ currentItems }) {
  return (
    <div className='pagination__products'>
      {currentItems &&
        currentItems.map((prod) => (
          <div className='pagination__products__product' key={prod.id}>
            <ProductCard
              key={prod.id}
              image={prod.imgSrc}
              name={prod.name}
              color={prod.color}
              sugarType={prod.sweetness}
              country={prod.country}
              volume={prod.volume}
              price={prod.price}
              actualPrice={prod.price}
            />
          </div>
        ))}
    </div>
  )
}

const Pagination = ({ itemsPerPage }) => {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0)

  // Simulate fetching products from another resources.
  // (This could be products from props; or products loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage

  const currentItems = products.slice(itemOffset, endOffset)
  const pageCount = Math.ceil(products.length / itemsPerPage)

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length
    setItemOffset(newOffset)
  }

  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        className='pagination_number'
        breakLabel='...'
        nextLabel={<ArrowIcon className='next-icon' />}
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={1}
        pageCount={pageCount}
        previousLabel={<ArrowIcon className='previous-icon' />}
        renderOnZeroPageCount={null}
      />
    </>
  )
}

export default Pagination

import classNames from 'classnames'
import PropTypes from 'prop-types'

import LoupeIcon from '../icons/LoupeIcon'

import './style.scss'

const Search = ({ className }) => {
  return (
    <div className={classNames('search', className)}>
      <input
        className='search__input'
        type='text'
        placeholder='Поиск в каталоге'
      />
      <button className='search__button'>
        <LoupeIcon className='search__loupe' />
      </button>
    </div>
  )
}

Search.propTypes = {
  className: PropTypes.string,
}

export default Search

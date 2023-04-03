import LoupeIcon from '../icons/LoupeIcon'

import './style.scss'

const Search = () => {
  return (
    <div className='search'>
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

export default Search

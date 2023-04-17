import { useState } from 'react'

import classNames from 'classnames'
import { AiOutlineClose } from 'react-icons/ai'

import FilterElement from '../FilterElement'

import './style.scss'

const Filter = ({ className }) => {
  const [filterOpen, setFilterOpen] = useState(false)

  const onfilterClick = () => {
    setFilterOpen((filterOpen) => !filterOpen)
  }

  return (
    <div className='filter-div'>
      <div className={'mobile-text'} onClick={onfilterClick}>
        Фильтры
      </div>
      <div
        className={classNames(
          'filter' + (filterOpen ? ' open' : ''),
          className
        )}
      >
        <div className='menu__icon-container' onClick={onfilterClick}>
          {filterOpen ? (
            <AiOutlineClose className='filter__icon-close' />
          ) : null}
        </div>
        <FilterElement name='Объем' key='volume'>
          <div className='filter__volume'>
            <input
              className='filter__volume__input-text'
              placeholder='От'
              id='from'
            />
            <div className='filter__volume__input-text__dash'>—</div>
            <input
              className='filter__volume__input-text'
              placeholder='До'
              id='to'
            />
          </div>
        </FilterElement>

        <FilterElement name='Страна' key='country'>
          <input className='filter__country' placeholder='Россия' />
        </FilterElement>

        <FilterElement className='filter__color' name='Цвет' key='color'>
          <ul>
            <li>
              <input
                type='checkbox'
                className='filter__custom-checkbox'
                id='red'
              />
              <label htmlFor='red'>Красное</label>
            </li>
            <li>
              <input
                type='checkbox'
                className='filter__custom-checkbox'
                id='white'
              />
              <label htmlFor='white'>Белое</label>
            </li>
            <li>
              <input
                type='checkbox'
                className='filter__custom-checkbox'
                id='pink'
              />
              <label htmlFor='pink'>Розовое</label>
            </li>
          </ul>
        </FilterElement>

        <FilterElement
          className='filter__sweetness'
          name='Сладость'
          key='sweetness'
        >
          <ul>
            <li>
              <input
                type='checkbox'
                className='filter__custom-checkbox'
                id='sweet'
              />
              <label htmlFor='sweet'>Сладкое</label>
            </li>
            <li>
              <input
                type='checkbox'
                className='filter__custom-checkbox'
                id='semi-sweet'
              />
              <label htmlFor='semi-sweet'>Полусладкое</label>
            </li>
            <li>
              <input
                type='checkbox'
                className='filter__custom-checkbox'
                id='dry'
              />
              <label htmlFor='dry'>Сухое</label>
            </li>
            <li>
              <input
                type='checkbox'
                className='filter__custom-checkbox'
                id='semi-dry'
              />
              <label htmlFor='semi-dry'>Полусухое</label>
            </li>
          </ul>
        </FilterElement>

        <FilterElement name='Цена' key='price'>
          <div className='filter__price'>
            <input
              className='filter__price__input-text'
              placeholder='От'
              id='from'
            />
            <div className='filter__price__input-text__dash'>—</div>
            <input
              className='filter__price__input-text'
              placeholder='До'
              id='to'
            />
          </div>
        </FilterElement>
      </div>
    </div>
  )
}

export default Filter

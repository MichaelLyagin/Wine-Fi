import classNames from 'classnames'

import './style.scss'

const Sort = ({ className }) => {
  return (
    <div className={classNames('sort', className)}>
      <div className='sort__text'>Сортировать</div>
      <div>
        <select className='sort__selector' id='sort-selector'>
          <option value='by name'>По названию</option>
          <option value='by discount'>По скидке</option>
          <option value='by cheap'>Сначала дешевые</option>
          <option value='by expensive'>Сначала дорогие</option>
        </select>
      </div>
    </div>
  )
}

export default Sort

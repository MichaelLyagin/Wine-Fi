import { useState } from 'react'

import classNames from 'classnames'

import ArrowIcon from '../icons/ArrowIcon'

import './style.scss'

const FilterElement = ({ className, name, children, ...rest }) => {
  const [valuePop, setValuePop] = useState(false)

  const handleValuePop = () => {
    setValuePop((valuePop) => !valuePop)
  }

  return (
    <div className={classNames('filter-element', className)} {...rest}>
      <div className='filter-element__row'>
        <div className='filter-element__row__name'>{name}</div>
        <div
          className={'filter-element__row__btn' + (valuePop ? '__active' : '')}
          onClick={handleValuePop}
        >
          <ArrowIcon />
        </div>
      </div>
      <div className={'filter-element__pop-up' + (valuePop ? '__active' : '')}>
        {children}
      </div>
    </div>
  )
}

export default FilterElement

import React, { useState } from 'react'

import PropTypes from 'prop-types'

import Button from '../Button'
import Counter from '../Counter'
import LikeIcon from '../icons/LikeIcon'

import './style.scss'

const ProductCard = ({
  imgSrc,
  type,
  name,
  color,
  sweetness,
  country,
  volume,
  price,
  like,
  added,
}) => {
  const [isAdded, setAdd] = useState(added)
  const [isLiked, setLike] = useState(like)

  return (
    <div className='product-card'>
      <a href='##'>
        <div className='product-card__a'> </div>
      </a>

      <div className='product-card__imgDiv'>
        <img
          className='product-card__img'
          src={imgSrc}
          alt='Изображение товара'
        />
      </div>

      <div onClick={() => setLike(!isLiked)}>
        <LikeIcon
          className={
            isLiked ? 'product-card__like-active' : 'product-card__like'
          }
        />
      </div>

      <div className='product-card__description'>
        {type} {name} {color} {sweetness}, {country}, {volume} л.
      </div>

      <div className='product-card__priceAndCounter'>
        <div className='product-card__price'>{price} ₽/шт.</div>
        <div className='product-card__counterDiv'>
          {isAdded ? <Counter /> : ''}
        </div>
      </div>

      <div onClick={() => setAdd(!isAdded)} className='product-card__btnDiv'>
        <Button
          className={
            isAdded ? 'product-card__btn-inBasket' : 'product-card__btn'
          }
          children={isAdded ? 'В корзине' : 'В корзину'}
        />
      </div>
    </div>
  )
}

ProductCard.propTypes = {
  imgSrc: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  color: PropTypes.string,
  sweetness: PropTypes.string,
  country: PropTypes.string,
  volume: PropTypes.number,
  price: PropTypes.number,
  like: PropTypes.bool,
  added: PropTypes.bool,
}

export default ProductCard

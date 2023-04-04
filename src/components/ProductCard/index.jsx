import { useState } from 'react'

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

  const changeAdd = () => {
    setAdd((isAdded) => !isAdded)
  }

  const changeLike = () => {
    setLike((isLiked) => !isLiked)
  }

  return (
    <div className='product-card'>
      <a href='##'>
        <div className='product-card__a' />
      </a>

      <div className='product-card__img-div'>
        <img
          className='product-card__img'
          src={imgSrc}
          alt='Изображение товара'
        />
      </div>

      <div onClick={changeLike}>
        <LikeIcon
          className={
            isLiked ? 'product-card__like-active' : 'product-card__like'
          }
        />
      </div>

      <div className='product-card__description'>
        {type} {name} {color} {sweetness}, {country}, {volume} л.
      </div>

      <div className='product-card__price-and-counter'>
        <div className='product-card__price'>{price} ₽/шт.</div>
        <div className='product-card__counter-div'>
          {isAdded ? <Counter /> : null}
        </div>
      </div>

      <div onClick={changeAdd} className='product-card__btn-div'>
        <Button
          className={
            isAdded ? 'product-card__btn-in-basket' : 'product-card__btn'
          }
        >
          {isAdded ? 'В корзине' : 'В корзину'}
        </Button>
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

import { useState } from 'react'

import classNames from 'classnames'
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
  actualPrice,
  price,
  like,
  added,
  discount,
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

      {discount ? (
        <div className='product-card__discount'>-{discount}%</div>
      ) : null}

      <div onClick={changeLike}>
        <LikeIcon
          className={classNames('product-card__like', {
            'product-card__like_active': isLiked,
          })}
        />
      </div>

      <div className='product-card__description'>
        {type} {name} {color} {sweetness}, {country}, {volume} л.
      </div>

      <div className='product-card__price-and-counter'>
        <div className='product-card__price'>
          {actualPrice} ₽/шт.
          {discount ? (
            <span className='product-card__old-price'>{price} ₽/шт.</span>
          ) : null}
        </div>
        <div className='product-card__counter-div'>
          {isAdded ? <Counter /> : null}
        </div>
      </div>

      <Button
        className={classNames('product-card__btn', {
          'product-card__btn_in-basket': isAdded,
        })}
        onClick={changeAdd}
      >
        {isAdded ? 'В корзине' : 'В корзину'}
      </Button>
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

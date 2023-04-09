import { HOST_URL, publicApi } from '../api'

class ProductService {
  static async getPopularProducts() {
    const res = await publicApi.get('/main/products/popular')
    return res.data.map(this._transformProduct)
  }

  static async getDiscountedProducts() {
    const res = await publicApi.get('/main/products/discount')
    return res.data.map(this._transformProduct)
  }

  static _transformProduct(product) {
    const {
      sugar_type: sugarType,
      actual_price: actualPrice,
      popularity_index: popularityIndex,
      volume,
      image,
      ...rest
    } = product

    return {
      ...rest,
      image: `${HOST_URL}${image}`,
      volume: volume / 1000,
      sugarType,
      actualPrice,
      popularityIndex,
    }
  }
}

export default ProductService

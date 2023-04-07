import { HOST_URL, publicApi } from '../api'

class BannerService {
  static async getBanners() {
    const res = await publicApi.get('/banners')

    return res.data.map((banner) => {
      banner.image = `${HOST_URL}${banner.image}`
      return banner
    })
  }
}

export default BannerService

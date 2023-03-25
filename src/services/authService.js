import { withCredentialsApi, authApi } from '../api'

class AuthService {
  static async login(user) {
    const res = await withCredentialsApi.post('/login', user)
    return res.data
  }

  static async register(user) {
    const res = await withCredentialsApi.post('/register', user)
    return res.data
  }

  static async logout() {
    await authApi.post('/logout')
  }

  static async checkAuth() {
    const res = await withCredentialsApi.post('/login/refresh')
    return res.data
  }
}

export default AuthService

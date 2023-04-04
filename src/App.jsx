import { Route, Routes } from 'react-router-dom'

import Footer from './components/Footer'
import Header from './components/Header'
import LoginPage from './pages/LoginPage'
import MainPage from './pages/MainPage'
import RegistrationPage from './pages/RegistrationPage'

import './scss/app.scss'

const App = () => {
  return (
    <div className='app'>
      <Header />
      <main className='main'>
        <Routes>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/registration' element={<RegistrationPage />} />
          <Route path='' element={<MainPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App

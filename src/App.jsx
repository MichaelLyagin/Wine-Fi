import { Route, Routes } from 'react-router-dom'

import Header from './components/Header'
import LoginPage from './pages/LoginPage'
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
        </Routes>
      </main>
    </div>
  )
}

export default App

import { Image } from './components/Image'
import './App.css'
import { Button } from './components/Button'
import Home from './pages/Home/Home'
import { Route, Routes } from 'react-router-dom'
import { NavbarComponent } from './components/NavbarComponent'

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <NavbarComponent>
          <Home />
        </NavbarComponent>
      } />
    </Routes>
  )
}

export default App

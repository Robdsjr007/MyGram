import './App.css'
import Login from './pages/Login/Login'
import Cadastro from './pages/Cadastro/Cadastro'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/cadastro' element={<Cadastro/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

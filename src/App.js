import React from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Home from './components/home/Home'
import "./app.css"
import Login from './components/login/Login'
import ProductDetail from './components/products/ProductDetail'
import "./server"
import { Toaster } from 'react-hot-toast'


const App = () => {
  return (
    <BrowserRouter>
       <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/product/:id' element={<ProductDetail/>}/>
       </Routes>
       <Toaster />
    </BrowserRouter>
  )
}

export default App
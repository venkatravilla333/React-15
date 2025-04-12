import React from 'react'
import Home from './components/functional-components/Routing/Home'
import About from './components/functional-components/Routing/About'
import Products from './components/functional-components/Routing/Products'
import { Routes, Route, Link } from 'react-router-dom'

import '../src/components/functional-components/Routing/style.css'
import Header from './components/functional-components/Routing/Header'
import ProductDescription from './components/functional-components/Routing/ProductDescription'

function App() {

  
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/home' element={<Home/> } />
        <Route path='/about' element={<About/> } />
        <Route path='/products' element={<Products/> } >
          <Route path=':id' element={<ProductDescription />} />
        </Route>
      </Routes>
      
    </div>
  )
}

export default App
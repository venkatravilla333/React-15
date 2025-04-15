import React from 'react'
import Home from './components/functional-components/Routing/Home'
// import About from './components/functional-components/Routing/About'
import Products from './components/functional-components/Routing/Products'
import { Routes, Route, Link, useLocation } from 'react-router-dom'

import '../src/components/functional-components/Routing/style.css'
import Header from './components/functional-components/Routing/Header'
import ProductDescription from './components/functional-components/Routing/ProductDescription'
import Pagenotfound from './components/functional-components/Routing/Pagenotfound'
let About = React.lazy(()=> import('./components/functional-components/Routing/About'))

function App() {

  let url = useLocation()
  
  
  return (
    <div>
      <Header/>
      {/* {url.pathname !== '/about' && <Header/>} */}
      <Routes>
        <Route path='/' element={<Home/> } />
        <Route path='/about' element={
          <React.Suspense fallback='loading'>
            <About/>
          </React.Suspense>} />
        <Route path='*' element={<Pagenotfound/> } />
        <Route path='/products' element={<Products/> } >
          <Route path=':id' element={<ProductDescription />} />
        </Route>
      </Routes>
      
    </div>
  )
}

export default App
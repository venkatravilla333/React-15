import React from 'react'
import Home from './components/functional-components/Routing/Home'
// import About from './components/functional-components/Routing/About'
import Products from './components/functional-components/Routing/Products'
import { Routes, Route, Link, useLocation } from 'react-router-dom'

import '../src/components/functional-components/Routing/style.css'
import Header from './components/functional-components/Routing/Header'
import ProductDescription from './components/functional-components/Routing/ProductDescription'
import Pagenotfound from './components/functional-components/Routing/Pagenotfound'
import A from './components/class-components/Remove-Duplicate-Logic/A'
import B from './components/class-components/Remove-Duplicate-Logic/B'
import C from './components/class-components/Remove-Duplicate-Logic/C'
// import A from './components/functional-components/Performance/Remove-Duplicate-Logic/A'
// import B from './components/functional-components/Performance/Remove-Duplicate-Logic/B'
// import C from './components/functional-components/Performance/Remove-Duplicate-Logic/C'
let About = React.lazy(()=> import('./components/functional-components/Routing/About'))

function App() {

  let url = useLocation()
  
  
  return (
    <div>
      <Header />
      <A />
      <B />
      <C />
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
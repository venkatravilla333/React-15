import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

function ProductDescription() {

  let { id } = useParams()
  let url = useLocation()
  console.log(url)
  return (
    <div>
      <h2>ProductDescription {id}</h2>
      <p>Name: {url.state.name}</p>
      <p>Price: {url.state.price}</p>
    </div>
  )
}

export default ProductDescription
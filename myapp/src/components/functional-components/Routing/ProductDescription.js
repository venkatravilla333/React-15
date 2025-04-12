import React from 'react'
import { useParams } from 'react-router-dom'

function ProductDescription() {

  let {id} = useParams()
  return (
    <h2>ProductDescription {id}</h2>
  )
}

export default ProductDescription
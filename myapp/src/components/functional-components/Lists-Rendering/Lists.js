import React from 'react'

function Lists() {
   var products= [{id: 1, name: 'laptop', price: 40000}, {id: 2, name: 'mobile', price: 20000},{id: 3, name: 'samsung ac', price: 45000}, {id: 4, name: 'tab', price: 4500}]
  return (
    <div>

      {/* <h2>Id: {data[0].id }</h2>
      <h2>Name: {data[0].name }</h2>
      <h2>Price: {data[0].price }</h2>
      <h2>Id: {data[1].id }</h2>
      <h2>Name: {data[1].name }</h2>
      <h2>Price: {data[1].price }</h2>
      <h2>Id: {data[2].id }</h2>
      <h2>Name: {data[2].name }</h2>
      <h2>Price: {data[2].price }</h2> */}

      {
        products.map((product) => {
          return <React.Fragment key={product.id}>
            <h2>Id: {product.id}</h2>
            <h2>Name: {product.name}</h2>
            <h2>Price: {product.price}</h2>
          </React.Fragment>
        })
      }
    </div>
  )
}

export default Lists
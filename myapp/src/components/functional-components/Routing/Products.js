import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

function Products() {

var [products, setProducts] =  useState([
    { id: 1, name: 'Apple', price: 500 },
    { id: 2, name: 'Banana', price: 50 },
    { id: 3, name: 'Grape', price: 100 },
    { id: 4, name: 'Papaya', price: 30 },
  ])
  
  return (
    <div>
      <h3>Products component</h3>
      <ul className='products-links'>
        {
          products.map((product) => {
            return <li>
                      <Link state={product} to={`/products/${product.id}`}>{product.name}</Link>
                   </li>
              })
            }
      {/* <li>
      <Link to="/products/1">Apple</Link>
      </li>
      <li>
      <Link to="/products/2">Banana</Link>
      </li>
      <li>
      <Link to="/products/3">Grap</Link>
      </li> */}
   </ul>
      <Outlet/>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam soluta eius, tempore ducimus voluptatem alias maiores, ea quasi similique laborum, quod doloribus corporis consequuntur est aliquam exercitationem temporibus obcaecati beatae nobis! Ad rem tempora facilis possimus corporis cupiditate expedita. Voluptas, dolorem odio. Nisi non vel nulla ipsum ullam nam, id quasi ex rem velit voluptatibus obcaecati eligendi aliquam, neque ab? Facere iste natus minus tempore placeat sed animi, obcaecati aut, quidem dolores assumenda enim laudantium mollitia earum esse dolorem? Voluptatum autem temporibus nihil doloribus, commodi, asperiores excepturi pariatur nisi vero obcaecati, nobis tempore in id saepe. Odit explicabo, harum dicta aut quibusdam itaque doloribus adipisci culpa temporibus natus voluptatibus eaque debitis ipsam consequatur, delectus optio tempore voluptate rerum maiores accusantium, quam illum quia placeat! Obcaecati adipisci delectus ullam temporibus provident. Quasi commodi alias nihil exercitationem ullam cupiditate dicta quisquam distinctio deleniti minima, mollitia nobis aut provident ipsa repudiandae corrupti quas rerum sapiente eius inventore nesciunt? Perferendis tempore adipisci rem sint hic qui sunt voluptatem omnis, accusamus a, odio modi iste ab minima aliquid error aliquam magnam dignissimos repellendus nesciunt quasi. Repellendus veritatis exercitationem omnis porro iste veniam nisi quia fuga facere neque consectetur fugit qui, molestias dignissimos dolore consequuntur delectus possimus non mollitia cum beatae unde quasi praesentium! Excepturi, esse! At error quibusdam dignissimos totam doloribus ipsam eos expedita optio velit fugit molestias dolorem, ad eaque fugiat facere sapiente, aliquid repudiandae ratione quasi debitis assumenda! Eaque quis deleniti maiores exercitationem, omnis tempore numquam aliquam quaerat nihil distinctio quibusdam maxime repellat enim illum reiciendis! Nam explicabo aliquam quaerat dolores veritatis, similique, sapiente atque sit quam eligendi voluptate tempora facere enim voluptatem dicta nisi, voluptas neque? Facere voluptates aut, quo velit blanditiis accusamus in alias incidunt, necessitatibus sunt amet tempora nostrum! Explicabo ipsa in inventore, deserunt placeat architecto est assumenda ipsum praesentium!</p>
    </div>
  )
}

export default Products
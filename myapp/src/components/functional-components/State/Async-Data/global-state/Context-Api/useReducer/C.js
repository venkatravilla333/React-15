import React, { useContext, useEffect } from 'react'
import { dataContext } from './GetData'

function C() {
  var data =  useContext(dataContext)
  return (
    <div>
      {
        data.loading ? <h3>Loading</h3> : data.errror ? <h3>{data.errror}</h3> :
          <div>
            {
              data.posts.map((post) => {
                return <>
                  <h4>{post.id}</h4>
                  <h4>{post.title}</h4>
                  <h4>{post.body}</h4>
                </>
              })
            }
          </div>
     }
    </div>
  )
}

export default C
import React from 'react'
import Child from './Child'
import ErrorBoundry from './ErrorBoundry'

function Parent() {
  return (
    <div>
      <ErrorBoundry>
        <Child age={20} />
      </ErrorBoundry>
      <ErrorBoundry>
        <Child age={15} />
      </ErrorBoundry>
      <ErrorBoundry>
        <Child age={30} />
      </ErrorBoundry>

    </div>
  )
}

export default Parent
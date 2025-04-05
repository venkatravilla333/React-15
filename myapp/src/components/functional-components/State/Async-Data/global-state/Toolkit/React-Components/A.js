import React, { useState } from 'react'
import B from './B'
import C from './C'

import { store } from '../redux-toolkit/store'
import {Provider} from 'react-redux'

function A() {
 console.log(store)
  return (
    <div>
      <Provider store={store}>
         <B />
         <C />
      </Provider>
    </div>
  )
}

export default A











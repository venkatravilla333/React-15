import React, { Component } from 'react'
import Child1 from './Child1'
import Child2 from './Child2'

export class Parent extends Component {
  constructor() {
    super()
    this.state = {
      name: 'sachin'
    }
  }
  render() {
    return (
      <div>
        <Child1 data={this.state.name} />
        <Child2 />
      </div>
    )
  }
}

export default Parent
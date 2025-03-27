import React, { Component } from 'react'
import Child from './Child'

export class Parent extends Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
    console.log('Parent constructor')
    // this.increaseCount = this.increaseCount.bind(this)
  }

  static getDerivedStateFromProps(nextProps, preState) {
    console.log('parent getderived')
    return null
  }

  componentDidMount() {
    console.log('parent didmount')
  }

  render() {
    console.log('parent render')
    return (
      <div>
        <Child />
        <button onClick={this.increaseCount}>update</button>
      </div>
    )
  }
}

export default Parent
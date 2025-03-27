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

  
  increaseCount = () =>{
    console.log(this)
    this.setState({
      count: this.state.count + 1
    })
 }

  static getDerivedStateFromProps(nextProps, preState) {
    console.log('parent getderived')
    return null
  }

  componentDidMount() {
    console.log('parent didmount')
  }

  shouldComponentUpdate(preProps, preState) {
    console.log('parent shouldupdate')
    return true
  }

  getSnapshotBeforeUpdate() {
    console.log('parent get snapshot')
    return null
  }

  componentDidUpdate() {
    console.log('parent didupdate')
  }


  render() {
    console.log('parent render')
    return (
      <div>
        <h3>Count: {this.state.count}</h3>
        <button onClick={this.increaseCount}>update</button>
        <Child />
      </div>
    )
  }
}

export default Parent
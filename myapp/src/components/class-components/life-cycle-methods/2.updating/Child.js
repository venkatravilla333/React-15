import React, { Component } from 'react'
import Subchild from './Subchild'

export class Child extends Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
    console.log('child constructor')
  }

  static getDerivedStateFromProps(nextProps, preState) {
    console.log('child getderived')
    return null
  }

  componentDidMount() {
    console.log('child didmount')
  }
  shouldComponentUpdate(preProps, preState) {
    console.log('child shouldupdate')
    return true
  }

  getSnapshotBeforeUpdate() {
    console.log('child get snapshot')
    return null
  }

  componentDidUpdate() {
    console.log('child didupdate')
  }


  render() {
    console.log('child render')
    return (
      <div>
        <Subchild/>
      </div>
    )
  }
}

export default Child
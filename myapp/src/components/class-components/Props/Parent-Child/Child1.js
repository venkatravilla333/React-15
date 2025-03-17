import React, { Component } from 'react'

export class Child1 extends Component {
  render() {
    console.log(this)
    return (
      <div>Child1: {this.props.data }</div>
    )
  }
}

export default Child1
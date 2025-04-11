import React, { Component } from 'react'

export class Child extends Component {
  render() {
    let {name, age} = this.props.data
    return (
      <div>
        <h3>Name: {name}</h3>
        <h3>Age: {age}</h3>
      </div>
    )
  }
}

export default Child
import React, { Component } from 'react'

export class Parent extends Component {
  constructor() {
    super()
    this.state = {
      x: 0
    }
  }
  render() {
    console.log('render')
    return (
      <div>
        <h3>X: {this.state.x}</h3>
        <button onClick={()=>this.setState({x: this.state.x+1})}>update X</button>
      </div>
    )
  }
}

export default Parent
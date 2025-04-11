import React, { Component } from 'react'
import Child from './Child'

export class Parent extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      data: {
        name: 'sachin',
        age: 40
     }
    }
  }
  render() {
    // let {name, age} = this.state.data
    return (
      <div>
        {/* <h3>Name: {name }</h3>
        <h3>Age: {age}</h3> */}
        <Child data={this.state.data} />
      </div>
    )
  }
}

export default Parent
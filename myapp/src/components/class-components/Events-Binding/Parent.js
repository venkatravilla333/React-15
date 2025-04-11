import React, { Component } from 'react'

export class Parent extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count: 0
    }
    // this.updateCount = this.updateCount.bind(this)
  }

  updateCount = ()=> {
    console.log(this)
    this.setState({
      count: this.state.count+1
    })
  }

  render() {
    let {count} = this.state
    return (
      <div>
        <h3>Count: {count}</h3>
        <button onClick={this.updateCount}>update count</button>
      </div>
    )
  }
}

export default Parent
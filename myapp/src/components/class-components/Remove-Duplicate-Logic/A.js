import React, { Component } from 'react'
import Hoc from './Hoc'

export class A extends Component {
   constructor(props) {
     super(props)
    //  this.state = {
    //     count: 0
    //  }
  }
  
  // increaseCount = () => {
  //   this.setState({
  //     count: this.state.count+1
  //   })
  // }
  render() {
    return (
      <div>
        <h3>Count1: {this.props.count}</h3>
        <button onClick={this.props.increaseCount}>increase count1</button>
      </div>
    )
  }
}

export default Hoc(A)
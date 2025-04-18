import React, { Component } from 'react'
import Hoc from './Hoc'

export class C extends Component {
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
        <button onDoubleClick={this.props.increaseCount}>increase count3</button>
      </div>
    )
  }
}

export default Hoc(C)
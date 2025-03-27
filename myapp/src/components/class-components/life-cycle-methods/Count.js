import React, { Component } from 'react'

export class Count extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       count: 0
    }
  }

  updateCount = () => {
    this.setState({
      count: this.state.count+1
    })
  }
  render() {
    return (
      <div>
        <h4>Count: {this.state.count}</h4>
        <button onClick={this.updateCount}>update</button>
      </div>
    )
  }
}

export default Count
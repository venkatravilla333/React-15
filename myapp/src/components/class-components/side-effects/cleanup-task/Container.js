import React, { Component } from 'react'
import Browser from '../runs-only-once/Browser'

export class Container extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       display: true
    }
  }
  render() {
    return (
      <div>
        {this.state.display && <Browser />}
        <button onClick={()=>this.setState({display: this.state.display = false})}>toggle</button>
      </div>
    )
  }
}

export default Container
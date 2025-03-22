import React, { Component } from 'react'
import B from './B'
import C from './C'

export let nameContext = React.createContext('sachin')
export let ageContext = React.createContext(40)
export let colorContext = React.createContext('red')

export class A extends Component {
  constructor() {
    super()
    this.state = {
      name: 'kohli'
    }
  }
  render() {
    return (
      <div>
        <nameContext.Provider value={this.state.name}>
        <B />
        <C />
          <button onClick={()=>this.setState({name: this.state.name = 'dhoni'})}>update name</button>
        </nameContext.Provider>
      </div>
    )
  }
}

export default A
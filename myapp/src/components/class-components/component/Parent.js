import React from "react"

class Parent extends React.Component{
  constructor() {
    super()
    this.state = {
      name:  'sachin'
    }
  }

  render() {
    return <h3>Class com: {this.state.name}</h3>
  }
  
}

export default Parent









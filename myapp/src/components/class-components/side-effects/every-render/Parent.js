import React, { Component } from 'react'

export class Parent extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      nCount: 0,
      dCount: 0
    }
  }

  updateNcount = () => {
    this.setState({
      nCount: this.state.nCount+1,
   
    })
  }
  updateDcount = () => {
    this.setState({
      dCount: this.state.dCount+1
    })
  }

  componentDidMount() {
    console.log('did mount')
    document.title = this.state.dCount
  }

  componentDidUpdate() {
    console.log('did update')
    document.title = this.state.dCount
  }
  render() {
    console.log('render')
    return (
      <div>
        <h3>N count: {this.state.nCount}</h3>
        <button onClick={this.updateNcount}>update n count</button>
        <h3>D count: {this.state.dCount}</h3>
        <button onClick={this.updateDcount}>update d count</button>
      </div>
    )
  }
}

export default Parent
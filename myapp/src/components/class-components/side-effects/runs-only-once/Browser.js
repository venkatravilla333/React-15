import React, { Component } from 'react'

export class Browser extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      x: 0,
      y: 0
    }
  }

  updatestate = (e) => {
    console.log('update state')
    this.setState({
      x: e.clientX,
      y: e.clientY
  })
}

  componentDidMount() {
    console.log('did mount')
    window.addEventListener('click', this.updatestate)
  }

  componentWillUnmount() {
    console.log('clean up task')
  window.removeEventListener('click', this.updatestate)
}
  render() {
    console.log('render')
    return (
      <div>
        <h3>X: {this.state.x}</h3>
        <h3>Y: {this.state.y}</h3>
      </div>
    )
  }
}

export default Browser
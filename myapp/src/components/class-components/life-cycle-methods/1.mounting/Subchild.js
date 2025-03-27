import React, { Component } from 'react'

export class Subchild extends Component {


  constructor(props) {
    super(props)
  
    this.state = {
       count: 0
    }
    console.log('Sub child constructor')
  }

    static getDerivedStateFromProps(nextProps, preState) {
    console.log('subchild getderived')
    return null
  }

  componentDidMount() {
    console.log('subchild didmount')
  }
  render() {
    console.log('subchild redner')
    return (
      <div>Subchild</div>
    )
  }
}


export default Subchild
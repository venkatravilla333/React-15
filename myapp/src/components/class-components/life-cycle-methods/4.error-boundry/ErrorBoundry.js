import React, { Component } from 'react'

export class ErrorBoundry extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       hasError: false
    }
  }
  static getDerivedStateFromError() {
    return {
        hasError: true
      }
  }
  componentDidCatch(err) {
    console.log(err)
  }
  render() {
   
   return this.state.hasError ? <h3>Somthing went wrong</h3> : this.props.children
    
  }
}

export default ErrorBoundry
import React from "react"

let Hoc = (OriginalCom) => {
  class NewCom extends React.Component{
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }

    increaseCount = () => {
      this.setState({
        count: this.state.count+1
      })
    }
    render() {
      return <div>
        <OriginalCom count={this.state.count} increaseCount={this.increaseCount } />
      </div>
    }
  }
  return NewCom
}

export default Hoc
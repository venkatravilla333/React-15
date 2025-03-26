import React, { Component } from 'react'
import { connect, useSelector } from 'react-redux'
import { buyCake } from '../Redux-core/cake/cakeAction'

export class L extends Component {
  render() {
    return (
      <div>
        <h3>L no of cakes: {this.props.noOfCakes}</h3>
        <button onClick={this.props.buyCake}>buy cake</button>
        <h3>L no of curds: {this.props.noOfCurds}</h3>

      </div>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    noOfCakes: state.cake.noOfCakes,
    noOfCurds: state.curd.noOfCurds
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => {
     return dispatch(buyCake())
    } 
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (L)
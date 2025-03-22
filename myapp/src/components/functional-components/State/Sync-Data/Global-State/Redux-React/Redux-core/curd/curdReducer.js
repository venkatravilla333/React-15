import { BUY_CURD } from "./actionType"

var initialtate = {
  noOfCurds : 50
}

export var curdReducer = (state = initialtate, action) => {
  switch (action.type) {
    case BUY_CURD:
      return {
        noOfCurds: state.noOfCurds - 1
      }
      break;
    default:
      return state
  }
} 
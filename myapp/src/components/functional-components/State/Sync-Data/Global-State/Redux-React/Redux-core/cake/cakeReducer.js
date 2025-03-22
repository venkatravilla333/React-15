import { BUY_CAKE } from "./actionType";



var initialtate = {
  noOfCakes: 100
}

export function cakeReducer(state=initialtate, action) {
  console.log(action)
  switch (action.type) {
    case BUY_CAKE:
      return {
        noOfCakes: state.noOfCakes - 1
      }
      break;
    default: 
      return state
  }
} 
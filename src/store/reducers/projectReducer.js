import * as actionTypes from "../actionTypes";

// reducer
export default function projectReducer(state = [], action) {
  switch (action.type) {
    case actionTypes.BUG_ADD:
      return [...action.payload];

    case actionTypes.BUG_REMOVE:
      return [...action.payload];

    case actionTypes.BUG_RESOLVE:
      return [...action.payload];

    default:
      return state;
  }
}
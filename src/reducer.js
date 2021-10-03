import * as actions from "./actionTypes";

export const reducer = (state = [], action) => {
  switch (action.type) {
    case actions.BUG_ADD:
      return [...action.payload];

    case actions.BUG_REMOVE:
      return [...action.payload];

    case actions.BUG_RESOLVE:
      return [...action.payload];

    default:
      return state;
  }
};

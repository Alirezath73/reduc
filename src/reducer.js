import * as actions from "./actionTypes";

export const reducer = (state = [], action) => {
  switch (action.type) {
    case actions.BUG_ADD:
      return [...action.payload];

    case actions.BUG_REMOVE:
      return [...action.payload];

    /* case "RESOLVE_BUG":
      return [...action.payload]; */

    default:
      return state;
  }
};

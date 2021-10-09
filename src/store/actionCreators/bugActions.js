// action creators
import store from "../configureStore";
import * as actionTypes from "../actionTypes";

let id = 0;
export const add = (description) => {
  return {
    type: actionTypes.BUG_ADD,
    payload: [
      ...store.getState(),
      {
        id: ++id,
        description,
        resolved: false,
      },
    ],
  };
};

export const remove = (id) => {
  return {
    type: actionTypes.BUG_REMOVE,
    payload: [...store.getState()].filter((bug) => bug.id !== id),
  };
};

export const resolve = (id) => {
  const immutableState = [...store.getState()];

  const index = immutableState.findIndex((bug) => bug.id === id);
  const bug = { ...immutableState[index] };

  bug.resolved = true;
  immutableState[index] = bug;

  return {
    type: actionTypes.BUG_RESOLVE,
    payload: immutableState,
  };
};

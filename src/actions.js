import { store } from "./store";
import * as actions from "./actionTypes";

let id = 0;
export const add = (description) => {
  return {
    type: actions.BUG_ADD,
    payload: [
      ...store.getState(),
      {
        id: ++id,
        description: description,
        resolved: false,
      },
    ],
  };
};

export const remove = (id) => {
  return {
    type: actions.BUG_REMOVE,
    payload: [...store.getState()].filter((bug) => bug.id !== id),
  };
};

export const resolve = (id) => {
  const immutableState = [...store.getState()];

  
  const index = immutableState.findIndex((bug) => bug.id === id);
  console.log(index);
  // state[index].resolved = true;

  return {
    type: actions.BUG_RESOLVE,
    payload: state,
  };
};

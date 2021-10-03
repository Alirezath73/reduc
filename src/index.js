import { add, remove, resolve } from "./actions";
import { store } from "./store";

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(add("first"));
store.dispatch(add("second"));
/* store.dispatch(add("second"));
store.dispatch(add("third"));

store.dispatch(remove(2)); */

store.dispatch(resolve(1));

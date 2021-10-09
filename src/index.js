import { add, remove, resolve } from "./store/actionCreators/bugActions";
import store from "./store/configureStore";

/* store.subscribe(() => {
  console.log(store.getState());
}); */

store.dispatch(add("first"));
// store.dispatch(add("second"));
/* store.dispatch(add("second"));
store.dispatch(add("third"));

store.dispatch(remove(2)); */

// store.dispatch(resolve(1));

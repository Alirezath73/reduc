import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { logger } from "./middleware/logger";
import reducers from "./reducers/bugReducer";


const composeEnhancers = composeWithDevTools({ trace: true });

const configureStore = createStore(reducers, composeEnhancers(applyMiddleware(logger("dev"))));
export default configureStore;

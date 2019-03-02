import { createStore, applyMiddleware, compose } from "redux";
import reducers from "reducers";
import thunk from "redux-thunk";

export default () => {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  return createStore(
    reducers,
    /* preloadedState, */ composeEnhancers(applyMiddleware(thunk))
  );
};

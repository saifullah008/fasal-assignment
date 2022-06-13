import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./rootRuducer";

const composeEnhancers = composeWithDevTools({});

const initailStore = {
  playLists: {
    playLists: JSON.parse(localStorage.getItem("playLists")) ?? [],
  },
};

export const store = createStore(rootReducer, initailStore, composeEnhancers());
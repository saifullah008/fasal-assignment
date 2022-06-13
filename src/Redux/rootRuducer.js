import { combineReducers } from "redux";
import { playlistReducer } from "./playlistReducer";
const rootReducer = combineReducers({
  playLists: playlistReducer,
});

export default rootReducer;

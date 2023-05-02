import { combineReducers } from "redux";
import todo from "./slices/todo";
import { enableMapSet } from 'immer';

enableMapSet();

const reducers = combineReducers({
    todo,
});

export default reducers;

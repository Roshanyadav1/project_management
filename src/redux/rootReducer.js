import { combineReducers } from "redux";
import spaceData from "./slices/spaceData";
import { enableMapSet } from 'immer';

enableMapSet();

const reducers = combineReducers({
    spaceData,
});

export default reducers;

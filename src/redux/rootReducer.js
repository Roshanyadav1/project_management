import { combineReducers } from "redux";
import spaceData from "./slices/spaceData";

const reducers = combineReducers({
    spaceData,
});

export default reducers;

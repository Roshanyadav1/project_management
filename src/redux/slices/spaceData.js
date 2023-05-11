import { createSlice } from "@reduxjs/toolkit";


export const spaceData = createSlice({
    name: "spaceData",
    initialState: {
        spaceData: []
    },
    reducers: {
        setSpaceData: (state, action) => {
            state.spaceData = action.payload;
        },
    },
});

export const { setSpaceData } = spaceData.actions;

export default spaceData.reducer;

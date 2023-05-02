import { createSlice } from "@reduxjs/toolkit";


export const todo = createSlice({
    name: "todo",
    initialState: {
        todo: []
    },
    reducers: {
        setTodo: (state, action) => {
            state.todo = action.payload;
        },
    },
});

export const { setTodo } = todo.actions;

export default todo.reducer;
